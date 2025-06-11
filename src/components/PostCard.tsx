
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
  // Only apply featured styling when explicitly requested
  const shouldShowFeaturedStyling = featured && showFeaturedStyling;
  
  const cardClasses = shouldShowFeaturedStyling
    ? "hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:bg-gradient-card-hover"
    : "hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-gradient-card-hover h-full flex flex-col";

  // Calculate tag display for desktop (limit 2) and mobile (limit 2)
  const getTagDisplayInfo = () => {
    if (!tags || tags.length === 0) return { visibleTags: [], remainingCount: 0 };
    
    const maxTags = 2; // Always limit to 2 tags on both desktop and mobile
    const visibleTags = tags.slice(0, maxTags);
    const remainingCount = Math.max(0, tags.length - maxTags);
    
    return { visibleTags, remainingCount };
  };

  const { visibleTags, remainingCount } = getTagDisplayInfo();

  return (
    <Card className={cardClasses}>
      <CardHeader className="pb-3 space-y-3 p-4 flex-shrink-0">
        {/* Featured Badge - only show when showFeaturedStyling is true */}
        {shouldShowFeaturedStyling && (
          <div className="flex justify-start mb-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-green-cta text-primary-foreground">
              Featured Post
            </span>
          </div>
        )}
        
        {/* Publication Date */}
        <div className="flex items-center space-x-2 text-primary font-medium">
          <Calendar className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        
        {/* Title - Use consistent sizing for grid cards */}
        <h3 className={`font-semibold leading-tight hover:text-primary transition-colors cursor-pointer ${
          shouldShowFeaturedStyling ? "text-lg md:text-xl" : "text-lg"
        } line-clamp-2`}>
          <a href={`/post/${slug}`} className="block">
            {title}
          </a>
        </h3>

        {/* Read Time */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span>{readTime}</span>
        </div>
      </CardHeader>
      
      <CardContent className={`flex flex-col p-4 pt-0 ${shouldShowFeaturedStyling ? '' : 'flex-grow'}`}>
        {/* Tags Section */}
        {tags && tags.length > 0 && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {visibleTags.map((tag) => (
              <Tag key={tag} tag={tag} tagColors={tagColors} className="flex-shrink-0" />
            ))}
            
            {/* Remaining count indicator */}
            {remainingCount > 0 && (
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-muted-foreground/30 bg-muted/50 text-muted-foreground flex-shrink-0">
                +{remainingCount}
              </div>
            )}
          </div>
        )}
        
        {/* Excerpt */}
        <p className={`text-muted-foreground leading-relaxed text-sm mb-4 ${
          shouldShowFeaturedStyling ? '' : 'line-clamp-3 flex-grow'
        }`}>
          {excerpt}
        </p>
        
        {/* Read More Link */}
        <div className={`border-t border-border/50 pt-3 ${shouldShowFeaturedStyling ? '' : 'mt-auto flex-shrink-0'}`}>
          <a 
            href={`/post/${slug}`}
            className="text-primary hover:text-primary/80 font-medium text-sm transition-colors inline-flex items-center group"
          >
            Read more 
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
