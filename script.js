'use strict';

// Mark JavaScript readiness for progressive enhancement
document.documentElement.classList.add('js');

/* ==========================================================================
   1. Theme Management (Light / Dark with localStorage persistence)
   ========================================================================== */
const themeToggle = document.getElementById('themeToggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const THEME_STORAGE_KEY = 'portfolio-theme-pref';

function getPreferredTheme() {
  return 'light';
}

function applyTheme(theme, save = false) {
  document.documentElement.setAttribute('data-theme', theme);
  if (save) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
      // Ignore storage errors (private mode / restricted storage)
    }
  }

  if (themeToggle) {
    const isDark = theme === 'dark';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    const iconSpan = themeToggle.querySelector('.theme-icon');
    if (iconSpan) {
      iconSpan.textContent = isDark ? '☀️' : '🌙';
    }
  }

  if (themeMeta) {
    themeMeta.setAttribute('content', theme === 'dark' ? '#0b131f' : '#101b2b');
  }
}

// Initialize theme immediately
applyTheme(getPreferredTheme(), false);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, true);
  });
}

// Sync with system theme changes when user has not set an explicit override

/* ==========================================================================
   2. Mobile Menu Navigation (Preserved Selenium & Touch Interactions)
   ========================================================================== */
const menu = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

if (menu && nav) {
  menu.hidden = false;

  function closeMenu() {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  }

  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
}

/* ==========================================================================
   3. Active Navigation Highlighting (IntersectionObserver)
   ========================================================================== */
const sectionElements = document.querySelectorAll('header#top, section[id]');
const navLinkElements = document.querySelectorAll('#navLinks a');

function updateActiveNav(activeId) {
  navLinkElements.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === `#${activeId}`) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'location');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

if ('IntersectionObserver' in window && sectionElements.length > 0) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateActiveNav(entry.target.id);
      }
    });
  }, {
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  });

  sectionElements.forEach((sec) => navObserver.observe(sec));
}

/* ==========================================================================
   4. Interactive Project Filters (Preserves Total Count in DOM for Selenium)
   ========================================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetFilter = btn.dataset.filter;

    // Update button states
    filterButtons.forEach((b) => {
      const isSelected = b === btn;
      b.classList.toggle('is-active', isSelected);
      b.setAttribute('aria-pressed', String(isSelected));
    });

    // Update project cards visibility via CSS class
    projectCards.forEach((card) => {
      const category = card.dataset.category;
      if (targetFilter === 'all' || category === targetFilter) {
        card.classList.remove('is-filtered-out');
      } else {
        card.classList.add('is-filtered-out');
      }
    });
    const visible = [...projectCards].filter(card => !card.classList.contains('is-filtered-out')).length;
    document.getElementById('filterStatus').textContent = targetFilter === 'all'
      ? `Showing all ${visible} projects`
      : `Showing ${visible} of ${projectCards.length} projects · ${btn.textContent.trim()}`;
  });
});

/* ==========================================================================
   5. Accessible Project Detail Dialog (Factual Content Only)
   ========================================================================== */
