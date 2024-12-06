'use client';

import type { Metadata } from 'next';

import { Header } from '@/components/sections';

import Preloader from '@/components/preloader/preloader';
import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import { useState } from 'react';

export default function ProjectLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header activeSection={activeSection} onNavigate={setActiveSection} />
        <main className="my-14 flex-1">{children}</main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
