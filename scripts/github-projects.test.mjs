import assert from 'node:assert/strict';
import { selectProjectImages, projectHomepage, githubRawImage } from '../github-projects.mjs';

const files = [
  { type: 'blob', path: 'src/assets/logo.png', size: 500, sha: 'logo' },
  { type: 'blob', path: 'node_modules/package/screenshot.png', size: 500, sha: 'dependency' },
  { type: 'blob', path: 'docs/assets/product-home.png', size: 2000, sha: 'home' },
  { type: 'blob', path: 'screenshots/final-dashboard.jpeg', size: 2000, sha: 'dashboard' },
  { type: 'blob', path: 'screenshots/01_home_20260922_155935.png', size: 2000, sha: 'old-home' },
  { type: 'blob', path: 'screenshots/01_home_20260922_160711.png', size: 2000, sha: 'new-home' },
  { type: 'blob', path: 'archive/duplicate.jpeg', size: 2000, sha: 'dashboard' },
  { type: 'blob', path: 'results/large.png', size: 5_000_001, sha: 'large' },
  { type: 'blob', path: 'reports/chart.webp', size: 2000, sha: 'chart' },
];
assert.deepEqual(selectProjectImages(files).map(file => file.path), [
  'screenshots/01_home_20260922_160711.png', 'screenshots/final-dashboard.jpeg', 'docs/assets/product-home.png', 'reports/chart.webp',
]);
assert.equal(projectHomepage('https://ai-hr-2.vercel.app'), 'https://ai-hr-2.vercel.app/');
assert.equal(projectHomepage('javascript:alert(1)'), null);
assert.equal(projectHomepage('https://github.com/example/repo'), null);
assert.equal(githubRawImage('user', 'repo', 'main', 'docs/My shot.png'), 'https://raw.githubusercontent.com/user/repo/main/docs/My%20shot.png');
console.log('GitHub project image selection passed');
