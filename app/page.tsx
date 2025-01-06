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
      <div className="fixed inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent dark:from-white/5" />
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
