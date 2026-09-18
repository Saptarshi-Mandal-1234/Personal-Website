(() => {
const button = document.getElementById('readingTheme');
let theme = 'dark';
try { theme = localStorage.getItem('poetry-theme') || 'dark'; } catch {}
function apply() { document.documentElement.dataset.theme = theme; button.textContent = theme === 'dark' ? 'Light reading mode' : 'Dark reading mode'; button.setAttribute('aria-pressed', String(theme === 'light')); }
button.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; apply(); try { localStorage.setItem('poetry-theme', theme); } catch {} });
apply();
})();