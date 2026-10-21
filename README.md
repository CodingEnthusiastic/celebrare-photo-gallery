# Celebrare Photo Gallery

A React + Vite + Tailwind CSS photo gallery built for the Celebrare Frontend Intern pre-screening assignment.

## Features

- Fetches 30 photos from `https://picsum.photos/v2/list?limit=30` on page load.
- Loading and error states handled by the `useFetchPhotos` custom hook.
- Responsive grid: one column on mobile, two on tablet, four on desktop.
- Live author-name search against the photos already fetched; search does not call the API.
- Favourites state managed with `useReducer` and persisted to `localStorage`.
- Uses `useCallback` for the search handler and `useMemo` for the filtered photo list.
- Functional components and Tailwind CSS only; no component library.

## Run locally

Requirements: Node.js 22.12 or newer, plus npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Before submission, verify the production build:

```bash
npm run build
npm run preview
```

Vite writes the production site into `dist/`.

## Folder structure

```text
celebrare-photo-gallery/
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── ErrorMessage.jsx
│   │   ├── Gallery.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── PhotoCard.jsx
│   │   ├── PhotoGrid.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   ├── useFavorites.js
│   │   └── useFetchPhotos.js
│   ├── reducers/
│   │   └── favoritesReducer.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .nvmrc
├── index.html
├── netlify.toml
├── package.json
├── README.md
└── vite.config.js
```

## Architecture at a glance

1. `main.jsx` mounts `App`.
2. `App.jsx` renders `Gallery`.
3. `Gallery.jsx` calls `useFetchPhotos()` and `useFavorites()`, owns the search term, and calculates `filteredPhotos` with `useMemo`.
4. `useFetchPhotos.js` fetches the initial photo list and returns `{ photos, loading, error }`.
5. `PhotoGrid.jsx` renders one `PhotoCard` per matching photo.
6. `PhotoCard.jsx` displays the image, author, and favourite button.
7. `useFavorites.js` uses `useReducer` via `favoritesReducer.js` and syncs favourite IDs with `localStorage`.

## Push to GitHub

1. Create a **public** empty repository on GitHub, for example `celebrare-photo-gallery`. Do not add a separate README or `.gitignore` on GitHub because this project already contains them.
2. Open a terminal in this project folder and run:

```bash
git init
git add .
git commit -m "Build Celebrare photo gallery assignment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/celebrare-photo-gallery.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git prompts you to configure a name/email, set your Git author identity and repeat the commit.

## Deploy to Netlify from GitHub

1. Sign in at `https://app.netlify.com/`.
2. Choose **Add new project** (or **Add new site**) and select **Import an existing project**.
3. Connect GitHub and select your public `celebrare-photo-gallery` repository.
4. Use these build settings:
   - **Base directory:** leave blank / repository root
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy the site. Netlify should detect Vite; `netlify.toml` in this repository also defines the build command and publish directory.
6. Open the generated Netlify URL and test the search, favourite toggle and refresh persistence.

After connecting the repository, future pushes to the configured production branch will trigger new deployments automatically.

## Before you submit

- Test at mobile, tablet and desktop widths.
- Search for part of an author name, then clear the search.
- Favourite one photo, refresh the browser, and confirm its heart remains active.
- Check loading and error UI if possible using browser DevTools network throttling / offline mode.
- Run `npm run build` and check for console errors.
- Submit both your public GitHub repository URL and a 5-minute screen recording as requested by Celebrare.
