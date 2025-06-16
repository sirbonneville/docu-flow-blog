
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useTableOfContents } from '@/hooks/useTableOfContents';

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const { tocItems, activeId, scrollToHeading } = useTableOfContents(content);
  const [isExpanded, setIsExpanded] = useState(true);

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/30 border border-border rounded-lg p-4 my-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 w-full text-left font-semibold text-foreground hover:text-primary transition-colors mb-3"
      >
        {isExpanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        Table of Contents
      </button>
      
      {isExpanded && (
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`block w-full text-left py-1 px-2 rounded text-sm transition-colors hover:bg-muted/50 hover:text-primary ${
                activeId === item.id 
                  ? 'text-primary font-medium bg-muted/50' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              style={{ 
                paddingLeft: `${(item.level - 1) * 12 + 8}px`,
                lineHeight: '1.4'
              }}
            >
              {item.text}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};
