'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CodeIcon } from 'lucide-react';
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

  const handleNavigation = (section: string) => {
    onNavigate(section);
    setIsActive(false);
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: loader ? 3.5 : 0, duration: 0.8 }}
    >
      <div className={styles.bar}>
        <Link
          href="#"
          onClick={() => handleNavigation('hero')}
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
