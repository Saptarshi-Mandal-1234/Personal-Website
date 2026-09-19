(() => {
const button = document.getElementById('readingTheme');
let theme = 'dark';
function apply() { document.documentElement.dataset.theme = theme; button.hidden = true; }
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

document.getElementById('poemControls').hidden=false;
})();

// Loop visible poems silently; pause for reading, offscreen cards and hidden tabs.
(() => {
 const videos=[...document.querySelectorAll('.poem-card video')];
 const visible=new WeakMap();const hovered=new WeakSet();const focused=new WeakSet();
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 function sync(v){const card=v.closest('.poem-card');const play=visible.get(v)&&!card.hidden&&!document.hidden&&!hovered.has(v)&&!focused.has(v)&&!motion.matches;if(play){v.play().catch(()=>{});}else v.pause();}
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{visible.set(e.target,e.isIntersecting);sync(e.target);}),{threshold:.15});
 videos.forEach(v=>{v.muted=true;v.defaultMuted=true;v.loop=true;v.playsInline=true;v.preload='metadata';observer.observe(v);const card=v.closest('.poem-card');card.addEventListener('mouseenter',()=>{hovered.add(v);sync(v);});card.addEventListener('mouseleave',()=>{hovered.delete(v);sync(v);});card.addEventListener('focusin',()=>{focused.add(v);sync(v);});card.addEventListener('focusout',e=>{if(!card.contains(e.relatedTarget)){focused.delete(v);sync(v);}});new MutationObserver(()=>sync(v)).observe(card,{attributes:true,attributeFilter:['hidden']});});
 document.addEventListener('visibilitychange',()=>videos.forEach(sync));motion.addEventListener('change',()=>videos.forEach(sync));
})();
