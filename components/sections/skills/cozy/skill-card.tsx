import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  name: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

function SkillCard({ name, description, Icon, className }: SkillCardProps) {
  return (
    <Card
      className={cn(
        'border-none bg-muted/40 transition-colors hover:bg-muted/60',
        className
      )}
    >
      <CardContent className="flex flex-col items-center space-y-2 p-6 text-center">
        <Icon className="mb-2 h-8 w-8 text-primary" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
