
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
  featured?: boolean;
}

export const PostCard = ({ title, excerpt, date, readTime, slug, tags, featured = false }: PostCardProps) => {
  const cardClasses = featured
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
      <CardHeader className="pb-0 space-y-3 p-4 flex-shrink-0">
        {/* Featured Badge */}
        {featured && (
          <div className="flex justify-start">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-green-cta text-primary-foreground">
              Featured Post
            </span>
          </div>
        )}
        
        {/* Publication Date */}
        <div className="flex items-center space-x-2 text-primary font-medium">
          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="text-xs">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        
        {/* Title - Limited to 2-3 lines with ellipsis */}
        <h3 className={`font-semibold leading-tight hover:text-primary transition-colors cursor-pointer ${
          featured ? "text-lg md:text-xl" : "text-base"
        } line-clamp-2`}>
          <a href={`/post/${slug}`} className="block">
            {title}
          </a>
        </h3>

        {/* Read Time */}
        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3 flex-shrink-0" />
          <span>{readTime}</span>
        </div>
      </CardHeader>
      
      <CardContent className={`flex flex-col p-4 pt-3 ${featured ? '' : 'flex-grow'}`}>
        {/* Tags Section - Fixed spacing and layout */}
        <div 
          className={`${featured ? '' : 'flex-shrink-0'}`}
          style={{ marginTop: 'var(--tag-spacing)' }}
        >
          {tags && tags.length > 0 && (
            <div className="tag-container flex items-center gap-1.5 w-full mr-2 overflow-visible" style={{ flexWrap: 'nowrap', justifyContent: 'flex-start' }}>
              {/* Visible tags */}
              {visibleTags.map((tag) => (
                <Tag key={tag} tag={tag} className="flex-shrink-0 whitespace-nowrap" />
              ))}
              
              {/* Remaining count indicator - styled like regular tags */}
              {remainingCount > 0 && (
                <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border border-muted-foreground/30 bg-muted/50 text-muted-foreground flex-shrink-0 whitespace-nowrap min-w-fit">
                  +{remainingCount}
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Excerpt - Different handling for featured vs regular posts */}
        <p className={`text-muted-foreground leading-relaxed text-sm mb-4 ${
          featured ? '' : 'line-clamp-2 flex-grow'
        }`} style={{ marginTop: 'var(--tag-spacing)' }}>
          {excerpt}
        </p>
        
        {/* Read More Link */}
        <div className={`border-t border-border/50 ${featured ? 'pt-3' : 'pt-3 mt-auto flex-shrink-0'}`}>
          <a 
            href={`/post/${slug}`}
            className="text-primary hover:text-primary/80 font-medium text-xs transition-colors inline-flex items-center group"
          >
            Read more 
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
