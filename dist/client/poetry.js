(() => {
const button = document.getElementById('readingTheme');
let theme = 'dark';
try { theme = localStorage.getItem('poetry-theme') || 'dark'; } catch {}
function apply() { document.documentElement.dataset.theme = theme; button.textContent = theme === 'dark' ? 'Light reading mode' : 'Dark reading mode'; button.setAttribute('aria-pressed', String(theme === 'light')); }
button.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; apply(); try { localStorage.setItem('poetry-theme', theme); } catch {} });
apply();
})();
(() => {
const cards=[...document.querySelectorAll('.poem-card')];
const buttons=[...document.querySelectorAll('[data-language-filter]')];
buttons.forEach(button=>button.addEventListener('click',()=>{
 buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 cards.forEach(card=>{card.hidden=button.dataset.languageFilter!=='all'&&card.dataset.language!==button.dataset.languageFilter;if(card.hidden)card.querySelector('video')?.pause();});
 document.getElementById('poemStatus').textContent=cards.filter(c=>!c.hidden).length+' poems';
}));
document.querySelectorAll('video').forEach(v=>v.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==v)other.pause();})));
document.getElementById('poemControls').hidden=false;
})();
