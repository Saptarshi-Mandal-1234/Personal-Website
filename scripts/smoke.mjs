const base = process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:8033';
const pages = ['/', '/index.html', '/poetry', '/poetry.html', '/resume-live.html', '/case-studies/ai-hr.html', '/case-studies/mediassist.html', '/case-studies/selenium-ecommerce.html', '/project/project_606', '/project/project_707'];
const checked = new Set();
for (const page of pages) {
  const response = await fetch(new URL(page, base));
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) throw Error(`${page}: ${response.status}`);
  const html = await response.text();
  if (page === '/' && (!html.includes('ai-hr-rho-ten.vercel.app') || !html.includes('mediassist-chatbot.onrender.com'))) throw Error('Live demo links missing');
  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const url = new URL(match[1], new URL(page, base));
    if (url.origin === new URL(base).origin && !url.pathname.startsWith('/signin-')) checked.add(url.pathname);
  }
}
for (const path of checked) {
  const response = await fetch(new URL(path, base), { method: 'HEAD' });
  if (!response.ok) throw Error(`Broken internal link: ${path} (${response.status})`);
}
const admin = await fetch(new URL('/api/admin/content', base));
if (admin.status !== 403) throw Error(`Admin access should require authentication: ${admin.status}`);
const manifestResponse = await fetch(new URL('/assets/projects/repo-screenshots/manifest.json', base));
if (!manifestResponse.ok) throw Error('Repository screenshot manifest missing');
for (const repository of (await manifestResponse.json()).repositories) {
  for (const image of repository.gallery) {
    const response = await fetch(new URL('/' + image.asset, base), { method: 'HEAD' });
    if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw Error(`Repository screenshot missing: ${image.asset}`);
  }
}
console.log(`Smoke passed: ${pages.length} pages, ${checked.size} internal routes/assets, admin access`);
