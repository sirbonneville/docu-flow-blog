
import { Badge } from '@/components/ui/badge';
import { getTagColor } from '@/utils/tagColors';

interface TagProps {
  tag: string;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
  tagColors?: Record<string, string>;
}

export const Tag = ({ tag, variant = 'outline', className, tagColors }: TagProps) => {
  const tagColorClasses = getTagColor(tag, { frontmatterColors: tagColors });
  
  return (
    <Badge 
      variant={variant} 
      className={`text-xs font-medium border ${tagColorClasses} ${className}`}
    >
      {tag}
    </Badge>
  );
};
