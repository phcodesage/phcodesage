'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';
import { opacity, background } from './anim';
import Nav from './nav';
import { ModeToggle } from '@/components/mode-toggle';
import { metadata as meta } from '@/app/config';

interface HeaderProps {
  loader?: boolean;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ loader, activeSection, onNavigate }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      // Update URL without page reload
      window.history.pushState({}, '', `/#${section}`);
      element.scrollIntoView({ behavior: 'smooth' });
      onNavigate(section);
    }
  };

  // Handle initial hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          onNavigate(hash);
        }
      }
    };

    // Handle initial load
    if (window.location.hash) {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [onNavigate]);

  return (
    <motion.header
      className={`${styles.header} relative`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: loader ? 3.5 : 0, duration: 0.8 }}
    >
      <div className="absolute left-0 top-0 h-1 w-full animate-pulse bg-gradient-to-r from-[#ff0000] via-[#00ff00] to-[#ff0000]" />
      <div className={styles.bar}>
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('hero');
          }}
          className="flex items-center justify-center"
        >
          <span className="text-md font-semibold transition-transform hover:translate-x-1 hover:translate-y-1">
            {meta.author.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {['about', 'projects', 'skills', 'experience', 'contact'].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={`text-sm font-medium capitalize transition-colors hover:text-primary ${
                  activeSection === section
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {section}
              </button>
            )
          )}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <div
            onClick={() => setIsActive(!isActive)}
            className={`${styles.el} cursor-pointer`}
          >
            <div className={styles.label}>
              <motion.p
                variants={opacity}
                animate={!isActive ? 'open' : 'closed'}
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? 'open' : 'closed'}
              >
                Close
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
            />
          </div>
        </div>
      </div>

      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? 'open' : 'closed'}
        className={styles.background}
      />
      <AnimatePresence mode="wait">
        {isActive && (
          <Nav setIsActive={setIsActive} onNavigate={handleNavigation} />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
