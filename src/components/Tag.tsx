
import { Badge } from '@/components/ui/badge';
import { getTagColor } from '@/utils/tagColors';

interface TagProps {
  tag: string;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
  tagColors?: Record<string, string>;
}

export const Tag = ({ tag, variant = 'outline', className, tagColors }: TagProps) => {
  console.log('Tag component rendering:', { tag, tagColors, variant });
  
  const tagColorClasses = getTagColor(tag, { frontmatterColors: tagColors });
  
  console.log('Tag color classes for', tag, ':', tagColorClasses);
  
  return (
    <Badge 
      variant={variant} 
      className={`text-xs font-medium border ${tagColorClasses} ${className}`}
    >
      {tag}
    </Badge>
  );
};
