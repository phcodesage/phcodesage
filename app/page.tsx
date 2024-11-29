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
        <Header activeSection={activeSection} onNavigate={setActiveSection} />

        <main className="h-[calc(100vh-4rem)] w-full overflow-hidden pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex h-full w-full items-center justify-center px-4 md:px-6"
            >
              <div className="mx-auto w-full max-w-7xl">
                {sections[activeSection as keyof typeof sections]}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Cursor />
    </>
  );
}
