# Electron + Svelte Template

A minimal desktop-app starter built with Electron, Svelte 5, TypeScript and electron-vite. It includes a main process, a context-isolated preload entry point, global design tokens, and light/dark themes.

## Create a project from this template

On GitHub, select **Use this template** and create a repository for your new application. Then clone your newly created repository:

```bash
git clone https://github.com/<your-username>/<your-app-name>.git
cd <your-app-name>
npm install
npm run dev
```

`npm install` also downloads the Electron executable automatically via the `postinstall` script.

> Requires Node.js 22.12 or newer.

## Commands

| Command           | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Starts Vite and launches Electron with hot reload.           |
| `npm run build`   | Builds the main, preload and renderer processes into `out/`. |
| `npm run preview` | Runs the production build locally.                           |

## Project structure

```text
src/
├── main/             # Electron main process
│   └── index.ts
├── preload/          # Safe bridge between Electron and the renderer
│   └── index.ts
└── renderer/         # Svelte user interface
    ├── index.html
    └── src/
        ├── App.svelte
        ├── app.css   # Global styles and theme tokens
        └── main.ts
```

## Themes and global styling

Global CSS variables live in `src/renderer/src/app.css`. Dark mode is the default. To enable light mode, set the theme on the root HTML element before mounting Svelte:

```ts
document.documentElement.dataset.theme = "light";
```

Set it back to dark with:

```ts
document.documentElement.dataset.theme = "dark";
```

Use semantic tokens rather than hard-coded colors in components:

```css
.card {
  padding: var(--space-4);
  color: var(--color-text-primary);
  background: var(--color-surface-2);
  border: var(--border-width-thin) solid var(--color-border-subtle);
  border-radius: var(--radius-md);
}
```

## Troubleshooting

If Electron starts as Node.js and `app.whenReady` is reported as `undefined`, clear the `ELECTRON_RUN_AS_NODE` environment variable in the current PowerShell session:

```powershell
Remove-Item Env:ELECTRON_RUN_AS_NODE
npm run dev
```
