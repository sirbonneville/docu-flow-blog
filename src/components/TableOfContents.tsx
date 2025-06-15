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
    <nav className="space-y-1">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className={`w-full text-left transition-colors duration-200 hover:text-primary block ${
            activeId === item.id 
              ? 'text-primary font-medium border-l-2 border-primary bg-primary/5' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          } ${
            item.level === 1 ? 'font-medium text-sm pl-3 py-1.5' :
            item.level === 2 ? 'pl-5 text-sm py-1' :
            item.level === 3 ? 'pl-7 text-xs py-1' :
            item.level === 4 ? 'pl-9 text-xs py-0.5' :
            item.level === 5 ? 'pl-11 text-xs py-0.5' :
            'pl-13 text-xs py-0.5'
          } rounded-sm`}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );

  // Both mobile and desktop now use the same collapsible pattern
  return (
    <div className="mb-3">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            className="w-full justify-between bg-muted/50 hover:bg-muted"
          >
            <div className="flex items-center space-x-2">
              <List className="h-4 w-4" />
              <span className="font-medium">Table of Contents</span>
            </div>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-3 border-muted bg-muted/20">
            <CardContent className="p-4">
              {renderTocItems(tocItems)}
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
