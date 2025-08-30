import './globals.css'
import { LanguageProvider, useLanguage } from '@/src/contexts/LanguageContext';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Sentimi',
  description: 'Voice-first social network',
};

function Header() {
  // client component wrapper
  return (
    <div className="header">
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <LangSelector />
      </div>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <Link className="btn" href="/auth/login">Login</Link>
        <Link className="btn" href="/auth/signup">Sign up</Link>
      </div>
    </div>
  );
}

function LangSelector() {
  const { language, setLanguage } = useLanguage();
  const langs = ['it','en','es','fr','de','pt','tr','ar','zh','ja'] as const;
  return (
    <select className="select" value={language} onChange={(e)=>setLanguage(e.target.value as any)}>
      {langs.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
    </select>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
