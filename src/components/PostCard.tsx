
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
    ? "hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:bg-gradient-card-hover h-full flex flex-col"
    : "hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-gradient-card-hover h-full flex flex-col";

  return (
    <Card className={cardClasses}>
      <CardHeader className="pb-4 space-y-4">
        {/* Featured Badge */}
        {featured && (
          <div className="flex justify-start">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-green-cta text-primary-foreground">
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
        
        {/* Title */}
        <h3 className={`font-semibold leading-tight hover:text-primary transition-colors cursor-pointer ${
          featured ? "text-xl md:text-2xl" : "text-lg"
        }`}>
          <a href={`/post/${slug}`} className="block">
            {title}
          </a>
        </h3>

        {/* Tags Section */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        )}
        
        {/* Read Time */}
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Clock className="h-3 w-3 flex-shrink-0" />
          <span>{readTime}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex flex-col flex-grow pt-0">
        {/* Excerpt */}
        <p className="text-muted-foreground leading-relaxed flex-grow mb-4">
          {excerpt}
        </p>
        
        {/* Read More Link */}
        <div className="pt-2 border-t border-border/50">
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
