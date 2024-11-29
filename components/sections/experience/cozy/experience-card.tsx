import React from 'react';
import { CardContent, Card } from '@/components/ui/card';
import { Experience } from '@/types/experience';
import { cn } from '@/lib/utils';

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  links,
  className
}: ExperienceCardProps) {
  return (
    <Card
      className={cn(
        'h-full border-none bg-muted/40 transition-colors hover:bg-muted/60',
        className
      )}
    >
      <CardContent className="flex h-full flex-col p-4 md:p-6">
        <div className="flex-1">
          <div className="mb-2 flex items-baseline justify-between">
            <h3 className="text-xl font-semibold">{company}</h3>
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <h4 className="mb-3 text-base font-medium uppercase text-muted-foreground">
            {name}
          </h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {links && links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
