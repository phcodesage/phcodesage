'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './style.module.scss';
import { opacity, background } from './anim';
import Nav from './nav/index';
import { ModeToggle } from '@/components/mode-toggle';
import { metadata as meta } from '@/app/config';
import { cn } from '@/lib/utils';

interface HeaderProps {
  loader?: boolean;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ loader, activeSection, onNavigate }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
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

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [onNavigate]);

  // Update the navigation items in the header component
  const navigationItems = [
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Experience', section: 'experience' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <motion.header
      className={`${styles.header} fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-background/60 shadow-sm backdrop-blur-lg supports-[backdrop-filter]:bg-background/60'
          : 'bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/40'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: loader ? 3.5 : 0, duration: 0.8 }}
    >
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
        <nav className="hidden items-center justify-center space-x-8 md:flex">
          {navigationItems.map((item) => (
            <button
              key={item.section}
              onClick={() => onNavigate(item.section)}
              className={cn(
                'text-base font-medium transition-colors hover:text-primary',
                activeSection === item.section
                  ? 'text-primary'
                  : 'text-foreground'
              )}
            >
              {item.label}
            </button>
          ))}
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
          <Nav
            setIsActive={setIsActive}
            onNavigate={handleNavigation}
            hasScrolled={hasScrolled}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
