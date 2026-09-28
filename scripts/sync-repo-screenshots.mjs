import fs from 'node:fs/promises';
import path from 'node:path';
import { githubRawImage, projectHomepage, selectProjectImages } from '../github-projects.mjs';

const owner = 'Saptarshi-Mandal-1234';
const root = path.resolve('assets/projects/repo-screenshots');
const manifestPath = path.join(root, 'manifest.json');
const headers = { 'User-Agent': 'saptarshi-portfolio-image-sync', Accept: 'application/vnd.github+json' };
if (process.env.GH_TOKEN) headers.Authorization = `Bearer ${process.env.GH_TOKEN}`;
const previous = JSON.parse(await fs.readFile(manifestPath, 'utf8').catch(() => '{"repositories":[]}'));
const previousByName = new Map(previous.repositories.map(repo => [repo.repo.toLowerCase(), repo]));

async function github(url) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw Error(`${url}: HTTP ${response.status}`);
  return response.json();
}

async function publicRepositories() {
  const result = [];
  for (let page = 1; page <= 10; page++) {
    const batch = await github(`https://api.github.com/users/${owner}/repos?sort=updated&per_page=100&page=${page}`);
    result.push(...batch);
    if (batch.length < 100) break;
  }
  return result.filter(repo => !repo.private && !repo.archived && !repo.fork && repo.name.toLowerCase() !== owner.toLowerCase());
}

function validImage(bytes, name) {
  return (/\.png$/i.test(name) && bytes.subarray(0, 4).equals(Buffer.from([137, 80, 78, 71])))
    || (/\.jpe?g$/i.test(name) && bytes[0] === 255 && bytes[1] === 216)
    || (/\.webp$/i.test(name) && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP');
}

const repositories = [];
for (const repo of await publicRepositories()) {
  const old = previousByName.get(repo.name.toLowerCase());
  if (!process.argv.includes('--force') && old?.pushedAt === repo.pushed_at && await Promise.all(old.gallery.map(file => fs.access(file.asset).then(() => true, () => false))).then(items => items.every(Boolean))) {
    repositories.push(old);
    console.log(`${repo.name}: unchanged; kept ${old.gallery.length} images`);
    continue;
  }
  try {
    const tree = await github(`https://api.github.com/repos/${owner}/${encodeURIComponent(repo.name)}/git/trees/${encodeURIComponent(repo.default_branch)}?recursive=1`);
    if (tree.truncated) throw Error('GitHub returned a truncated tree; keeping the previous gallery');
    const selected = selectProjectImages(tree.tree);
    const counts = new Map();
    selected.forEach(file => { const name = path.posix.basename(file.path).toLowerCase(); counts.set(name, (counts.get(name) || 0) + 1); });
    const gallery = [];
    const output = path.join(root, repo.name);
    await fs.mkdir(output, { recursive: true });
    for (const file of selected) {
      const basename = path.posix.basename(file.path);
      const name = counts.get(basename.toLowerCase()) > 1 ? `${file.sha.slice(0, 10)}-${basename}` : basename;
      const asset = `assets/projects/repo-screenshots/${repo.name}/${name}`;
      if (!(await fs.access(asset).then(() => true, () => false))) {
        const response = await fetch(githubRawImage(owner, repo.name, repo.default_branch, file.path), { signal: AbortSignal.timeout(20000) });
        if (!response.ok) throw Error(`${repo.name}/${file.path}: HTTP ${response.status}`);
        const bytes = Buffer.from(await response.arrayBuffer());
        if (bytes.length > 5_000_000 || !validImage(bytes, name)) throw Error(`${repo.name}/${file.path}: invalid image`);
        await fs.writeFile(path.join(output, name), bytes);
      }
      gallery.push({ source: file.path, asset, sha: file.sha });
    }
    const discovered = tree.tree.filter(file => file.type === 'blob' && /\.(?:png|jpe?g|webp)$/i.test(file.path)).map(file => file.path);
    repositories.push({ repo: repo.name, commit: tree.sha, pushedAt: repo.pushed_at, homepage: projectHomepage(repo.homepage), discovered, gallery });
    console.log(`${repo.name}: found ${discovered.length} images across the repository; selected ${gallery.length}`);
  } catch (error) {
    if (!old) throw error;
    repositories.push(old);
    console.warn(`${repo.name}: ${error.message}`);
  }
}

const next = { updated: new Date().toISOString(), repositories };
if (JSON.stringify(previous.repositories) === JSON.stringify(repositories)) {
  console.log('Repository image manifest is already current');
} else {
  await fs.writeFile(manifestPath, JSON.stringify(next, null, 2) + '\n');
}
