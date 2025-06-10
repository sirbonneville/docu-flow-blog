
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export const PostCard = ({ title, excerpt, date, readTime, slug, featured = false }: PostCardProps) => {
  const cardClasses = featured
    ? "hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:bg-gradient-card-hover"
    : "hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-gradient-card-hover";

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
        
        <h3 className={`font-semibold leading-tight hover:text-primary transition-colors cursor-pointer ${
          featured ? "text-xl md:text-2xl" : "text-lg"
        }`}>
          <a href={`/post/${slug}`} className="block">
            {title}
          </a>
        </h3>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {excerpt}
        </p>
        
        <div className="mt-4">
          <a 
            href={`/post/${slug}`}
            className="text-primary hover:text-accent font-medium text-sm transition-colors"
          >
            Read more →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
