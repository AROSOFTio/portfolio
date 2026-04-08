# AROSOFT Portfolio

A production‑ready **Next.js 15** portfolio platform for **AROSOFT Innovations Ltd**.

## Features (MVP)
- Home page with premium hero, about, featured projects, services, tech stack, why‑choose‑us, process, CTA.
- Projects page – responsive grid, search, category filter, status badges.
- Dynamic project detail pages (slug routing) with gallery, features, tech list, live/demo links.
- Reusable UI components (Navbar, MobileMenu, Footer, Button, Badge, etc.)
- Tailwind CSS + Framer Motion for smooth animations.
- TypeScript for type safety.
- Dockerized production build, runs on **port 9000**.
- Ready for Nginx reverse‑proxy (`portfolio.arosoft.io`).

## Tech Stack
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** icons
- **Docker** (node:20‑alpine multi‑stage)

## Getting Started (Development)
```bash
# Clone the repo
git clone <repo-url>
cd portfolio

# Install dependencies
npm ci

# Run dev server on port 9000
npm run dev
```
Open <http://localhost:9000>.

## Production Build & Docker
```bash
# Build the Docker image and start container
docker compose up -d --build
```
The container will expose **port 9000**. Nginx can reverse‑proxy `portfolio.arosoft.io` to this port.

### Stop / Restart
```bash
docker compose down   # stop and remove containers
docker compose up -d   # start again
```

## Environment
Create a `.env.example` (currently no secrets are required, but you may add future variables):
```dotenv
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.arosoft.io
```
Copy to `.env` and adjust as needed.

## Folder Structure
```
portfolio/
├─ app/                # Next.js App Router pages
│   ├─ layout.tsx
│   ├─ page.tsx        # Home
│   ├─ about/
│   │   └─ page.tsx
│   ├─ projects/
│   │   ├─ page.tsx    # Projects list
│   │   └─ [slug]/
│   │       └─ page.tsx # Project detail
│   └─ ... (future pages)
├─ components/
│   ├─ layout/         # Navbar, MobileMenu, Footer
│   ├─ home/           # Hero, AboutSummary, FeaturedProjects, …
│   ├─ projects/       # ProjectCard, Filters, Search
│   └─ ui/             # Button, Badge, etc.
├─ data/               # Static data (projects, services, techStack)
├─ lib/                # Utilities (cn helper)
├─ types/              # TypeScript interfaces
├─ public/             # Images, logos (placeholder files)
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
├─ tailwind.config.js
├─ tsconfig.json
└─ README.md
```

## Extending the Platform
- Add more pages (About, Services, Contact, Request Project) using the same component pattern.
- Replace placeholder images in `public/images/...` with real screenshots.
- Connect a real CMS or database by swapping the static data imports.
- Configure CI/CD pipelines to rebuild and redeploy the Docker image automatically.

---

*Designed and built by Antigravity – a senior full‑stack engineer, product designer, and UI/UX architect.*
