# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## folder structure

my-portfolio/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/               # Images, logos, icons, etc.
│   │   └── profile.jpg
│
│   ├── components/           # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Navbar.jsx
│
│   ├── pages/                # Individual sections/pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│
│   ├── routes/               # All app routing logic
│   │   └── AppRoutes.jsx
│
│   ├── data/                 # JSON or JS files for dynamic content
│   │   └── projects.js       # Projects list with details
│
│   ├── App.jsx               # Main app structure
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind directives here
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
