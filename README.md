Ascenity Marketing Site (React + Tailwind + Framer Motion)

Overview

This is a single-page marketing website for the Ascenity mobile app, built with:
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- lucide-react icons

Branding

- Font: Manrope (loaded from Google Fonts)
- Palette:
	- Backgrounds: Snow #fcf7f8 (light), Oxford Blue #0a2239 (dark)
	- Text: Oxford on light, Snow on dark
	- Primary: Honolulu Blue #027bce
	- Secondary: Robin Egg Blue #1ccad8
	- Success: Emerald #00d37d

Getting Started

1. Install dependencies (Windows PowerShell):
```powershell
npm install
```

2. Run the dev server:
```powershell
npm run dev
```

3. Build for production:
```powershell
npm run build
```

4. Preview the production build:
```powershell
npm run preview
```

Project Structure

- index.html – loads Manrope and mounts the app
- src/App.tsx – page sections and animations
- src/main.tsx – React entry
- src/index.css – Tailwind base and utilities
- tailwind.config.js – theme customization
- vite.config.ts – Vite config

Notes

- App Store and Google Play badges are linked to placeholders. Replace href values with your real store URLs.
- Replace placeholder mockups with real app screenshots when ready.
