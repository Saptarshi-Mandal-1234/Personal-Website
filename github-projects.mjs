const imageExtension = /\.(?:png|jpe?g|webp)$/i;
const excludedDirectory = /(^|\/)(?:node_modules|vendor|dist|build|coverage|\.next|\.git|\.venv|venv|__pycache__|test-results)(\/|$)/i;
const excludedName = /(?:^|[-_. ])(?:icon|logo|badge|avatar|favicon|sprite|placeholder|banner|background|bg)(?:[-_. ]|$)/i;
const screenshotPath = /(?:^|\/)(?:screenshots?|dashboards?)(?:\/|$)/i;
const otherImagePath = /(?:^|\/)(?:gallery|demo|previews?|docs\/assets)(?:\/|$)/i;
const priorityName = /(?:screenshot|dashboard|overview|home|result|report|interface|workflow|preview|app)[-_. ]/i;

export function projectHomepage(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || !url.hostname || /(^|\.)github\.com$/i.test(url.hostname)) return null;
    return url.href;
  } catch { return null; }
}

export function selectProjectImages(files, limit = 5) {
  const candidates = files.filter(file => file.type === 'blob' && typeof file.path === 'string'
    && imageExtension.test(file.path) && !excludedDirectory.test(file.path)
    && !excludedName.test(file.path.split('/').at(-1))
    && Number(file.size) > 0 && Number(file.size) <= 5_000_000);
  const latestByStep = new Map();
  for (const file of candidates.sort((a, b) => a.path.localeCompare(b.path))) {
    const step = file.path.toLowerCase().replace(/_\d{8}_\d{6}(?=\.)/g, '');
    latestByStep.set(step, file);
  }
  const ranked = [...latestByStep.values()].map(file => ({
    ...file,
    score: (screenshotPath.test(file.path) ? 10 : otherImagePath.test(file.path) ? 7 : 0)
      + (priorityName.test(file.path.split('/').at(-1)) ? 4 : 0)
      + (/\/assets\//i.test(file.path) ? 1 : 0),
  })).sort((a, b) => b.score - a.score || a.path.localeCompare(b.path));
  const seen = new Set();
  return ranked.filter(file => {
    const key = file.sha || file.path.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, limit).map(({ score, ...file }) => file);
}

export function githubRawImage(owner, repo, branch, filePath) {
  return `https://raw.githubusercontent.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/${encodeURIComponent(branch)}/${filePath.split('/').map(encodeURIComponent).join('/')}`;
}