const projectData = window.cmsProjectData || {
 "project_808": {"category": "DATA ENGINEERING & ML", "title": "MarketPulse AI Foundation", "lead": "Market research built to be reproducible.", "desc": "A Python research pipeline for NIFTY 50 and ten liquid Indian stocks, with session-aware data validation, 39 technical features, PostgreSQL storage, chronological model evaluation, risk/anomaly analysis and seven-page Power BI report generation. Project documentation reports that tested ML candidates did not outperform selected simple baselines.", "tags": ["Python", "PostgreSQL", "Power BI", "Scikit-learn"], "link": "https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai", "linkLabel": "View repository"},
  "project_707": {"category": "SOFTWARE & AI", "title": "AI HR Workspace", "lead": "From HR questions to structured action plans.", "desc": "A Gemini-powered HR workspace with eight specialty modes, a Node.js backend, and a browser interface. Supports drafting and structured HR workflows. This is a local prototype; AI output needs human review and production authentication, storage and privacy work remain.", "tags": ["Node.js", "JavaScript", "Gemini API"], "link": "case-studies/ai-hr.html", "linkLabel": "Read project overview"},
  "project_101": {
    "category": "DATA ANALYTICS",
    "title": "HR Employee Attrition Analysis",
    "lead": "From employee patterns to workforce decisions.",
    "desc": "Analyzed 1,470 IBM HR records to identify attrition drivers and score employee risk. A logistic regression model achieved 77.7% accuracy and 0.81 ROC-AUC on held-out test data, with risk-scored exports and a Power BI dashboard build guide.",
    "tags": [
      "Python",
      "Power BI (DAX)",
      "Scikit-learn"
    ],
    "link": "https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis",
    "linkLabel": "View repository"
  },
  "project_202": {
    "category": "MACHINE LEARNING",
    "title": "Loan Default & Credit Risk Analysis",
    "lead": "Making risk easier to understand.",
    "desc": "Analyzed 32,000+ loan applications using Logistic Regression, Random Forest and Gradient Boosting. The saved logistic-regression baseline reports 80.6% accuracy and 0.876 ROC-AUC; see the case study for validation limitations and the Tableau output.",
    "tags": [
      "Python",
      "XGBoost",
      "SHAP",
      "Tableau"
    ],
    "link": "https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-",
    "linkLabel": "View repository"
  },
  "project_303": {
    "category": "SOFTWARE & SECURITY",
    "title": "MediVault",
    "lead": "Decentralized medical records.",
    "desc": "Designed an Ethereum-based medical records system with IPFS storage for tamper-resistant access. Authored an accompanying research paper with a WannaCry-based case study.",
    "tags": [
      "Ethereum",
      "IPFS",
      "Blockchain"
    ],
    "link": "https://github.com/Saptarshi-Mandal-1234/MediVault-Decentralized-Medical-Records-System",
    "linkLabel": "View repository"
  },
  "project_404": {
    "category": "CONNECTED SYSTEMS",
    "title": "Automated Irrigation System",
    "lead": "Crop-aware watering. Sensor-driven control.",
    "desc": "An ESP32 prototype that uses soil moisture and crop-specific thresholds to control a pump, with pH monitoring and a Bluetooth-linked web dashboard. Includes browser simulations; real-hardware validation is pending. The firmware implements hysteresis to reduce pump switching, manual commands and runtime/fault checks. Sensor calibration and end-to-end pump testing remain outstanding.",
    "tags": [
        "C++ / Arduino",
        "ESP32 / BLE",
        "Web Bluetooth"
    ],
    "link": "https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System",
    "linkLabel": "View repository"
},
  "project_505": {
    "category": "DATA ANALYTICS",
    "title": "Customer Churn Analysis",
    "lead": "From churn patterns to retention actions.",
    "desc": "Analyzed approximately 7,043 Telco customer records in MySQL Workbench and built a Power BI dashboard with a prescriptive recommendation engine for targeted retention actions.",
    "tags": [
      "SQL",
      "MySQL Workbench",
      "Power BI"
    ],
    "link": "https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis",
    "linkLabel": "View repository"
  },
  "project_606": {"category": "SOFTWARE & AI", "title": "MediAssist AI", "lead": "Health conversations and tracking in one prototype.", "desc": "Four Gemini-powered chat modes cover symptoms, medications, mental wellness and lab-report discussion. The Node.js/Express backend includes MongoDB models for chat, appointments, medications, mood, health logs and vitals, plus symptom-reference matching. Source reviewed; live AI and database behavior not validated in this portfolio update.", "tags": ["Gemini API", "MongoDB", "Node.js / Express", "Docker"], "link": "https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot", "linkLabel": "View repository"}
};

const projectDialog = document.getElementById('projectDialog');
const dialogCategory = document.getElementById('dialogCategory');
const dialogTitle = document.getElementById('dialogTitle');
const dialogLead = document.getElementById('dialogLead');
const dialogDesc = document.getElementById('dialogDesc');
const dialogTags = document.getElementById('dialogTags');
const dialogLink = document.getElementById('dialogLink');
const dialogCloseBtn = document.getElementById('dialogCloseBtn');
const dialogCloseFooterBtn = document.getElementById('dialogCloseFooterBtn');

