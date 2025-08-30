# Sentimi — Free Starter (Next.js + Supabase)

This is a minimal starter to get Sentimi online for free.

## 1) Supabase setup
- In Supabase Storage, create a **bucket** called `voice` and mark it **Public**.
- Copy your values from Settings → Project Settings:
  - Project URL → e.g. `https://YOURID.supabase.co`
  - API Keys → Publishable (anon) key

## 2) Environment variables
On Vercel (or locally in `.env.local`), set:
```
SUPABASE_URL= https://YOURID.supabase.co
SUPABASE_ANON_KEY= eyJ... (your publishable anon key)
```
You may also set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` if deploying purely static.

## 3) Develop locally (optional)
```
npm install
npm run dev
```
Visit http://localhost:3000

## 4) Deploy on Vercel
- Import this repo into Vercel from GitHub
- Add the two env vars above on the Vercel project → Deploy
- Open `/feed` to record + upload voice notes (saved in `voice` bucket)
