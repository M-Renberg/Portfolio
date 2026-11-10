<div align="center">

# ⚡ Mikael Renberg — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-2DD4BF?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>A high-performance cyberpunk HUD portfolio showcasing applied AI systems, reactive full-stack architecture, and commercial engineering work.</strong>
</p>

[Explore Projects](#-featured-projects) • [Tech Matrix](#-tech-matrix) • [Architecture](#-architecture--features) • [Getting Started](#-getting-started) • [Contact](#-contact)

---

</div>

## 🌌 Overview

This repository powers the personal developer portfolio for **Mikael Renberg** — a Full-Stack & Applied AI Developer based in Malmö, Sweden.

Designed with a cyber-industrial HUD aesthetic, the application bridges deterministic full-stack engineering with pragmatic AI systems. It demonstrates clean component boundaries, dynamic JSON-driven project indexing, mouse-tracking spotlights, interactive career timelines, and dedicated architecture case studies for commercial productions.

---

## 🚀 Key Highlights

- **🏢 Brand About Me (BAM) [2026 – Present]:** Featured case study on architecting and integrating the centralized **Core AI Engine** powering intelligent digital marketing workflows on BAM's platform using React and TypeScript.
- **🏢 Devotion Ventures [2026]:** Architecture breakdown of a reactive, real-time enterprise operational platform engineered with React, TypeScript, and Convex.
- **🤖 Applied AI & Local SLMs:** Highlights hands-on implementations including offline CPU inference via SmolLM2, predictive machine learning pipelines (Scikit-Learn), and PyTorch model architectures.
- **🎨 Bespoke Cyberpunk HUD:** Frosted-glass morphism, mouse-responsive spotlight gradients, matrix scramble text resolving effects, and ambient background AI telemetry streams.

---

## 🛠️ Architecture & Features

### 🖥️ Interactive HUD Navigation & Modules
| Module | Path | Description |
|---|---|---|
| **Landing Hub** | `/` | Cyber HUD dashboard with dynamic mouse spotlight cards and ambient AI thought streams. |
| **About Dossier** | `/aboutme` | Interactive multi-tab developer dossier, commercial spotlights (BAM & Devotion), and living tech matrix. |
| **Work Catalog** | `/work` | Multi-category project browser with instant tag filters across Applied AI, Full-Stack, and Systems. |
| **Case Studies** | `/work/:id` | Deep-dive architecture writeups with tech tags, workflow highlights, and interactive mockups. |
| **Transmission Center** | `/contact` | Inquiry routing with preconfigured intent triggers (LIA Internship, AI Systems, Full-Stack Projects). |

---

## ⚡ Tech Matrix

<div align="center">

| Layer | Technologies & Ecosystem |
|:---|:---|
| **Frontend Core** | **React 19**, **TypeScript 5.9**, **React Router v7** |
| **Build & Tooling** | **Vite 8**, **ESLint 9** (Flat Config), **TypeScript-ESLint** |
| **Styling & FX** | **Tailwind CSS v4**, **PostCSS**, Custom Cyber Glitch & Spotlight Shaders |
| **Data Ingress** | Type-safe JSON schemas (`ProjectInterface`), decoupled data files |
| **Backend & AI Exposure** | **FastAPI**, **Pydantic**, **PyTorch**, **Convex**, **Supabase**, **C# / .NET** |

</div>

---

## 📂 Project Directory Structure

```plaintext
portfolio-react/
├── public/
│   ├── data/
│   │   ├── employerwork.json      # Commercial LIA & enterprise case studies (BAM, Devotion)
│   │   ├── myprojects.json        # Open source & independent R&D projects
│   │   └── schoolprojects.json    # Machine learning & academic coursework
│   └── images/projects/           # Custom SVG architectural mockups & thumbnails
├── src/
│   ├── components/about/          # Dossier, Living Tech Matrix, Milestones Timeline
│   ├── hooks/                     # Custom data fetching & project lookup hooks
│   ├── pages/
│   │   ├── LandingPage.tsx        # Hero HUD & spotlight launchpad
│   │   ├── AboutMePage.tsx        # Full dossier & career trajectory
│   │   ├── MyProjectsPage.tsx     # Filterable project catalog & folders
│   │   ├── WorkDetailPage.tsx     # Dynamic architectural case study renderer
│   │   └── ContactPage.tsx        # Intent-driven dispatch console
│   ├── partials/                  # Global Header, Footer, and Main layout wraps
│   ├── tailwind/                  # Cyberpunk glitch FX and keyframe definitions
│   └── util/                      # Badges, SVG icon sprites, and ScrambleText engine
├── eslint.config.js               # Modern ESLint 9 flat configuration
├── vite.config.ts                 # Optimized Vite 8 bundle configuration
└── package.json                   # Dependencies and npm script targets
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or pnpm / yarn)

### 1. Clone the repository
```bash
git clone https://github.com/M-Renberg/portfolio-react.git
cd portfolio-react
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view the live HUD.

### 4. Production build & verification
```bash
# Type check and build optimized bundle to /dist
npm run build

# Run ESLint validation
npm run lint

# Preview the production build locally
npm run preview
```

---

## 📬 Contact & Connections

- **Developer:** Mikael Renberg
- **Role:** Full-Stack & Applied AI Developer
- **LinkedIn:** [linkedin.com/in/mikael-renberg-98b062178](https://www.linkedin.com/in/mikael-renberg-98b062178/)
- **GitHub:** [@M-Renberg](https://github.com/M-Renberg)
- **Email:** [mikael.k.renberg@hotmail.com](mailto:mikael.k.renberg@hotmail.com)

---

<div align="center">
  <sub>Engineered with precision, clean code standards, and type safety. Built with React, TypeScript & Vite.</sub>
</div>