let lastFocusedElement = null;

function openProjectDialog(projectId) {
  const data = projectData[projectId];
  if (!data || !projectDialog) return;

  dialogCategory.textContent = data.category;
  dialogTitle.textContent = data.title;
  dialogLead.textContent = data.lead;
  dialogDesc.textContent = data.desc;
  dialogLink.href = data.link;
  dialogLink.textContent = (data.linkLabel || "Explore GitHub profile") + " ↗";

  // Render tags
  dialogTags.innerHTML = '';
  data.tags.forEach((tagText) => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tagText;
    dialogTags.appendChild(span);
  });

  lastFocusedElement = document.activeElement;

  if (typeof projectDialog.showModal === 'function') {
    projectDialog.showModal();
  } else {
    projectDialog.setAttribute('open', '');
  }

  document.body.style.overflow = 'hidden';
}

function closeProjectDialog() {
  if (!projectDialog) return;

  if (typeof projectDialog.close === 'function') {
    projectDialog.close();
  } else {
    projectDialog.removeAttribute('open');
  }

  document.body.style.overflow = '';

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

// Bind "View details" buttons
document.querySelectorAll('.btn-details').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const projectId = e.currentTarget.dataset.project || e.currentTarget.dataset.projectId;
    openProjectDialog(projectId);
  });
});

if (dialogCloseBtn) {
  dialogCloseBtn.addEventListener('click', closeProjectDialog);
}

if (dialogCloseFooterBtn) {
  dialogCloseFooterBtn.addEventListener('click', closeProjectDialog);
}

if (projectDialog) {
  // Close on backdrop click
  projectDialog.addEventListener('click', (event) => {
    if (event.target === projectDialog) {
      closeProjectDialog();
    }
  });

  // Handle native escape cancel event
  projectDialog.addEventListener('cancel', () => {
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  });
}

/* ==========================================================================
   6. Smooth Subtle Scroll-Reveal Animations (Respects Reduced Motion)
   ========================================================================== */
