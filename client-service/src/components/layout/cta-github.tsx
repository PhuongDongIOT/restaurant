"use client";

import React, { useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { IconBrandGithub } from '@tabler/icons-react';
import useOrderWebSocket from '@/modules/order/hooks/use-order-web-socket';

export default function CtaGithub() {

  const { messages } = useOrderWebSocket();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function handleSpeak(text: string) {
      
      const res = await fetch(`http://localhost:3030/api/tts?text=${encodeURIComponent(text)}`);
      const mediaSource = new MediaSource();
      const audio = new Audio();
      audio.src = URL.createObjectURL(mediaSource);
      
      mediaSource.addEventListener("sourceopen", () => {
        const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");
        const reader = res.body?.getReader();
      
        function pump() {
          reader?.read().then(({ done, value }) => {
            if (done) {
              if (sourceBuffer.updating) {
                sourceBuffer.addEventListener("updateend", () => {
                  mediaSource.endOfStream();
                }, { once: true });
              } else {
                mediaSource.endOfStream();
              }
              return;
            }
            if (!sourceBuffer.updating) {
              sourceBuffer.appendBuffer(value!);
              pump();
            } else {
              sourceBuffer.addEventListener("updateend", () => {
                sourceBuffer.appendBuffer(value!);
                pump();
              }, { once: true });
            }
          });
        }
      
        pump();
      });
      
      audio.play()
    }
    startTransition(() => {
      handleSpeak(messages[messages.length - 1]);
    })


  }, [messages])



  return (
    <Button variant='ghost' asChild size='sm' className='relative hidden sm:flex'>
      <div className='relative'>
        {isPending ? <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span> : null}
        <IconBrandGithub />
      </div>
    </Button>
  );
}
