'use strict';
const profile = 'Saptarshi-Mandal-1234';
const excluded = new Set(['saptarshi-mandal-1234']);
const projectRoot = document.getElementById('resumeProjects');
const projectStatus = document.getElementById('resumeProjectStatus');
const skillLine = document.getElementById('resumeGithubSkills');
const tidy = (name) => name.replace(/^[-_]+/, '').replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
const updated = (value) => new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(value));

async function loadLiveResume() {
  try {
    const response = await fetch(`https://api.github.com/users/${profile}/repos?sort=updated&per_page=100`, { headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) throw new Error('GitHub response was not successful');
    const repositories = (await response.json()).filter((repo) => !repo.private && !repo.archived && !repo.fork && !excluded.has(repo.name.toLowerCase()));
    const languages = [...new Set(repositories.map((repo) => repo.language).filter(Boolean))].sort();
    skillLine.innerHTML = `<strong>GitHub technology snapshot:</strong> ${languages.length ? languages.join(', ') : 'No primary languages reported yet.'}`;
    const shown = repositories.slice(0, 10);
    projectRoot.replaceChildren(...shown.map((repo) => {
      const item = document.createElement('article');
      item.className = 'resume-project';
      const head = document.createElement('div'); head.className = 'resume-project-head';
      const link = document.createElement('a'); link.href = repo.html_url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = tidy(repo.name);
      const date = document.createElement('time'); date.dateTime = repo.updated_at; date.textContent = `Updated ${updated(repo.updated_at)}`;
      const description = document.createElement('p'); description.textContent = repo.description || `${repo.language || 'Public'} repository available on GitHub.`;
      head.append(link, date); item.append(head, description); return item;
    }));
    projectStatus.textContent = `${shown.length} most recently updated public repositories shown. This list refreshes from GitHub when the resume opens.`;
  } catch {
    skillLine.innerHTML = '<strong>GitHub technology snapshot:</strong> Temporarily unavailable. Core skills remain listed above.';
    projectStatus.textContent = 'GitHub could not be refreshed right now. Please reopen this resume after connection is restored.';
  }
}
document.getElementById('printResume').addEventListener('click', () => window.print());
loadLiveResume();
