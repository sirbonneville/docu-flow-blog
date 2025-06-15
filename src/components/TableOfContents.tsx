
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
    <nav className="space-y-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className={`w-full text-left text-sm transition-colors duration-200 hover:text-primary block ${
            activeId === item.id 
              ? 'text-primary font-medium border-l-2 border-primary pl-3' 
              : 'text-muted-foreground hover:text-foreground pl-3'
          } ${
            item.level === 1 ? 'font-medium text-base' :
            item.level === 2 ? 'pl-4 text-sm' :
            item.level === 3 ? 'pl-6 text-sm' :
            item.level === 4 ? 'pl-8 text-xs' :
            item.level === 5 ? 'pl-10 text-xs' :
            'pl-12 text-xs'
          }`}
        >
          {item.text}
        </button>
      ))}
    </nav>
  );

  if (isMobile) {
    return (
      <div className="mb-6">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center space-x-2">
                <List className="h-4 w-4" />
                <span>Table of Contents</span>
              </div>
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="mt-2">
              <CardContent className="p-4">
                {renderTocItems(tocItems)}
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  }

  return (
    <div className="hidden lg:block mb-8 w-56">
      <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-border/50">
            <List className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium text-sm text-foreground">Table of Contents</span>
          </div>
          {renderTocItems(tocItems)}
        </CardContent>
      </Card>
    </div>
  );
};
