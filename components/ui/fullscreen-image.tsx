import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface FullscreenImageProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function FullscreenImage({
  src,
  alt,
  isOpen,
  onClose
}: FullscreenImageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setShowTooltip(true);

      // Reset the timeout on each mouse move
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 1500); // Hide after 1.5 seconds of no movement
    };

    document.addEventListener('keydown', handleEscKey);
    if (isOpen) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-4 z-50"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Close (Esc)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div
            className="absolute left-0 top-0 h-full w-[20%] cursor-pointer"
            onClick={onClose}
          />

          <div
            className="absolute right-0 top-0 h-full w-[20%] cursor-pointer"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative h-[90vh] w-[90vw]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Floating tooltip that follows mouse */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'fixed',
                  left: mousePosition.x + 20,
                  top: mousePosition.y + 20,
                  pointerEvents: 'none'
                }}
                className="rounded-md bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md"
              >
                Press Esc or click outside to close
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
