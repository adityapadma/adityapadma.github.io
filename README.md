# Personal Website of Aditya Padmagirwar

This is the personal website and portfolio of **Aditya Padmagirwar**, a Computer Science & Social Science student at IIIT-Delhi exploring Tangible User Interfaces, Ubiquitous Computing, and interactive digital narratives.

## 🚀 Project Overview

This project is a modern, responsive single-page application built to showcase projects, blogs, and research work. It is designed with a focus on comprehensive accessibility, clean aesthetics, and performance.

### 🛠 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) for fast development and building.
- **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) alongside custom Vanilla CSS modules.
- **UI Components:** Built using [Radix UI](https://www.radix-ui.com/) primitives for accessibility.
- **Routing:** React Router.
- **Package Manager:** [pnpm](https://pnpm.io/).

---

## 📂 Project Structure

Here is a quick overview of the main folders to help you understand where to find and edit content:

```bash
├── public/
│   ├── portfolio/   # Static HTML case studies and media assets (Legacy NID content)
│   └── ...          # Global static assets (favicons, robots.txt)
├── src/
│   ├── app/
│   │   ├── components/  # Reusable UI components (Portfolio.tsx, App.tsx, etc.)
│   │   ├── data/        # Hardcoded textual data (portfolioData.ts etc) - EDIT THIS FOR UI TEXT
│   │   ├── styles/      # CSS stylesheets (Portfolio.css, index.css)
│   │   └── utils/       # Scripts for parsing Markdown (projects.ts, blogs.ts)
│   ├── blogs/       # Markdown files for blog posts
│   └── projects/    # Markdown files containing portfolio metadata
├── package.json     # Project dependencies and scripts
└── vite.config.ts   # Vite configuration
```

### What to Edit vs. What NOT to Edit

To keep the application maintainable, follow these guidelines when updating content:

- **DO EDIT**: `src/app/data/portfolioData.ts` – If you want to change the text for the "About" section, "Work Experience", "Education", or "Skills", this is the file to change. It serves as the single source of truth for hardcoded UI text on the main page.
- **DO EDIT**: `src/projects/` & `public/portfolio/` – If you are adding or modifying portfolio projects.
- **DO EDIT**: `src/blogs/` – If you are adding or modifying written blog posts.
- **DO NOT EDIT**: `src/app/components/Portfolio.tsx` – Unless you are changing the actual layout, CSS, or html structure of the homepage. Do not put hardcoded text directly into the components; update `portfolioData.ts` instead.

---

## 📝 Content Management Guides

### 1. How to Add a Portfolio Project

The portfolio operates on a dual-layer, hybrid architecture. The React app reads Markdown metadata to generate dynamic preview cards, which link out to standalone HTML case studies.

**Step 1. Host the Static Page**
Place your full HTML case study inside the public directory:
`public/portfolio/[project-name].html`

**Step 2. Include Media**
Store any project-specific images or videos within the `media` subdirectory:
`public/portfolio/media/[project-name]/`

**Step 3. Create the Markdown Metadata**
In the `src/projects/` directory, create a new Markdown file (e.g., `[project-name].md`). Add the following YAML frontmatter at the top of the file:

```yaml
---
id: "my-project"
title: "My Project Title"
status: "Completed" # Alternatively "Research", "Case Study", etc.
tags: ["Tag1", "Tag2"]
excerpt: "Short description shown on the portfolio listing page."
heroImage: "/portfolio/media/my-project/hero.jpg"
pageUrl: "/portfolio/my-project.html"
order: 1 # Determines sorting order on the site
updatedAt: "2026-03-27"
---
```

**Step 4. View Results**
Once saved, the React app will automatically parse this and display the card on the homepage!

### 2. How to Add a Blog Post

The blog is driven purely by Markdown. You do not need static HTML pages for blogs.

**Step 1. Create a Markdown File**
In the `src/blogs/` directory, create a new Markdown file (e.g., `my-new-post.md`).

**Step 2. Add Frontmatter and Content**
Include the following YAML frontmatter at the top, followed by your Markdown content underneath:

```yaml
---
title: "My Post Title"
date: "2026-03-27"
tags: ["Tag1", "Tag2"]
excerpt: "Optional short description shown on the listing page."
---

# Your Blog Content Here

Write your thoughts down using standard markdown formatting!
```
*Note: The excerpt is optional. If omitted, the site will automatically generate a summary from the first 160 characters of your content.*

Once saved, the post will automagically appear on the `/blog` listing page.

### 3. How to Edit Main Page Content

To update your work experience, education, skills, or research projects listed on the main homepage, you do not need to modify the complex React component files.

Instead, locate and edit the central data file:
`src/app/data/portfolioData.ts`

Inside this TypeScript file, you will find exported arrays such as `workExperience`, `researchProjects`, and `skillsData`. Simply update the text within the objects, add new items to the lists, or remove outdated ones directly in this file. 

The homepage will automatically reflect your changes upon saving.

---

## ⚡️ Local Development & Build

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

Visit `http://localhost:5173` (or the port shown in your terminal) to view the website. This server will hot-reload whenever you save a change.

### 4. Build for Production

To create an optimized, production-ready bundle:

```bash
pnpm build
```

The output will be generated in the `dist/` directory, ready to be deployed to static hosting providers like GitHub Pages, Vercel, or Netlify.

---

## 📄 License

This project is open source.
