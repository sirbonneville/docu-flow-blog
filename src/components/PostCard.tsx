
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tag } from "./Tag";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
  tagColors?: Record<string, string>;
  featured?: boolean;
  showFeaturedStyling?: boolean; // New prop to control when featured styling is applied
}

export const PostCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  slug, 
  tags, 
  tagColors,
  featured = false,
  showFeaturedStyling = false // Default to false, only true in dedicated featured section
}: PostCardProps) => {
  // Debug logging to track styling differences
  console.log('PostCard render:', { 
    title, 
    date, 
    tags, 
    tagColors, 
    featured, 
    showFeaturedStyling,
    tagsLength: tags?.length 
  });

  // Only apply featured styling when explicitly requested
  const shouldShowFeaturedStyling = featured && showFeaturedStyling;
  
  // Ensure consistent card classes for all non-featured cards
  const cardClasses = shouldShowFeaturedStyling
    ? "hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:bg-gradient-card-hover"
    : "hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-gradient-card-hover h-full flex flex-col";

  // Calculate tag display for desktop (limit 2) and mobile (limit 2)
  const getTagDisplayInfo = () => {
    if (!tags || tags.length === 0) {
      console.log('No tags found for post:', title);
      return { visibleTags: [], remainingCount: 0 };
    }
    
    const maxTags = 2; // Always limit to 2 tags on both desktop and mobile
    const visibleTags = tags.slice(0, maxTags);
    const remainingCount = Math.max(0, tags.length - maxTags);
    
    console.log('Tag display info for', title, ':', { visibleTags, remainingCount, totalTags: tags.length });
    
    return { visibleTags, remainingCount };
  };

  const { visibleTags, remainingCount } = getTagDisplayInfo();

  return (
    <Card className={cardClasses}>
      <CardHeader className="pb-2 space-y-3 p-6 md:p-3 flex-shrink-0">
        {/* Featured Badge - only show when showFeaturedStyling is true */}
        {shouldShowFeaturedStyling && (
          <div className="flex justify-start mb-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-green-cta text-primary-foreground">
              Featured Post
            </span>
          </div>
        )}
        
        {/* Publication Date - Enhanced mobile styling */}
        <div className="flex items-center space-x-2 text-primary font-medium">
          <Calendar className="h-4 w-4 md:h-3.5 md:w-3.5 flex-shrink-0" />
          <span className="text-sm md:text-xs" style={{ opacity: '0.8' }}>
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        
        {/* Title - Reduced font size and spacing */}
        <h3 className={`font-semibold leading-tight hover:text-primary transition-colors cursor-pointer ${
          shouldShowFeaturedStyling ? "text-lg md:text-lg" : "text-lg md:text-base"
        } line-clamp-2`}>
          <a href={`/post/${slug}`} className="block">
            {title}
          </a>
        </h3>

        {/* Read Time - Enhanced mobile styling */}
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Clock className="h-4 w-4 md:h-3.5 md:w-3.5 flex-shrink-0" />
          <span className="text-sm md:text-xs" style={{ opacity: '0.8' }}>{readTime}</span>
        </div>
      </CardHeader>
      
      <CardContent className={`flex flex-col p-6 md:p-3 pt-0 ${shouldShowFeaturedStyling ? '' : 'flex-grow'}`}>
        {/* Tags Section - Enhanced mobile styling with pill badges */}
        {tags && tags.length > 0 && (
          <div className="flex items-center gap-2 mb-4 md:mb-2.5 flex-wrap">
            {visibleTags.map((tag) => {
              console.log('Rendering tag:', tag, 'with colors:', tagColors);
              return (
                <div
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 md:px-2 md:py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 flex-shrink-0"
                >
                  {tag}
                </div>
              );
            })}
            
            {/* Remaining count indicator */}
            {remainingCount > 0 && (
              <div className="inline-flex items-center px-2 py-1.5 md:px-1.5 md:py-0.5 rounded-full text-xs font-medium border border-muted-foreground/30 bg-muted/50 text-muted-foreground flex-shrink-0">
                +{remainingCount}
              </div>
            )}
          </div>
        )}
        
        {/* Excerpt - Enhanced mobile spacing */}
        <p className={`text-muted-foreground leading-relaxed text-sm md:text-xs mb-4 md:mb-2.5 ${
          shouldShowFeaturedStyling ? '' : 'line-clamp-3 flex-grow'
        }`} style={{ lineHeight: '1.6' }}>
          {excerpt}
        </p>
        
        {/* Read More Link - Enhanced mobile styling */}
        <div className={`border-t border-border/50 pt-4 md:pt-2 ${shouldShowFeaturedStyling ? '' : 'mt-auto flex-shrink-0'}`}>
          <a 
            href={`/post/${slug}`}
            className="text-primary hover:text-primary/80 font-medium text-sm md:text-xs transition-colors inline-flex items-center group"
          >
            Read more 
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
