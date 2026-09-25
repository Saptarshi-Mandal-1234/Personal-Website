# Independent hosting

The portfolio is a Cloudflare Worker. The frontend is bundled under `dist/client`, the backend is `dist/server/index.js`, editable content is stored in D1, and CMS uploads are stored in R2. Seed content, certificate files, project images, and poems already in the repository ship with the build. The current Sites project uses the same D1/R2 binding names, but its account resources cannot be assumed to exist in a separate Cloudflare account.

## Before moving

1. Keep a private copy of the source repository, including `assets`, `certificates`, `poems`, `server/seed.json`, and `drizzle`. Do not commit API keys or uploaded private files.
2. Export D1's `content`, `owner`, and `uploads` tables and copy every R2 object referenced by `uploads`. The admin “Content backup” button exports text and URLs only, not R2 file bytes. On 24 September 2026, the live `content` and `uploads` tables were empty, so the current content is entirely in the bundled seed and local assets. Recheck immediately before migration.
3. Create a D1 database and R2 bucket in your own Cloudflare account. Apply `drizzle/0000_omniscient_giant_girl.sql` to the new D1 database before starting the Worker. Import any later D1 export and R2 objects before switching visitors to the new address.

## Deploy on your Cloudflare account

1. Run `npm ci` and `npm run build`.
2. Copy `wrangler.production.example.jsonc` to `wrangler.production.jsonc`, replace the D1 database ID and R2 bucket name, and use `npx wrangler deploy --config wrangler.production.jsonc`. Keep the configured binding names `DB` and `BUCKET`.
3. Add a Cloudflare Access application for the `/admin*` and `/api/admin/*` paths on the production hostname, with an allow policy for the owner's email. Set Worker environment variables `TEAM_DOMAIN` (for example, `https://example.cloudflareaccess.com`) and `POLICY_AUD` (the Access application audience). The backend verifies the Access JWT signature, issuer, audience, expiration, email, and pinned user ID. Never expose the admin paths without Access configured.
4. Check `/`, `/poetry.html`, `/resume-live.html`, all case-study routes, `/admin`, a certificate PDF, and a project image while signed out. Then sign in as the owner and test one D1 save and one R2 upload. Run `PORTFOLIO_BASE_URL=https://your-worker.example.workers.dev node scripts/smoke.mjs` for public-route checks. On PowerShell, set `$env:PORTFOLIO_BASE_URL` before running the script.

GitHub live projects and the live resume use GitHub's public API; the site never reads `D:\NEW PROJECT` or another visitor's local disk. Moving hosts does not copy files from your computer. Keep the local project images and certificate files in the source before each build, or upload new media through the admin after deploying.

For repository screenshot updates, run `npm run sync:repo-images` before `npm run build`. The sync scans the configured public repositories for JPG, JPEG, and PNG files, records every matching path in `assets/projects/repo-screenshots/manifest.json`, and copies the newest image for each screenshot step into the website. Add another repository to `scripts/sync-repo-screenshots.mjs` when a new project needs a gallery. Review images before publishing; a repository can include files that were never intended for the public portfolio.
