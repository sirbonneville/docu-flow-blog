
import { useState } from "react";
import { PostCard } from "./PostCard";
import { SearchBar } from "./SearchBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  content?: string;
  tags?: string[];
  featured?: boolean;
}

interface PostGridProps {
  posts: Post[];
  showSearch?: boolean;
  title?: string;
}

export const PostGrid = ({ posts, showSearch = true, title = "Recent Posts" }: PostGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  // Determine if we should show the glass effect
  const shouldShowGlassEffect = filteredPosts.length > 6; // Desktop: 6+, Mobile: 3+ (handled via CSS)
  const visiblePosts = shouldShowGlassEffect ? filteredPosts.slice(0, 6) : filteredPosts;

  return (
    <section className="py-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Explore insights on technical writing, documentation strategy, and team leadership.
          </p>
        </div>

        {showSearch && (
          <div className="mb-6">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        )}

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post, index) => {
              // Hide posts beyond mobile threshold (3) on mobile only
              const hiddenOnMobile = shouldShowGlassEffect && index >= 3;
              
              return (
                <div 
                  key={post.id}
                  className={`${hiddenOnMobile ? 'hidden md:block' : ''}`}
                >
                  <PostCard
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    readTime={post.readTime}
                    slug={post.slug}
                    tags={post.tags}
                    featured={post.featured}
                  />
                </div>
              );
            })}
          </div>

          {/* Sophisticated Gradient Fade-out Effect */}
          {shouldShowGlassEffect && (
            <div className="absolute inset-x-0 bottom-0 h-64 md:h-72 pointer-events-none">
              {/* Multi-layer gradient fade for smooth transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              
              {/* Glassmorphism backdrop blur layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent backdrop-blur-[1px]" />
              
              {/* Subtle dot pattern overlay with enhanced opacity */}
              <div 
                className="absolute inset-0 opacity-30 bg-gradient-to-t from-muted/40 to-transparent" 
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0),
                    radial-gradient(circle at 3px 3px, currentColor 0.5px, transparent 0)
                  `,
                  backgroundSize: '20px 20px, 40px 40px',
                  backgroundPosition: '0 0, 10px 10px',
                  color: 'hsl(var(--muted-foreground))'
                }}
              />

              {/* Premium Glassmorphism "Discover More" Card - Layered on TOP */}
              <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-auto z-10">
                <div className="group">
                  {/* Glassmorphism card with hover animations */}
                  <div className="relative overflow-hidden rounded-2xl border border-border/30 
                                bg-background/10 dark:bg-card/15 
                                backdrop-blur-md shadow-lg hover:shadow-xl
                                transition-all duration-500 ease-out
                                hover:bg-background/20 dark:hover:bg-card/25
                                hover:-translate-y-1 hover:scale-[1.02]
                                p-8 max-w-sm">
                    
                    {/* Subtle shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent 
                                  translate-x-[-100%] group-hover:translate-x-[100%] 
                                  transition-transform duration-1000 ease-out" />
                    
                    {/* Content */}
                    <div className="relative space-y-4 text-center">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-muted-foreground 
                                     bg-clip-text text-transparent">
                          Discover More Stories
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Explore {filteredPosts.length - visiblePosts.length} additional posts in our complete collection
                        </p>
                      </div>
                      
                      {/* Enhanced button with glassmorphism */}
                      <Button 
                        asChild 
                        variant="outline" 
                        className="group/btn relative overflow-hidden
                                 bg-background/50 dark:bg-card/20 
                                 border-border/40 hover:border-border/60
                                 backdrop-blur-sm shadow-sm hover:shadow-md
                                 transition-all duration-300 ease-out
                                 hover:bg-background/70 dark:hover:bg-card/30
                                 hover:-translate-y-0.5"
                      >
                        <Link to="/posts" className="flex items-center gap-2">
                          <span className="font-medium">View All Posts</span>
                          <ArrowRight 
                            size={16} 
                            className="transition-transform duration-300 ease-out 
                                     group-hover/btn:translate-x-1" 
                          />
                          
                          {/* Button shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent 
                                        translate-x-[-100%] group-hover/btn:translate-x-[100%] 
                                        transition-transform duration-700 ease-out" />
                        </Link>
                      </Button>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <div className="absolute top-4 right-6 w-1 h-1 bg-primary rounded-full 
                                    animate-pulse" style={{ animationDelay: '0s' }} />
                      <div className="absolute bottom-6 left-8 w-0.5 h-0.5 bg-accent rounded-full 
                                    animate-pulse" style={{ animationDelay: '1s' }} />
                      <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-muted-foreground/30 rounded-full 
                                    animate-pulse" style={{ animationDelay: '2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {filteredPosts.length === 0 && searchQuery && (
          <div className="text-center py-6">
            <p className="text-muted-foreground text-base">
              No posts found matching "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
