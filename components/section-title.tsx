import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  icon
}: SectionTitleProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-center">
      <div className="flex items-center space-x-4">
        {icon && <div className="relative">{icon}</div>}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      <p className="text-muted-foreground md:text-lg">{subtitle}</p>
    </div>
  );
}
