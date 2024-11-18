'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './fixed-section.module.scss';

interface FixedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const FixedSection = ({ children, id, className = '' }: FixedSectionProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top <= window.innerHeight / 2;
        setIsActive(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  return (
    <motion.section
      id={id}
      className={`${styles.fixedSection} ${className} ${
        isActive ? styles.active : ''
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.section>
  );
};

export default FixedSection;
