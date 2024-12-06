'use client';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { height } from '../anim';
import { Dispatch, SetStateAction } from 'react';

interface NavProps {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  onNavigate: (section: string) => void;
  hasScrolled: boolean;
}

const Nav = ({ setIsActive, onNavigate, hasScrolled }: NavProps) => {
  const menuItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  const handleClick = (section: string) => {
    setIsActive(false);
    setTimeout(() => {
      onNavigate(section.toLowerCase());
    }, 300);
  };

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div
          className={`fixed inset-0 z-50 flex h-[100dvh] items-center justify-center ${
            hasScrolled
              ? 'bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80'
              : 'bg-background/60 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60'
          }`}
        >
          <nav className="flex flex-col items-center justify-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
