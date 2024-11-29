'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.loadingContent}>
        <div className={styles.progressContainer}>
          <motion.div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className={styles.loadingText}>{progress}%</p>
      </div>
    </div>
  );
}
