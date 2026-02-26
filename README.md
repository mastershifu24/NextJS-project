# Ahmed Shifa – Personal Portfolio

Minimal portfolio site built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**.  
February 2026.

## Pages

- **Home** – Hero with name, title (Full Stack Engineer), and short bio
- **Projects** – Grid of 3 project cards (title, description, tags, GitHub link)
- **Contact** – Email link and LinkedIn / GitHub icons

## Features

- Dark/light theme toggle (state in `useState`, persisted in `localStorage`)
- Responsive, mobile-first layout
- Reusable `ProjectCard` and `ThemeToggle` components

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (one click)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New** → **Project** and import this repository.
4. Leave build settings as default (`npm run build`, output: Next.js).
5. Click **Deploy**. Your site will be live at `(https://ahmed-shifa.vercel.app/)`.

## Customize

- **Projects** – Edit `app/projects/page.tsx`: update `PROJECTS` titles, descriptions, tags, and GitHub `href`s.
- **Contact** – Edit `app/contact/page.tsx`: set `EMAIL`, `LINKEDIN_URL`, and `GITHUB_URL`.

## Project structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # Home
│   ├── projects/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ProjectCard.tsx
│   └── ThemeToggle.tsx
├── public/
└── package.json
```
