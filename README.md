# EREZ-DARK-MODE

**Repository:** https://github.com/erez11/EREZ-DARK-MODE

React app implementing the **Dark Mode Toggle** from [UIFeatureDesign](docs/UIFeatureDesign.md).  
Built against JIRA stories (label `EREZ-DARK-MODE`, project JDEMO).

## Features (per design)

- **UI:** Toggle in header, top-right, next to profile icon
- **Components:** Checkbox-style switch, Sun/Moon icon, tooltip "Toggle Dark Mode"
- **Flow:** Click toggles theme; preference saved to `localStorage`; persists on reload
- **Visual:** Light (white/dark text) and dark (dark grey/light text); 0.3s ease-in-out transition
- **Accessibility:** Contrast ≥ 4.5:1, keyboard focusable, screen reader label "Toggle dark mode"
- **Stack:** React 18, CSS Modules, theme state via `useContext`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## JIRA

Stories in **JDEMO** with label **EREZ-DARK-MODE** (one task cancelled: JDEMO-2644).

## Browsers

Targets Chrome, Firefox, Safari, Edge (latest 2 versions) per design.
