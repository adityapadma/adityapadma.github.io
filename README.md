# Personal Website of Aditya Padmagirwar

This is the personal website and portfolio of **Aditya Padmagirwar**, a Computer Science & Social Science student at IIIT-Delhi exploring Tangible User Interfaces, Ubiquitous Computing, and interactive digital narratives.

## 🚀 Project Overview

This project is a modern, responsive single-page application built to showcase projects, blogs, and research work. It is designed with a focus on comprehensive accessibility, clean aesthetics, and performance.

### 🛠 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) for fast development and building.
- **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **UI Components:** Built using [Radix UI](https://www.radix-ui.com/) primitives for accessibility.
- **Routing:** React Router.
- **Package Manager:** [pnpm](https://pnpm.io/).

## 📂 Project Structure

Here is a quick overview of the main folders to help you understand the codebase:

```bash
├── public/          # Static assets (images, icons, robots.txt)
├── guidelines/      # Design guidelines and project documentation
├── src/
│   ├── app/         # Main application logic
│   │   ├── components/  # Reusable UI components (buttons, layout, etc.)
│   │   ├── routes.ts    # Application routing configuration
│   │   └── App.tsx      # Root component
│   ├── blogs/       # Markdown files for blog posts
│   ├── styles/      # Global CSS and Tailwind configuration
│   └── main.tsx     # Application entry point
├── package.json     # Project dependencies and scripts
└── vite.config.ts   # Vite configuration
```

## ⚡️ Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites

Make sure you have `Node.js` installed. This project uses `pnpm` as the package manager. If you don't have it, install it:

```bash
npm install -g pnpm
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run Development Server

Start the local development server:

```bash
pnpm dev
```

Visit `http://localhost:5173` (or the port shown in your terminal) to view the website.

### 4. Build for Production

To create a production-ready build:

```bash
pnpm build
```

The output will be in the `dist/` directory, ready to be deployed to GitHub Pages, Vercel, or Netlify.



## 📝 License

This project is open source.

