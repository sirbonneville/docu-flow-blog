
import { Badge } from '@/components/ui/badge';

interface TagProps {
  tag: string;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export const Tag = ({ tag, variant = 'secondary', className }: TagProps) => {
  return (
    <Badge variant={variant} className={`text-xs ${className}`}>
      {tag}
    </Badge>
  );
};
