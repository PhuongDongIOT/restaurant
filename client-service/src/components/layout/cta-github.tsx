"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { IconBrandGithub } from '@tabler/icons-react';
import useOrderWebSocket from '@/modules/order/hooks/use-order-web-socket';

export default function CtaGithub() {

  const { messages } = useOrderWebSocket();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleSpeak = async (messages: string) => {

      setIsShow(true);
      const sentences = [messages];

      const urls = await Promise.all(
        sentences.map(async (input) => {
          const res = await fetch("https://api.openai.com/v1/audio/speech", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "tts-1",
              input,
              voice: "nova",
              response_format: "mp3",
            }),
          });
          const blob = await res.blob();
          return URL.createObjectURL(blob);
        })
      );
      // Play lần lượt
      for (const url of urls) {
        const audio = new Audio(url);
        await new Promise((resolve) => {
          audio.onended = resolve;
          audio.play();
        });
      }
      setIsShow(false);
    };

    handleSpeak(messages[messages.length - 1]);


  }, [messages])



  return (
    <Button variant='ghost' asChild size='sm' className='relative hidden sm:flex'>
      <div className='relative'>
        {isShow ? <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span> : null}
        <a
          href='https://github.com/Kiranism/next-shadcn-dashboard-starter'
          rel='noopener noreferrer'
          target='_blank'
          className='dark:text-foreground'
        >
          <IconBrandGithub />
        </a>
      </div>
    </Button>
  );
}
