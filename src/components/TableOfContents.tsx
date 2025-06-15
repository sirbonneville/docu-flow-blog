
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTableOfContents, TocItem } from '@/hooks/useTableOfContents';
import { useState } from 'react';

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const { tocItems, activeId, scrollToHeading } = useTableOfContents(content);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  if (tocItems.length === 0) return null;

  const handleItemClick = (id: string) => {
    scrollToHeading(id);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const renderTocItems = (items: TocItem[]) => (
    <nav className="space-y-0.5">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className={`w-full text-left transition-colors duration-200 hover:text-primary block ${
            activeId === item.id 
              ? 'text-primary font-medium border-l-2 border-primary bg-primary/5' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          } ${
            item.level === 1 ? 'font-medium text-sm pl-2 py-1' :
            item.level === 2 ? 'pl-4 text-sm py-0.5' :
            item.level === 3 ? 'pl-6 text-xs py-0.5' :
            item.level === 4 ? 'pl-8 text-xs py-0.5' :
            item.level === 5 ? 'pl-10 text-xs py-0.5' :
            'pl-12 text-xs py-0.5'
          } rounded-sm`}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );

  // Both mobile and desktop now use the same collapsible pattern
  return (
    <div className="mb-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            className="w-full justify-between bg-muted/50 hover:bg-muted h-8 px-3"
          >
            <div className="flex items-center space-x-1.5">
              <List className="h-3.5 w-3.5" />
              <span className="font-medium text-sm">Table of Contents</span>
            </div>
            {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2 border-muted bg-muted/20">
            <CardContent className="p-3">
              {renderTocItems(tocItems)}
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
