
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
            <div className="absolute inset-x-0 bottom-0 h-64 md:h-80 pointer-events-none">
              {/* Natural dissolving gradient mask - spans 200px */}
              <div 
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  background: `linear-gradient(to bottom, 
                    transparent 0%, 
                    var(--fade-mask-20) 15%,
                    var(--fade-mask-40) 30%, 
                    var(--fade-mask-60) 45%, 
                    var(--fade-mask-80) 65%, 
                    var(--fade-mask-90) 80%, 
                    var(--fade-mask-100) 100%
                  )`
                }}
              />
              
              {/* Subtle depth enhancement with scale transform */}
              <div 
                className="absolute inset-0 transform-gpu scale-[0.98] origin-bottom transition-transform duration-1000 ease-out"
                style={{
                  background: `linear-gradient(to bottom, 
                    transparent 0%, 
                    var(--fade-depth-20) 25%, 
                    var(--fade-depth-50) 50%, 
                    var(--fade-depth-80) 75%, 
                    var(--fade-depth-100) 100%
                  )`
                }}
              />

              {/* Organic texture overlay for premium feel */}
              <div 
                className="absolute inset-0 opacity-[0.02] transition-opacity duration-500" 
                style={{
                  background: `linear-gradient(to bottom, 
                    transparent 0%, 
                    var(--fade-texture) 70%, 
                    var(--fade-texture) 100%
                  )`,
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, currentColor 1px, transparent 0),
                    radial-gradient(circle at 75% 75%, currentColor 0.5px, transparent 0)
                  `,
                  backgroundSize: '32px 32px, 16px 16px',
                  backgroundPosition: '0 0, 8px 8px',
                  color: 'hsl(var(--muted-foreground))'
                }}
              />

              {/* Premium Glassmorphism "Discover More" Card - Layered on TOP */}
              <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-auto z-20">
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
