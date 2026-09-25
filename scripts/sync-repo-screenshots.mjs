import fs from 'node:fs/promises';
import path from 'node:path';

const owner = 'Saptarshi-Mandal-1234';
const repos = ['WIPRO_COE_CLASS', 'WIPRO-Selenium-ecommerce-automation-capstone-project'];
const root = path.resolve('assets/projects/repo-screenshots');
const manifest = { updated: new Date().toISOString(), repositories: [] };
const headers = { 'User-Agent': 'saptarshi-portfolio-image-sync', Accept: 'application/vnd.github+json' };
async function github(url) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw Error(`${url}: HTTP ${response.status}`);
  return response.json();
}
for (const repo of repos) {
  const info = await github(`https://api.github.com/repos/${owner}/${repo}`);
  const tree = await github(`https://api.github.com/repos/${owner}/${repo}/git/trees/${encodeURIComponent(info.default_branch)}?recursive=1`);
  if (tree.truncated) throw Error(`${repo}: GitHub returned a truncated file tree`);
  const discovered = tree.tree.filter(file => file.type === 'blob' && /\.(?:jpe?g|png)$/i.test(file.path));
  const screenshots = discovered.filter(file => /(^|\/)screenshots?\//i.test(file.path) && file.size <= 5_000_000);
  const newestByPhase = new Map();
  for (const file of screenshots.sort((a, b) => a.path.localeCompare(b.path))) {
    const name = path.posix.basename(file.path);
    const phase = name.replace(/_\d{8}_\d{6}(?=\.)/i, '').toLowerCase();
    newestByPhase.set(phase, file);
  }
  const selected = [...newestByPhase.values()].sort((a, b) => a.path.localeCompare(b.path));
  const outDir = path.join(root, repo);
  await fs.mkdir(outDir, { recursive: true });
  const files = [];
  for (const file of selected) {
    const name = path.posix.basename(file.path);
    const destination = path.join(outDir, name);
    const raw = `https://raw.githubusercontent.com/${owner}/${repo}/${info.default_branch}/${file.path.split('/').map(encodeURIComponent).join('/')}`;
    const response = await fetch(raw, { signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw Error(`${repo}/${file.path}: HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    const isPng = name.toLowerCase().endsWith('.png') && bytes.subarray(0, 4).equals(Buffer.from([137, 80, 78, 71]));
    const isJpeg = /\.jpe?g$/i.test(name) && bytes[0] === 255 && bytes[1] === 216;
    if (!isPng && !isJpeg) throw Error(`${repo}/${file.path}: invalid image signature`);
    await fs.writeFile(destination, bytes);
    files.push({ source: file.path, asset: `assets/projects/repo-screenshots/${repo}/${name}`, sha: file.sha });
  }
  manifest.repositories.push({ repo, commit: tree.sha, discovered: discovered.map(f => f.path), gallery: files });
  console.log(`${repo}: found ${discovered.length} JPG/JPEG/PNG files; selected ${files.length} screenshots`);
}
await fs.writeFile(path.join(root, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
