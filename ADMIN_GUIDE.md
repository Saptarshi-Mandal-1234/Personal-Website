# Portfolio administration
Open /admin on the hosted site and sign in with the owner's ChatGPT account.
Choose Projects, Certificates, Poems, Skills, or Page text. Select an item or choose Add new, edit its fields and Save changes. Saving updates the website immediately. Use Hide from website to remove an item; uncheck it to restore it. Smaller display-order numbers appear first. Upload PNG, JPG, WebP, PDF or MP4 files up to 20 MB; image previews are optional. Content backup downloads text and file references, not the original media bytes.

Production content overrides live in D1 and uploaded media in R2. Original portfolio records are bundled in server/seed.json and are preserved unless explicitly edited or hidden. Redeployments must retain bindings and the immutable applied migrations; never replace the database from a local seed. Never trust client identity fields. Owner identity is pinned from the platform's authenticated headers after matching the existing site owner's email. Publication audience is unchanged.

Local development: npm install, npm run build, npx wrangler d1 execute portfolio-local --local --file drizzle/0000_omniscient_giant_girl.sql, npx wrangler dev --port 8033. Local auth must be simulated only by local test requests; production uses platform headers. No local test records are published.
