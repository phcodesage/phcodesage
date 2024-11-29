export default function ChristmasHat({
  className = 'w-8 h-8'
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ transform: 'rotate(-15deg)' }}
    >
      {/* Hat Base */}
      <path
        d="M20 70 L80 70 L50 20 Z"
        fill="#C41E3A"
        stroke="#fff"
        strokeWidth="2"
      />
      {/* White Trim */}
      <path
        d="M15 70 L85 70 L85 80 L15 80 Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth="1"
      />
      {/* Pom Pom */}
      <circle cx="50" cy="20" r="8" fill="#fff" stroke="#fff" strokeWidth="1" />
    </svg>
  );
}
