'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface FixedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  onVisible?: (id: string) => void;
}

export default function FixedSection({
  children,
  id,
  className = '',
  onVisible
}: FixedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView && onVisible) {
      onVisible(id);
    }
  }, [isInView, id, onVisible]);

  return (
    <section
      ref={ref}
      id={id}
      className={`flex min-h-[100dvh] w-full snap-start snap-always items-center justify-center ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
