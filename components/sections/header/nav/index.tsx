'use client';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { height } from '../anim';

interface NavProps {
  setIsActive: (isActive: boolean) => void;
  onNavigate: (section: string) => void;
  hasScrolled?: boolean;
}

const Nav = ({ setIsActive, onNavigate, hasScrolled = false }: NavProps) => {
  const menuItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  const handleClick = (section: string) => {
    // First close the menu
    setIsActive(false);
    // Then navigate using the parent's navigation function
    setTimeout(() => {
      onNavigate(section.toLowerCase());
    }, 300); // Wait for menu close animation
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
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            hasScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-background'
          }`}
        >
          <nav className="flex flex-col items-center justify-center space-y-8 p-8">
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
