# Independent hosting

The portfolio is a Cloudflare Worker. The frontend is bundled under `dist/client`, the backend is `dist/server/index.js`, editable content is stored in D1, and CMS uploads are stored in R2. Seed content, certificate files, project images, and poems already in the repository ship with the build. The current Sites project uses the same D1/R2 binding names, but its account resources cannot be assumed to exist in a separate Cloudflare account.

## Before moving

1. Keep a private copy of the source repository, including `assets`, `certificates`, `poems`, `server/seed.json`, and `drizzle`. Do not commit API keys or uploaded private files.
2. Export D1's `content`, `owner`, and `uploads` tables and copy every R2 object referenced by `uploads`. The admin “Content backup” button exports text and URLs only, not R2 file bytes. On 24 September 2026, the live `content` and `uploads` tables were empty, so the current content is entirely in the bundled seed and local assets. Recheck immediately before migration.
3. Create a D1 database and R2 bucket in your own Cloudflare account. Apply `drizzle/0000_omniscient_giant_girl.sql` to the new D1 database before starting the Worker. Import any later D1 export and R2 objects before switching visitors to the new address.

## Deploy on your Cloudflare account

1. Run `npm ci` and `npm run build`.
2. The tracked `wrangler.production.jsonc` points to the dedicated Cloudflare D1 database and the `saptarshi-portfolio-media` R2 bucket. After that bucket exists, use `npx wrangler deploy --config wrangler.production.jsonc`. Keep the configured binding names `DB` and `BUCKET`.
3. The Cloudflare Access application protects `/admin*` and `/api/admin/*` on the production Workers hostname and allows only the owner's email. The tracked config sets `TEAM_DOMAIN` and `POLICY_AUD` for its JWT verification. The backend verifies the Access JWT signature, issuer, audience, expiration, email, and pinned user ID. If the hostname or Access application changes, update both the Access destinations and these config values before deploying.
4. Check `/`, `/poetry.html`, `/resume-live.html`, all case-study routes, `/admin`, a certificate PDF, and a project image while signed out. Then sign in as the owner and test one D1 save and one R2 upload. Run `PORTFOLIO_BASE_URL=https://your-worker.example.workers.dev node scripts/smoke.mjs` for public-route checks. On PowerShell, set `$env:PORTFOLIO_BASE_URL` before running the script.

For automatic deployments, connect the `Personal-Website` GitHub repository to this Worker in Cloudflare Workers & Pages → the Worker → Settings → Builds. Use `main` as the branch, `npm ci && npm run build` as the build command, and `npx wrangler deploy --config wrangler.production.jsonc` as the deploy command. Keep the Access application and the config's hostname and audience aligned.

GitHub live projects and the live resume use GitHub's public API; the site never reads `D:\NEW PROJECT` or another visitor's local disk. Moving hosts does not copy files from your computer. Keep the local project images and certificate files in the source before each build, or upload new media through the admin after deploying.

GitHub project cards refresh on each visit and recheck every 15 minutes while the tab is active. New public, non-fork, non-archived repositories appear without a redeploy. The browser scans each changed repository's complete Git tree for PNG, JPG, JPEG and WebP images, chooses up to five useful project images, and offers a gallery. A valid HTTPS URL in the repository's GitHub **Website** field becomes a live-app link. GitHub API limits or an incomplete repository tree can delay image refresh; the saved gallery remains available when possible. This is a visitor-side refresh, not a background job or a copy of GitHub files into the site's database.

For a durable local snapshot, run `npm run sync:repo-images` before `npm run build`. The script scans every eligible public repository recursively, copies up to five selected images into `assets/projects/repo-screenshots`, and updates its manifest. It skips forks, archived repositories, dependency/build folders, decorative logos and images over 5 MB. Review images before publishing; a repository can contain files not intended for the public portfolio. A GitHub push does not automatically rebuild or publish this snapshot because the portfolio source is not connected to a GitHub deployment workflow.
