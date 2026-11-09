# Vijayaragavan V — Premium Personal Portfolio Website

A modern, high-performance developer portfolio built for **Vijayaragavan V**, Computer Science and Engineering (Internet of Things) undergraduate at Erode Sengunthar Engineering College.

![Portfolio Preview Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Highlights

- **Visual Design System**: Dark-first futuristic developer aesthetic (`#080B12`, `#101522`, `#60A5FA` blue accent, `#A78BFA` purple accent) with glassmorphism, ambient lighting, and subtle grid textures.
- **Working Dark/Light Mode**: Full theme toggle respecting system preference on initial load with persistent `localStorage` preference.
- **Responsive Architecture**: Pixel-perfect layout across mobile (360px+), tablet, laptop, and desktop viewports.
- **Strictly 3 Projects**:
  1. **MeatMart** (E-commerce / Full-Stack Development)
  2. **AI Personal Assistant** (Python / Artificial Intelligence)
  3. **Student Record Manager** (Python / Programming)
- **13-Entry Certificate Gallery**:
  - Full metadata for all 13 certified courses, bootcamps, and workshops.
  - 5 Featured credentials highlighted.
  - Interactive category filtering and real-time title/issuer search.
  - Certificate Viewer Modal with Zoom In / Out / Reset, keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), and image fallback states.
- **Print-Friendly Interactive Resume**:
  - In-browser clean resume preview with print stylesheet (`window.print()`) that renders a crisp 1-page paper-ready CV.
  - Direct PDF download button.
- **Accessible & Authentic**:
  - Zero fabricated stats, client numbers, or false ratings.
  - Real form validation with unconfigured service detection and mailto fallback.
  - Accessible color contrast and smooth scroll spy navigation.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React + Custom SVG Brand Badges
- **Animations**: Framer Motion & CSS hardware-accelerated transitions
- **Deployment Targets**: Vercel, Netlify, GitHub Pages

---

## 📁 Centralized Data Architecture

All personal information, projects, skills, certificates, and social links are centralized in `src/data/` for easy editing without touching UI components:

| File Path | Description |
| :--- | :--- |
| `src/data/profile.ts` | Name, headline, bios, social links (GitHub, LinkedIn, Email), availability status, and resume path. |
| `src/data/skills.ts` | Frontend, Backend, Programming, Databases, Tools, and AI/IoT skills, categorized by "Comfortable With" and "Currently Learning". |
| `src/data/projects.ts` | The three showcased projects with categories, status, full descriptions, and feature lists. |
| `src/data/education.ts` | B.E. CSE (IoT) degree at Erode Sengunthar Engineering College, coursework, and seminars. |
| `src/data/certificates.ts` | All 13 verified certificate records, categories, descriptions, and featured flags. |
| `src/data/learning.ts` | Currently learning roadmap (Python, Web, AI, DSA, GATE CSE) with milestone logs. |
| `src/data/resume.ts` | Structured data powering the interactive printable resume view. |

---

## 🎓 13 Verified Certificate Entries

The certificate gallery includes all 13 credentials:

1. **Google AI Essentials** *(Google)* — Featured
2. **Introduction to Programming in C** *(NPTEL / IIT Kanpur)* — Featured
3. **Introduction to Generative AI Studio** *(Simplilearn SkillUp)* — Featured
4. **Claude Code in Action** *(Claude / Anthropic Academy)* — Featured
5. **HTML with AI** *(Unstop)* — Featured
6. **Viksit Bharat Young Leaders Dialogue (VYLD) 2027** *(Ministry of Youth Affairs & Sports / MYBharat)*
7. **AI Bootcamp — Certificate of Participation** *(IntelliPaat)*
8. **Certified WiFi Pentesting 101** *(Capricious Educational University)*
9. **Hands-on Training on Full Stack Development** *(Kongu Engineering College)*
10. **Mathematical Structure, Algorithm & Resolving Sets in Sparse Graphs** *(ESEC)*
11. **Cybersecurity & Ethical Hacking** *(Capricious Educational University)*
12. **Introduction to Artificial Intelligence** *(Simplilearn SkillUp)*
13. **Claude Code 101** *(Claude / Anthropic Academy)*

### How to Add High-Resolution Original Certificate Images:
1. Place your scanned image files (PNG, JPG, or WebP) into `public/certificates/`.
2. In `src/data/certificates.ts`, update the `image` field:
   ```ts
   {
     id: 'google-ai-essentials',
     title: 'Google AI Essentials',
     image: '/certificates/google-ai-essentials.png',
     ...
   }
   ```
3. The modal and gallery will automatically display the high-resolution image with full zoom and pan capabilities.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### 1. Clone & Install
```bash
git clone https://github.com/Vijayaragavan-V/portfolio.git
cd portfolio
npm install
```

### 2. Configure Environment Variables (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
To enable live contact form deliveries via [Formspree](https://formspree.io/):
```env
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
```
*(If left empty, the contact form intelligently provides a 1-click fallback to the user's default email client via `mailto:`).*

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` folder.

---

## ☁️ Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Visit [vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import your `portfolio` repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Set Build Command: `npm run build` and Output Directory: `dist`.
6. Add `VITE_CONTACT_FORM_ENDPOINT` under **Environment Variables** if using Formspree.
7. Click **Deploy**.

### Deploying to Netlify
1. Push your repository to GitHub.
2. Log in to [netlify.com](https://www.netlify.com/) and click **Add new site > Import an existing project**.
3. Select your repository.
4. Set Build command: `npm run build` and Publish directory: `dist`.
5. Click **Deploy site**.

---

## 📄 License & Credits

Designed and built by **Vijayaragavan V**.  
Free to customize and use as personal portfolio template with proper attribution.
