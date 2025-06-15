
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

  // Mobile version - fixed top dropdown
  if (isMobile) {
    return (
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-background/95 backdrop-blur-sm border-border/50 shadow-lg"
            >
              <List className="h-4 w-4 mr-1" />
              <span className="sr-only sm:not-sr-only">TOC</span>
              {isOpen ? <ChevronUp className="h-3 w-3 ml-1" /> : <ChevronDown className="h-3 w-3 ml-1" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="mt-2 w-64 border-border/50 bg-background/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-border/50">
                  <List className="h-3 w-3 text-muted-foreground" />
                  <span className="font-medium text-xs text-foreground">Table of Contents</span>
                </div>
                {renderTocItems(tocItems)}
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  }

  // Desktop version - fixed right side
  return (
    <div className="fixed top-1/4 right-4 z-40 hidden md:block max-w-64">
      <Card className="border-border/50 bg-background/95 backdrop-blur-sm shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-border/50">
            <List className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-sm text-foreground">Contents</span>
          </div>
          {renderTocItems(tocItems)}
        </CardContent>
      </Card>
    </div>
  );
};
