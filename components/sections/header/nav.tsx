'use client';
import styles from './nav.module.scss';

interface NavProps {
  setIsActive: (active: boolean) => void;
}

const Nav = ({ setIsActive }: NavProps) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.navItems}>
          <a href="#hero" onClick={() => setIsActive(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsActive(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsActive(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsActive(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
