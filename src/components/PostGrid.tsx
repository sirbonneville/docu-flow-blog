
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
          {/* Content Container with Constrained Gradient */}
          <div 
            className="relative"
            style={{
              // Constrain the gradient within the content area
              clipPath: 'inset(0 0 0 0)',
              contain: 'layout style'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post, index) => {
                // Hide posts beyond mobile threshold (3) on mobile only
                const hiddenOnMobile = shouldShowGlassEffect && index >= 3;
                
                // Apply fade effect only to the last visible cards that will be overlapped:
                // Desktop (lg): cards 4, 5 (indices 4, 5) - bottom row cards that get overlapped
                // Tablet (md): card 3 (index 3) - the card that gets overlapped  
                // Mobile: card 2 (index 2) - the last visible card that gets overlapped
                const isInFadeZone = shouldShowGlassEffect && (
                  (index >= 4 && index <= 5) || // Cards 5 & 6 on desktop (second row, right side)
                  (index === 3 && window.innerWidth >= 768 && window.innerWidth < 1024) || // Card 4 on tablet
                  (index === 2 && window.innerWidth < 768) // Card 3 on mobile
                );
                
                return (
                  <div 
                    key={post.id}
                    className={`
                      ${hiddenOnMobile ? 'hidden md:block' : ''}
                      ${isInFadeZone ? 'relative' : ''}
                    `}
                    style={isInFadeZone ? {
                      // Apply gradient fade directly to cards in the fade zone
                      maskImage: `linear-gradient(to bottom, 
                        rgba(0,0,0,1) 0%, 
                        rgba(0,0,0,0.9) 20%, 
                        rgba(0,0,0,0.7) 40%, 
                        rgba(0,0,0,0.4) 60%, 
                        rgba(0,0,0,0.2) 80%, 
                        rgba(0,0,0,0.1) 100%
                      )`,
                      WebkitMaskImage: `linear-gradient(to bottom, 
                        rgba(0,0,0,1) 0%, 
                        rgba(0,0,0,0.9) 20%, 
                        rgba(0,0,0,0.7) 40%, 
                        rgba(0,0,0,0.4) 60%, 
                        rgba(0,0,0,0.2) 80%, 
                        rgba(0,0,0,0.1) 100%
                      )`
                    } : {}}
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

            {/* Glassmorphism Panel - Positioned Above Faded Content */}
            {shouldShowGlassEffect && (
              <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-20">
                <div className="pointer-events-auto">
                  {/* Floating Glassmorphism Card */}
                  <div className="group relative overflow-hidden rounded-2xl 
                                border border-border/20 shadow-lg hover:shadow-xl
                                transition-all duration-500 ease-out
                                hover:-translate-y-1 hover:scale-[1.02]
                                p-6 max-w-sm mx-4 mb-8"
                       style={{
                         backgroundColor: 'hsl(var(--background) / 0.7)',
                         backdropFilter: 'blur(10px)',
                         WebkitBackdropFilter: 'blur(10px)',
                         backgroundImage: `linear-gradient(135deg, 
                           hsl(var(--background) / 0.8) 0%, 
                           hsl(var(--card) / 0.6) 50%, 
                           hsl(var(--background) / 0.9) 100%
                         )`
                       }}>
                    
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
                                 border-border/40 hover:border-border/60
                                 shadow-sm hover:shadow-md
                                 transition-all duration-300 ease-out
                                 hover:-translate-y-0.5"
                        style={{
                          backgroundColor: 'hsl(var(--background) / 0.8)',
                          backdropFilter: 'blur(5px)',
                          WebkitBackdropFilter: 'blur(5px)'
                        }}
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
            )}
          </div>
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
