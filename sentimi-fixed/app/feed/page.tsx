'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
import VoiceRecorder from '@/components/VoiceRecorder';
import { useLanguage } from '@/src/contexts/LanguageContext';

type FileItem = { name: string, id: string, created_at?: string };

export default function FeedPage(){
  const [files, setFiles] = useState<FileItem[]>([]);
  const { t } = useLanguage();

  const load = async () => {
    const { data, error } = await supabase.storage.from('voice').list('voice', { limit: 100, sortBy: { column: 'created_at', order: 'desc' } });
    if (error) { console.error(error); return; }
    setFiles(data || []);
  };

  useEffect(() => { load(); }, []);

  return (
    <main>
      <h1 className="title">{t('feed.title')}</h1>
      <VoiceRecorder onUploaded={() => load()} />
      <div className="feedList">
        {files.length === 0 && <div className="card">{t('feed.empty')}</div>}
        {files.map(f => {
          const { data } = supabase.storage.from('voice').getPublicUrl(`voice/${f.name}`);
          const url = data.publicUrl;
          return (
            <div className="card" key={f.name}>
              <div style={{fontWeight:700, marginBottom:8}}>{f.name}</div>
              <audio controls src={url} />
            </div>
          )
        })}
      </div>
    </main>
  )
}
