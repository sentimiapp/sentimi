'use client';
import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '@/src/lib/supabaseClient';

export default function VoiceRecorder({ onUploaded }: { onUploaded?: (url:string)=>void }){
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const chunks = useRef<BlobPart[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [])

  const start = async () => {
    try{
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => chunks.current.push(e.data);
      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks.current, { type: 'audio/webm' });
        chunks.current = [];
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
      };
      mediaRecorder.start();
      setRecorder(mediaRecorder);
      setRecording(true);
      setSeconds(0);
      timerRef.current = setInterval(()=> setSeconds(s => s+1), 1000);
    }catch(e){
      alert('Please enable microphone permission.');
    }
  };

  const stop = () => {
    recorder?.stop();
    setRecording(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const upload = async () => {
    if (!audioUrl) return;
    const resp = await fetch(audioUrl);
    const blob = await resp.blob();
    const fileName = `voice/${Date.now()}.webm`;
    const { data, error } = await supabase.storage.from('voice').upload(fileName, blob, { contentType: 'audio/webm' });
    if (error) {
      alert('Upload error: ' + error.message);
      return;
    }
    const { data: pub } = supabase.storage.from('voice').getPublicUrl(fileName);
    if (onUploaded) onUploaded(pub.publicUrl);
  };

  return (
    <div className="recorder">
      {!recording && <button className="btn" onClick={start}>● Record</button>}
      {recording && <button className="btn" onClick={stop}>■ Stop ({seconds}s)</button>}
      {audioUrl && <audio controls src={audioUrl} />}
      {audioUrl && <button className="btn" onClick={upload}>↑ Upload</button>}
    </div>
  )
}
