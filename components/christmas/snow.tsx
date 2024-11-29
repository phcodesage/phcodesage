'use client';
import { useEffect, useState } from 'react';
import styles from './snow.module.scss';

export default function Snow() {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; left: number; animationDuration: number }>
  >([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random position
      animationDuration: 3 + Math.random() * 7 // Random speed between 3-10s
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className={styles.snowContainer}>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={styles.snowflake}
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
