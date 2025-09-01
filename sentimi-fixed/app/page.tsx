'use client';
import Image from 'next/image';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function HomePage(){
  const { t } = useLanguage();
  return (
    <main>
      <Image src="/logo-home.png" alt="Sentimi logo" width={140} height={140} className="logo" />
      <div className="title">{t('homeTitle')}</div>
      <div className="subtitle">{t('homeSubtitle')}</div>
      <div className="slogan">{t('homeSlogan')}</div>
    </main>
  );
}