const revealTargets = document.querySelectorAll('[data-reveal]');
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (reduceMotionQuery.matches || !('IntersectionObserver' in window)) {
  // Immediately show all elements if user prefers reduced motion or no observer
  revealTargets.forEach((el) => el.classList.add('is-revealed'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  revealTargets.forEach((el) => revealObserver.observe(el));
}

// Copy the public contact address with clear success/failure feedback.
const copyEmail = document.getElementById('copyEmail');
if (copyEmail && navigator.clipboard && window.isSecureContext) {
  copyEmail.hidden = false;
  copyEmail.addEventListener('click', async () => {
    const status = document.getElementById('copyStatus');
    try {
      await navigator.clipboard.writeText('saptarshi2005.kgp@gmail.com');
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Copy unavailable. Select the email address below to copy it.';
    }
  });
}

/* Matrix effects: bounded rendering, explicit pause, touch-friendly feedback. */
(() => {
  const canvas = document.getElementById('matrixCanvas');
  const toggle = document.getElementById('effectsToggle');
  const ctx = canvas?.getContext('2d');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = !motion.matches;
  try { enabled = localStorage.getItem('portfolio-effects') !== 'off' && !motion.matches; } catch {}
  let frame = 0, last = 0, drops = [], width = 0, height = 0;
  let pulse = null;
  const glyphs = '01アイウエオカキクケコサシスセソ<>/{}';
  const cards = [...document.querySelectorAll('.project-card,.skill-card,.focus-panel')];
  const hero = document.getElementById('top');
  if (!ctx) return;
  if (toggle) toggle.hidden = false;
  function resize() {
    width = innerWidth; height = Math.min(innerHeight, 1000);
    const scale = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * scale); canvas.height = Math.round(height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    drops = Array.from({length:Math.ceil(width / 24)},()=>Math.random() * height / 24);
  }
  function visible() { return true; }
  function draw(time) {
    frame = 0;
    if (!enabled || document.hidden || !visible()) return;
    if (time-last > 55) {
      last = time;
      ctx.fillStyle = 'rgba(5,5,5,.18)'; ctx.fillRect(0,0,width,height);
      ctx.font = '15px monospace';
      drops.forEach((y,i)=>{
        ctx.fillStyle = i%5 === 0 ? '#f5e3a4' : '#9da3aa';
        ctx.fillText(glyphs[Math.floor(Math.random()*glyphs.length)],i*24,y*24);
        drops[i] = y*24>height && Math.random()>.97 ? 0 : y+.45;
      });
      if(pulse && time-pulse.time < 600) {
        const age=(time-pulse.time)/600;
        ctx.strokeStyle=`rgba(222,190,105,${(1-age)*.55})`;ctx.lineWidth=2;
        ctx.beginPath();ctx.arc(pulse.x,pulse.y,20+age*90,0,Math.PI*2);ctx.stroke();
      }
    }
    frame=requestAnimationFrame(draw);
  }
  function sync() {
    cancelAnimationFrame(frame); frame=0;
    document.documentElement.dataset.effects = enabled ? 'on' : 'off';
    if (toggle) {
      toggle.textContent = enabled ? 'Effects on' : 'Effects off';
      toggle.setAttribute('aria-pressed',String(enabled));
      toggle.disabled=motion.matches;
      toggle.title=motion.matches ? 'Animations disabled by your reduced-motion preference' : 'Toggle visual effects';
    }
    if(enabled && !document.hidden && visible()) frame=requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,width,height); cards.forEach(reset); }
  }
  function reset(card) {card.style.removeProperty('transform');card.style.removeProperty('--pointer-x');card.style.removeProperty('--pointer-y');}
  if (toggle) toggle.addEventListener('click',()=>{enabled=!enabled;try{localStorage.setItem('portfolio-effects',enabled?'on':'off')}catch{}sync()});
  motion.addEventListener('change',()=>{enabled=!motion.matches;try{enabled=enabled&&localStorage.getItem('portfolio-effects')!=='off'}catch{}sync()});
  document.addEventListener('visibilitychange',sync);
  let resizeTimer;
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{resize();sync()},150)},{passive:true});
  document.addEventListener('pointerdown',e=>{if(enabled)pulse={x:e.clientX,y:e.clientY,time:performance.now()}},{passive:true});
  cards.forEach(card=>{
    card.addEventListener('pointermove',e=>{
      if(!enabled || e.pointerType!=='mouse')return;
      const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
      card.style.setProperty('--pointer-x',x+'px');card.style.setProperty('--pointer-y',y+'px');
      card.style.transform=`perspective(1200px) rotateX(${(y/r.height-.5)*-3}deg) rotateY(${(x/r.width-.5)*3}deg)`;
    },{passive:true});
    ['pointerleave','pointercancel','pointerup'].forEach(event=>card.addEventListener(event,()=>reset(card),{passive:true}));
  });
  document.querySelectorAll('.btn,.filter-btn,.btn-details,.theme-toggle,.contact-link').forEach(button=>{
    button.addEventListener('pointerdown',e=>{
      if(!enabled)return;
      const r=button.getBoundingClientRect(),size=Math.max(r.width,r.height);
      const ripple=document.createElement('span');ripple.className='cyber-ripple';ripple.setAttribute('aria-hidden','true');
      Object.assign(ripple.style,{width:size+'px',height:size+'px',left:e.clientX-r.left-size/2+'px',top:e.clientY-r.top-size/2+'px'});
      button.append(ripple);setTimeout(()=>ripple.remove(),600);
    },{passive:true});
  });
  resize();sync();
})();

