'use client';
import { motion } from 'framer-motion';
import { Link } from '@/components/sections/header/nav/link';
import { translate } from '../../anim';
import styles from './style.module.scss';

interface BodyProps {
  links: Array<{ title: string; href: string; thumbnail: string }>;
  selectedLink: {
    isActive: boolean;
    index: number;
  };
  setSelectedLink: (link: { isActive: boolean; index: number }) => void;
  setIsActive: (isActive: boolean) => void;
  onNavigate: (section: string) => void;
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
  onNavigate
}: BodyProps) {
  const handleClick = (title: string) => {
    const sectionId = title.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onNavigate(sectionId);
      setIsActive(false);
    }
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title } = link;
        return (
          <motion.div
            key={index}
            custom={index}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Link
              title={title}
              href={`#${title.toLowerCase()}`}
              index={index}
              isActive={selectedLink.isActive}
              setSelectedLink={setSelectedLink}
              onClick={() => handleClick(title)}
            >
              {title}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
