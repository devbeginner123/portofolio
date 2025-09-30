# Portfolio (Angular + TypeScript + Tailwind)

A personal portfolio built with Angular standalone components and Tailwind CSS.

## Prerequisites
- Node.js 18+
- npm 9+
- Angular CLI installed globally: `npm i -g @angular/cli`

## Setup
```bash
npm install
```

## Development
```bash
ng serve
```
- Open http://localhost:4200
- The app uses Tailwind. Edit `src/styles.css` and component templates for styles.

## Build
```bash
ng build
```
- Output in `dist/portfolio`

## Deploy

### Netlify
1. Connect repo to Netlify.
2. Build command: `ng build`
3. Publish directory: `dist/portfolio/browser`
4. Add a redirect for SPA (already provided via `netlify.toml`).

### GitHub Pages
1. Push to `main` branch on GitHub.
2. Enable Pages: Source = GitHub Actions.
3. Workflow `.github/workflows/gh-pages.yml` builds and deploys automatically.

## Structure
- `src/app/components/navbar` – top navigation
- `src/app/components/footer` – footer
- `src/app/components/project-card` – reusable card for projects
- `src/app/pages/home|about|projects|contact` – main pages
- Routing in `src/app/app.routes.ts`

## Customize
- Update name, links, and content in:
  - `home.component.html`
  - `projects.component.ts` (sample projects)
  - `footer.component.html` social links
  - `navbar.component.html` brand/title

## Tailwind
- Config in `tailwind.config.js`
- Utilities imported in `src/styles.css`
