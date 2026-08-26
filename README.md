# Ye Naing — Software Engineer Portfolio

A responsive, recruiter-focused portfolio built from Ye Naing's CV. The site highlights backend engineering experience across .NET, Laravel, relational databases, Linux, and data-intensive business systems.

## Stack

- React + Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- Formspree-ready contact form

## Run locally

```bash
npm install
npm run dev
```

Create a `.env` file from `.env.example` and replace `YOUR_FORM_ID` with a Formspree form ID. Without this, the form UI works but submissions cannot be delivered.

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub and import the repository at Vercel.
2. Vercel detects Vite automatically. Use `npm run build` and `dist` if prompted.
3. Add `VITE_FORMSPREE_ENDPOINT` in Project Settings → Environment Variables.
4. Deploy. `vercel.json` provides SPA routing fallback.

## Deploy to Netlify

1. Import the repository in Netlify.
2. Set the build command to `npm run build` and publish directory to `dist`.
3. Add `VITE_FORMSPREE_ENDPOINT` under Site configuration → Environment variables.
4. Deploy. `public/_redirects` provides SPA routing fallback.

## Content notes

- Project source and live links are intentionally labeled private/client-hosted because the CV does not provide public URLs. Replace these labels when public case studies become available.
- The CV download lives at `public/YeNaing_Modern_CV.pdf`.
- Skill percentages are relative confidence indicators, not formal assessment scores.

## Recommended next projects

1. A multi-tenant .NET SaaS API with RBAC, audit trails, background jobs, integration tests, Docker, and CI/CD.
2. An anonymized Laravel healthcare analytics dashboard with queued CSV imports and validation reporting.
3. A Go integration microservice demonstrating idempotency, retry policies, observability, and API documentation.
