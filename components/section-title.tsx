import ChristmasHat from '@/components/christmas/hat';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <div className="relative inline-flex items-center">
        <ChristmasHat className="absolute -left-8 -top-6 h-10 w-10" />
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
