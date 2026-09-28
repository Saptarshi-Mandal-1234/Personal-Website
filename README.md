# Saptarshi Mandal — Personal Website

Portfolio with project case studies, live GitHub project discovery, certificates, poetry, photography, and a live resume. The public site is a Cloudflare Worker; bundled content lives in `server/seed.json`, admin edits in D1, and admin uploads in R2.

## Run locally

Requires Node.js 22 or newer.

```powershell
npm ci
npm run build
npx wrangler dev --port 8033 --local
```

Open `http://127.0.0.1:8033/`. Stop the server with Ctrl+C. The public pages work with the local seed. To test admin writes locally, apply `drizzle/0000_omniscient_giant_girl.sql` to the local D1 database. Production admin access requires Cloudflare Access.

## Checks

With the local server running:

```powershell
node scripts/github-projects.test.mjs
node scripts/smoke.mjs
```

The smoke test checks pages, internal links, media, and unauthenticated admin protection. GitHub Actions runs the build and project-image test on each push and pull request.

## Content and deployment

- `index.html`, `styles.css`, `script.js`: main page and interactions.
- `frontend/`, `components/`: carousel source; `build.mjs` produces `dist/client/carousels.*`.
- `server/worker.js`, `server/seed.json`, `drizzle/`: backend, initial content, and database schema.
- `assets/`, `certificates/`, `poems/`, `case-studies/`: published media and case studies.
- `scripts/sync-repo-screenshots.mjs`: optional local snapshot of images from public GitHub repositories. Review the images before committing them.

The browser discovers new public GitHub repositories and their images, but a GitHub push does not automatically redeploy this portfolio. For independent hosting, follow [DEPLOYMENT.md](DEPLOYMENT.md) to create your own D1 database, R2 bucket, Cloudflare Access policy, and Worker deployment. Export live D1/R2 content before moving hosts; source control alone does not back up admin edits or uploads.
