# React component integration
The existing site is a Cloudflare Worker with HTML templates. React is mounted only for the three coverflow showcases; the owner CMS and regular lists stay intact.

Reusable components: components/ui/3-d-coverflow-carousel.tsx
Example: components/demo.tsx
Mounting: frontend/carousels.tsx
Component styles: frontend/carousel.css (Tailwind v4, no global reset)
Existing site styles: styles.css

React, React DOM, TypeScript, Tailwind and lucide-react are installed. components.json supplies shadcn-compatible aliases; components/ui is the conventional destination used by shadcn generators, keeping reusable UI separate from page integration. tsconfig.json resolves @/ imports. No context provider is required.

Run npm install, npx tsc --noEmit, npm run build. The build bundles the React entry with esbuild and compiles Tailwind through its CLI. For future shadcn components, use npx shadcn@latest add <component> and review any global CSS changes before accepting them; do not run init over the established theme. The optional demo uses a stock photograph; live carousels use original portfolio assets.

Carousels pause by default; users can explicitly start a slideshow. Focus, hovering, hidden tabs, offscreen state and reduced motion suppress automatic movement. Keyboard arrows only apply inside a carousel. Filtered/hidden CMS records are excluded. Projects and certificates retain a list-view switch; poem buttons link to the original reading/video page.
