const base = process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:8033';
const pages = ['/', '/index.html', '/poetry', '/poetry.html', '/resume-live.html',
  ...['ai-hr', 'credit-risk', 'customer-churn', 'hr-attrition', 'marketpulse-ai', 'mediassist', 'procurement-advisor', 'selenium-ecommerce', 'smart-irrigation'].map(name => `/case-studies/${name}.html`),
  '/project/project_606', '/project/project_707'];
const checked = new Set();
const request = (url, options = {}) => fetch(url, { ...options, signal: AbortSignal.timeout(15000) });
async function checkInBatches(items, check, batchSize = 12) {
  const list = [...items];
  for (let i = 0; i < list.length; i += batchSize) await Promise.all(list.slice(i, i + batchSize).map(check));
}
for (const page of pages) {
  const response = await request(new URL(page, base));
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) throw Error(`${page}: ${response.status}`);
  const html = await response.text();
  if (page === '/' && (!html.includes('ai-hr-rho-ten.vercel.app') || !html.includes('mediassist-chatbot-saptarshi.onrender.com'))) throw Error('Live demo links missing');
  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const url = new URL(match[1], new URL(page, base));
    if (url.origin === new URL(base).origin && !url.pathname.startsWith('/signin-')) checked.add(url.pathname);
  }
}
await checkInBatches(checked, async path => {
  const response = await request(new URL(path, base), { method: 'HEAD' });
  if (!response.ok) throw Error(`Broken internal link: ${path} (${response.status})`);
});
const admin = await request(new URL('/api/admin/content', base));
if (admin.status !== 403) throw Error(`Admin access should require authentication: ${admin.status}`);
await checkInBatches(['/favicon.ico', '/robots.txt', '/sitemap.xml'], async path => {
  const response = await request(new URL(path, base), { method: 'HEAD' });
  if (!response.ok) throw Error(`Hosting asset missing: ${path} (${response.status})`);
});
const manifestResponse = await request(new URL('/assets/projects/repo-screenshots/manifest.json', base));
if (!manifestResponse.ok) throw Error('Repository screenshot manifest missing');
await checkInBatches((await manifestResponse.json()).repositories.flatMap(repository => repository.gallery), async image => {
    const response = await request(new URL('/' + image.asset, base), { method: 'HEAD' });
    if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw Error(`Repository screenshot missing: ${image.asset}`);
});
console.log(`Smoke passed: ${pages.length} pages, ${checked.size} internal routes/assets, admin access`);
