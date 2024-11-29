import styles from './style.module.scss';

interface LinkProps {
  title: string;
  href: string;
  index: number;
  isActive: boolean;
  setSelectedLink: (link: { isActive: boolean; index: number }) => void;
  onClick: () => void;
  children: React.ReactNode;
}

export function Link({
  title,
  href,
  index,
  isActive,
  setSelectedLink,
  onClick,
  children
}: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a
      href={href}
      className={styles.link}
      onClick={handleClick}
      onMouseEnter={() => {
        setSelectedLink({ isActive: true, index });
      }}
      onMouseLeave={() => {
        setSelectedLink({ isActive: false, index });
      }}
    >
      {children}
    </a>
  );
}