/* Desktop cursor: a restrained gold focus ring with a trailing silver core. */
(() => {
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (!finePointer.matches || reduced.matches) return;
  const ring = document.createElement('span');
  const core = document.createElement('span');
  ring.className = 'cursor-orb'; core.className = 'cursor-core';
  ring.setAttribute('aria-hidden', 'true'); core.setAttribute('aria-hidden', 'true');
  document.body.append(ring, core);
  let targetX = -100, targetY = -100, ringX = -100, ringY = -100, active = false;
  const interactive = 'a,button,input,select,textarea,summary,[data-scramble]';
  function render() {
    ringX += (targetX - ringX) * .16; ringY += (targetY - ringY) * .16;
    ring.style.transform = `translate3d(${ringX}px,${ringY}px,0)`;
    requestAnimationFrame(render);
  }
  document.addEventListener('pointermove', event => {
    targetX = event.clientX; targetY = event.clientY;
    core.style.transform = `translate3d(${targetX}px,${targetY}px,0)`;
    if (!active) { active = true; document.documentElement.classList.add('custom-cursor-ready'); }
  }, {passive:true});
  document.addEventListener('pointerover', event => document.documentElement.classList.toggle('cursor-over-control', Boolean(event.target.closest(interactive))), {passive:true});
  document.addEventListener('pointerout', event => { if (!event.relatedTarget) document.documentElement.classList.remove('cursor-over-control'); }, {passive:true});
  render();
})();

// Search and progressively reveal certificate documents without hiding them when JS is unavailable.
(() => {
  const gallery = document.getElementById('certifications');
  if (!gallery) return;
  const cards = [...gallery.querySelectorAll('.certificate-card')];
  const search = document.getElementById('certificateSearch');
  const more = document.getElementById('certificateMore');
  const buttons = [...gallery.querySelectorAll('[data-cert-filter]')];
  let category = 'all';
  let group = 'tech';
  const groupButtons = [...gallery.querySelectorAll('[data-cert-group-filter]')];
  let limit = 6;
  function render() {
    const query = search.value.trim().toLocaleLowerCase();
    const matches = cards.filter(card => card.dataset.certGroup === group && (category === 'all' || card.dataset.certCategory === category) && card.textContent.toLocaleLowerCase().includes(query));
    cards.forEach(card => { card.hidden = true; });
    matches.slice(0, limit).forEach(card => { card.hidden = false; });
    document.getElementById('certificateStatus').textContent = `Showing ${Math.min(limit, matches.length)} of ${matches.length} matching documents · ${cards.filter(card => card.dataset.certGroup === group).length} in ${group === 'tech' ? 'Tech' : group.toUpperCase()} · ${cards.length} total`;
    document.getElementById('certificateEmpty').hidden = matches.length > 0;
    more.hidden = matches.length <= limit;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.certFilter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    limit = 6;
    render();
  }));
  groupButtons.forEach(button => button.addEventListener('click', () => {
    group = button.dataset.certGroupFilter;
    groupButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    category = 'all'; search.value = ''; limit = 6;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.certFilter === 'all')));
    document.getElementById('techCertificateFilters').hidden = group !== 'tech';
    render();
  }));
  search.addEventListener('input', () => { limit = 6; render(); });
  more.addEventListener('click', () => {
    const previous = cards.filter(card => !card.hidden);
    limit += 6;
    render();
    const next = cards.find(card => !card.hidden && !previous.includes(card));
    if (next) next.querySelector('a').focus({preventScroll:true});
  });
  document.getElementById('certificateControls').hidden = false;
  render();
})();

(() => {
 const controls = document.getElementById('skillControls');
 if (!controls) return;
 const cards = [...document.querySelectorAll('[data-skill-roles]')];
 const buttons = [...controls.querySelectorAll('[data-skill-filter]')];
 controls.hidden = false;
 buttons.forEach(button => button.addEventListener('click', () => {
   const role = button.dataset.skillFilter;
   buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
   cards.forEach(card => {card.hidden = role !== 'all' && !card.dataset.skillRoles.split(' ').includes(role);});
   document.getElementById('skillStatus').textContent = `${cards.filter(card => !card.hidden).length} skill areas · ${button.textContent} · Expand a card to explore the evidence.`;
 }));
})();
