# Tharun S — Software Engineer Portfolio

A premium, fully responsive portfolio built with **React (Create React App), plain CSS, and vanilla JS** on the front end, and **Node.js + Express + MongoDB + Nodemailer** on the back end. No CSS/UI frameworks, no animation libraries — every animation (typing effect, scroll-reveal, counters, ripple buttons, custom cursor, particle background, modals) is hand-built.

```
portfolio/
├── frontend/   React app (Create React App)
└── backend/    Express API (contact form → MongoDB + email)
```

## 1. Prerequisites

- Node.js 18+ and npm
- (Optional) A MongoDB connection string — Atlas free tier works well
- (Optional) SMTP credentials to actually send contact-form emails (a Gmail **App Password** is the easiest option)

The contact form still works end-to-end without Mongo/SMTP configured — it just won't persist messages or send email until you add those credentials (see `backend/.env.example`).

## 2. Run the backend

```bash
cd backend
npm install
cp .env.example .env    # then fill in MONGODB_URI / SMTP_* values
npm run dev              # or: npm start
```

The API starts on `http://localhost:5000` with:
- `GET  /api/health` — health check
- `POST /api/contact` — `{ name, email, subject, message }`

## 3. Run the frontend

```bash
cd frontend
npm install
cp .env.example .env      # REACT_APP_API_BASE_URL, defaults to http://localhost:5000
npm start
```

Opens on `http://localhost:3000`.

## 4. Replace the placeholder content

Everything text-based lives in **one file**: `frontend/src/data/portfolioData.js`. Edit names, links, project details, achievements, stats, etc. there — every component reads from it.

Placeholder assets were generated so the site renders correctly out of the box — swap them for your real files at the same paths:

| Placeholder | Replace with |
|---|---|
| `frontend/public/assets/profile.jpg` | Your photo |
| `frontend/public/assets/projects/*.jpg` | Real project screenshots |
| `frontend/public/assets/certificates/*.jpg` | Real certificate images |
| `frontend/public/resume/Tharun_S_Resume.pdf` | Your real resume PDF |

Also update the real URLs in `portfolioData.js` for GitHub, LinkedIn, LeetCode, GeeksforGeeks, project repos/demos, and LinkedIn achievement posts (currently placeholder `your-github` / `your-linkedin` links).

## 5. What's included

- Sticky navbar that goes from transparent to a glass background on scroll, with active-section highlighting
- Hero with typing animation, floating photo with a rotating gradient ring, and a "whoami.js" terminal-card as the signature visual element
- About, Skills (animated progress bars), Projects (cards + detail modal), animated stat counters, Achievements timeline, Coding Profiles, Internships timeline, Education timeline, Certificates (with preview modal), Contact form wired to the Express API
- Dark/light theme toggle persisted to `localStorage`
- Scroll progress bar, scroll-to-top button, custom glowing cursor (desktop only), ambient particle + gradient background, loading screen, scroll-reveal animations, ripple buttons
- Fully responsive down to mobile; respects `prefers-reduced-motion`

## 6. Deployment notes

- Frontend: `npm run build` in `frontend/` produces a static `build/` folder deployable to Vercel, Netlify, or any static host.
- Backend: deploy `backend/` to any Node host (Render, Railway, an EC2 box, etc.), set the same env vars from `.env.example`, and point `REACT_APP_API_BASE_URL` in the frontend at that deployed URL.
- Update `CLIENT_ORIGIN` in the backend `.env` to your deployed frontend URL so CORS allows it.

## 7. A note on this build

This was generated in a sandboxed environment without npm registry access, so `npm install` could not be run here — every `.js`/`.jsx` file was instead syntax-checked with esbuild and every CSS file brace-balance-checked to catch errors before hand-off. Run `npm install` yourself in both `frontend/` and `backend/` as the first step.
