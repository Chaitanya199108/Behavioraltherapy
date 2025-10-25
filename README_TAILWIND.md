Tailwind + Vite quickstart

What I added
- `tailwind.config.cjs` — Tailwind content paths
- `postcss.config.cjs` — PostCSS plugins for Tailwind + Autoprefixer
- `src/styles.css` — now contains Tailwind directives (@tailwind base; @tailwind components; @tailwind utilities;)

How to run (recommended)
1) Install dependencies (one-time):

```powershell
cd e:\auitsmkids
npm install
```

2) Start the Vite dev server:

```powershell
npm run dev
```

Vite will process Tailwind through PostCSS. Open the URL Vite prints in the terminal (usually http://localhost:5173).

If you can't run `npm install` on this machine, you can still preview static HTML by opening `index.html` or running the static server:

```powershell
npm run start
# or
python -m http.server 3000
```

Notes
- If you want to build for production later, run `npm run build` and `npm run preview` to test the production build.
- If you prefer different Tailwind plugins or a custom theme, update `tailwind.config.cjs` accordingly.
