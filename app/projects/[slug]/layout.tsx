'use client';

import type { Metadata } from 'next';

import { Header } from '@/components/sections';

import Preloader from '@/components/preloader/preloader';
import Cursor from '@/components/cursor/cursor';
import { useState, useEffect } from 'react';

export default function ProjectLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.documentElement.style.position = 'static';
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.body.style.position = 'static';

    return () => {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
      document.documentElement.style.position = 'fixed';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';
    };
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="my-14 flex-1">{children}</main>
      <Cursor />
    </div>
  );
}
