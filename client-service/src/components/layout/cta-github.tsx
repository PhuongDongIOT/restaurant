"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { IconBrandGithub } from '@tabler/icons-react';;
import { useSoundNotifycation } from '@/modules/notifycation/hooks/use-sound-notifycation';

export default function CtaGithub() {

  const { isPending, play } = useSoundNotifycation();

  return (
    <Button variant='ghost' asChild size='sm' className='relative sm:flex' onClick={() => play()}>
      <div className='relative'>
        {isPending ? <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span> : null}
        <IconBrandGithub />
      </div>
    </Button>
  );
}
