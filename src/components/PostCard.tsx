
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
  showFeaturedStyling?: boolean;
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
  showFeaturedStyling = false
}: PostCardProps) => {
  console.log('PostCard render:', { 
    title, 
    date, 
    tags, 
    tagColors, 
    featured, 
    showFeaturedStyling,
    tagsLength: tags?.length 
  });

  const shouldShowFeaturedStyling = featured && showFeaturedStyling;
  
  const cardClasses = shouldShowFeaturedStyling
    ? "hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:bg-gradient-card-hover"
    : "hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-gradient-card-hover h-full flex flex-col";

  const getTagDisplayInfo = () => {
    if (!tags || tags.length === 0) {
      console.log('No tags found for post:', title);
      return { visibleTags: [], remainingCount: 0 };
    }
    
    const maxTags = 2;
    const visibleTags = tags.slice(0, maxTags);
    const remainingCount = Math.max(0, tags.length - maxTags);
    
    console.log('Tag display info for', title, ':', { visibleTags, remainingCount, totalTags: tags.length });
    
    return { visibleTags, remainingCount };
  };

  const { visibleTags, remainingCount } = getTagDisplayInfo();

  return (
    <Card className={cardClasses}>
      {/* Header Section - Flexible structure for metadata */}
      <CardHeader className="p-4 pb-0 flex-shrink-0">
        {/* Featured Badge Zone - Only present when needed */}
        {shouldShowFeaturedStyling && (
          <div className="flex justify-start items-start mb-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-green-cta text-primary-foreground">
              Featured Post
            </span>
          </div>
        )}
        
        {/* Date Zone - Consistent structure */}
        <div className="flex items-center space-x-2 text-primary font-medium mb-3">
          <Calendar className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        
        {/* Title Zone - Flexible height based on content */}
        <div className="mb-2">
          <h3 className={`font-semibold leading-tight hover:text-primary transition-colors cursor-pointer ${
            shouldShowFeaturedStyling ? "text-lg md:text-xl" : "text-lg"
          } line-clamp-2`}>
            <a href={`/post/${slug}`} className="block">
              {title}
            </a>
          </h3>
        </div>

        {/* Read Time Zone - Consistent structure */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span>{readTime}</span>
        </div>
      </CardHeader>
      
      <CardContent className={`flex flex-col p-4 pt-0 ${shouldShowFeaturedStyling ? '' : 'flex-grow'}`}>
        {/* Tags Zone - Flexible height with proper spacing */}
        {tags && tags.length > 0 && (
          <div className="flex items-start gap-2 flex-wrap mb-3">
            {visibleTags.map((tag) => {
              console.log('Rendering tag:', tag, 'with colors:', tagColors);
              return (
                <Tag key={tag} tag={tag} tagColors={tagColors} className="flex-shrink-0 text-xs" />
              );
            })}
            
            {remainingCount > 0 && (
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-muted-foreground/30 bg-muted/50 text-muted-foreground flex-shrink-0">
                +{remainingCount}
              </div>
            )}
          </div>
        )}
        
        {/* Excerpt Zone - Flexible height with proper spacing */}
        <div className={`mb-4 ${shouldShowFeaturedStyling ? '' : 'flex-grow'}`}>
          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
            {excerpt}
          </p>
        </div>
        
        {/* Action Zone - Fixed position at bottom */}
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
