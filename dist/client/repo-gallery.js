const root = document.getElementById('repoEvidence');
if (root) {
  fetch('/assets/projects/repo-screenshots/manifest.json')
    .then(response => { if (!response.ok) throw Error('Gallery unavailable'); return response.json(); })
    .then(({ repositories }) => {
      const title = document.createElement('h2');
      title.textContent = 'Screenshots from the repositories';
      root.append(title);
      for (const { repo, gallery } of repositories) {
        if (!gallery.length) continue;
        const section = document.createElement('section');
        const heading = document.createElement('h3');
        heading.textContent = repo === 'WIPRO_COE_CLASS' ? 'Wipro COE capstone run' : 'Dedicated Selenium capstone run';
        const strip = document.createElement('div');
        strip.className = 'repo-gallery-strip';
        for (const item of gallery) {
          const figure = document.createElement('figure');
          const link = document.createElement('a');
          link.href = '/' + item.asset;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          const img = document.createElement('img');
          const label = item.source.split('/').pop().replace(/_\d{8}_\d{6}|\.jpe?g$|\.png$/gi, '').replace(/^\d+_/, '').replaceAll('_', ' ');
          img.src = link.href;
          img.alt = `${label} screenshot from ${repo}`;
          img.loading = 'lazy';
          const caption = document.createElement('figcaption');
          caption.textContent = label.replace(/^./, letter => letter.toUpperCase());
          link.append(img);
          figure.append(link, caption);
          strip.append(figure);
        }
        section.append(heading, strip);
        root.append(section);
      }
    })
    .catch(() => { root.textContent = 'Repository screenshots are temporarily unavailable.'; });
}
