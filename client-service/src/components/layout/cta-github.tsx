"use client";

import React, { useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { IconBrandGithub } from '@tabler/icons-react';
import useOrderWebSocket from '@/modules/order/hooks/use-order-web-socket';
import { WEB_AI_URL } from '@/lib/cores/api';
import useSound from 'use-sound';

export default function CtaGithub() {

  const [isPending, startTransition] = useTransition();
  const { messages } = useOrderWebSocket();

  const [play] = useSound('/audio/money.mp3', {
    volume: 0.75,
    interrupt: true,
  });

  useEffect(() => {
    async function handleSpeak(text: string) {
      const res = await fetch(`${WEB_AI_URL}api/tts?text=${encodeURIComponent(text)}`);
      const mediaSource = new MediaSource();
      const audio = new Audio();
      audio.src = URL.createObjectURL(mediaSource);
      audio.setAttribute('crossorigin', 'anonymous');

      try {
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
      } catch (error) {
        audio.play()
      }
    }
    startTransition(() => {
      handleSpeak(messages[messages.length - 1]);
    })


  }, [messages])

  return (
    <Button variant='ghost' asChild size='sm' className='relative sm:flex' onClick={() => play()}>
      <div className='relative'>
        {isPending ? <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span> : null}
        <IconBrandGithub />
      </div>
    </Button>
  );
}
