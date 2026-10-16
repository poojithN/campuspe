# CampusPe landing page

A React + Vite recreation of the CampusPe landing page, built from a design screenshot.

## Run it
1. Install Node.js (https://nodejs.org)
2. `npm install`
3. `npm run dev` and open the printed link (usually http://localhost:5173)
4. `npm run build` creates the production build in `dist/`

## Approach
- Outside-in: page shell and section containers first, then the details inside each section.
- Mobile-first CSS with breakpoints at 600px, 768px and 992px. No horizontal scroll (`overflow-x: hidden`, `max-width: 100vw`).
- Design tokens (colors) are CSS variables in `src/styles/tokens.css`, with a dark theme.
- Reusable `Button` component; page text and data live in `src/constants/content.js`.
- Semantic tags (`header`, `nav`, `main`, `section`, `footer`), hover and focus states, and a mobile menu.

## Structure
- `src/App.jsx` puts the sections together
- `src/components/` one file per section plus `Button`
- `src/constants/content.js` text and data
- `src/styles/` all CSS: `tokens.css` (colors), `base.css`, `layout.css`, `utilities.css`, `components/` (reusable parts), `sections/` (one file per page section), `index.css` (imports everything)

## Live link
Add your deployed URL here after deploying (for example on Vercel or Netlify).
