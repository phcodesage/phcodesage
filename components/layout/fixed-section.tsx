'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface FixedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  onVisible?: (id: string) => void;
  description?: string;
}

export default function FixedSection({
  children,
  id,
  className = '',
  onVisible,
  description
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
      className={`flex min-h-[100dvh] w-full snap-start snap-always items-center justify-center pt-24 md:pt-28 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl px-4 md:px-6"
      >
        {/* Section Title Container */}
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </h2>
          {description && (
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Section Content */}
        <div className="w-full">{children}</div>
      </motion.div>
    </section>
  );
}
