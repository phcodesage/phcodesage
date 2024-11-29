'use client';
import { useState } from 'react';
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact
} from '@/components/sections';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from '@/components/preloader/preloader';
import Cursor from '@/components/cursor/cursor';
import Snow from '@/components/christmas/snow';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = {
    hero: <Hero />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    experience: <Experience />,
    contact: <Contact />
  };

  return (
    <>
      <Preloader />
      <Snow />
      <div className="fixed inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent dark:from-white/5" />

          <svg
            className="fixed bottom-0 left-8 h-48 w-48 text-[#2F5C34] opacity-20 dark:text-[#1F3C24] md:opacity-100"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 0 L90 40 L80 40 L95 60 L85 60 L100 80 L0 80 L15 60 L5 60 L20 40 L10 40 Z" />
            <rect x="45" y="80" width="10" height="20" fill="#4A2C2A" />
            <circle cx="50" cy="30" r="3" fill="#FFD700" />
            <circle cx="40" cy="50" r="3" fill="#FF0000" />
            <circle cx="60" cy="50" r="3" fill="#FFD700" />
            <circle cx="35" cy="70" r="3" fill="#FF0000" />
            <circle cx="50" cy="70" r="3" fill="#FFD700" />
            <circle cx="65" cy="70" r="3" fill="#FF0000" />
          </svg>

          <svg
            className="fixed bottom-0 right-8 h-32 w-48 text-[#C41E3A] opacity-20 dark:text-[#8B0000] md:opacity-100"
            viewBox="0 0 100 60"
            fill="currentColor"
          >
            <path d="M60 40 Q65 35 70 40 L90 40 Q95 40 95 35 L95 25 Q95 20 90 20 L65 20 Q60 20 60 25 Z" />
            <circle cx="75" cy="30" r="8" fill="#FFE4E1" />
            <rect x="67" y="25" width="16" height="15" fill="currentColor" />
            <path d="M67 25 Q75 20 83 25" fill="#FFF" />
            <circle cx="83" cy="25" r="3" fill="#FFF" />
            <path
              d="M40 40 Q45 35 50 40 L55 40 L55 35 L45 35 L45 30 L40 25 L35 30 L35 35 L25 35 L25 40 L30 40 Q35 35 40 40"
              fill="#8B4513"
            />
            <circle cx="37" cy="28" r="2" fill="#000" />
            <circle cx="42" cy="25" r="3" fill="#FF0000" />
          </svg>
        </div>

        <Header activeSection={activeSection} onNavigate={setActiveSection} />

        <main className="h-[calc(100vh-4rem)] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              <div className="mx-auto h-full max-w-7xl overflow-y-auto px-4 pt-20 md:px-6 md:pt-16">
                <div className="flex min-h-full items-center justify-center">
                  {sections[activeSection as keyof typeof sections]}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Cursor />
    </>
  );
}
