
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

  // Determine how many tags to show based on screen size and post type
  const getTagDisplayConfig = () => {
    if (featured) {
      // Featured posts can show 3 tags on all screen sizes
      return {
        maxTags: 3,
        remainingCount: tags && tags.length > 3 ? tags.length - 3 : 0
      };
    } else {
      // Regular posts: 2 tags on mobile/tablet, 3 on desktop
      // We'll use CSS classes to handle this responsively
      return {
        maxTagsMobile: 2,
        maxTagsDesktop: 3,
        remainingCountMobile: tags && tags.length > 2 ? tags.length - 2 : 0,
        remainingCountDesktop: tags && tags.length > 3 ? tags.length - 3 : 0
      };
    }
  };

  const tagConfig = getTagDisplayConfig();

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
        {/* Tags Section - Responsive tag display */}
        <div className={`${featured ? 'mb-3' : 'h-8 mb-3 flex-shrink-0'}`}>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 overflow-hidden">
              {featured ? (
                // Featured posts: show 3 tags on all screen sizes
                <>
                  {tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} tag={tag} />
                  ))}
                  {tagConfig.remainingCount > 0 && (
                    <span className="text-xs text-muted-foreground self-center">+{tagConfig.remainingCount}</span>
                  )}
                </>
              ) : (
                // Regular posts: responsive tag display
                <>
                  {/* Mobile and tablet: show only 2 tags */}
                  <div className="flex flex-wrap gap-1.5 lg:hidden">
                    {tags.slice(0, 2).map((tag) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                    {tagConfig.remainingCountMobile > 0 && (
                      <span className="text-xs text-muted-foreground self-center">+{tagConfig.remainingCountMobile}</span>
                    )}
                  </div>
                  
                  {/* Desktop: show 3 tags */}
                  <div className="hidden lg:flex flex-wrap gap-1.5">
                    {tags.slice(0, 3).map((tag) => (
                      <Tag key={tag} tag={tag} />
                    ))}
                    {tagConfig.remainingCountDesktop > 0 && (
                      <span className="text-xs text-muted-foreground self-center">+{tagConfig.remainingCountDesktop}</span>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        
        {/* Excerpt - Different handling for featured vs regular posts */}
        <p className={`text-muted-foreground leading-relaxed text-sm mb-4 ${
          featured ? '' : 'line-clamp-2 flex-grow'
        }`}>
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
