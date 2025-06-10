
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
      <CardHeader className="pb-3">
        {featured && (
          <div className="mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-green-cta text-primary-foreground">
              Featured Post
            </span>
          </div>
        )}
        
        {/* Publication Date - More Prominent */}
        <div className="mb-3">
          <div className="flex items-center space-x-2 text-primary font-medium">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">
              {new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
        
        <h3 className={`font-semibold leading-tight hover:text-primary transition-colors cursor-pointer mb-3 ${
          featured ? "text-xl md:text-2xl" : "text-lg"
        }`}>
          <a href={`/post/${slug}`} className="block">
            {title}
          </a>
        </h3>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        )}
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex flex-col flex-grow">
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {excerpt}
        </p>
        
        <div className="mt-4 pt-2">
          <a 
            href={`/post/${slug}`}
            className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
          >
            Read more →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
