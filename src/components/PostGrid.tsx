
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
                
                // Apply fade effect to the bottom row cards that get overlapped:
                // Desktop (lg): cards 4, 5, 6 (indices 3, 4, 5) - entire bottom row
                // Tablet (md): card 4 (index 3) - the card that gets overlapped  
                // Mobile: card 3 (index 2) - the last visible card that gets overlapped
                const isInFadeZone = shouldShowGlassEffect && (
                  (index >= 3 && index <= 5) || // Cards 4, 5 & 6 on desktop (entire bottom row)
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

            {/* Enhanced Glassmorphism Panel - Positioned Above Faded Content */}
            {shouldShowGlassEffect && (
              <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-20">
                <div className="pointer-events-auto">
                  {/* Enhanced Floating Glassmorphism Card */}
                  <div className="group relative overflow-hidden rounded-2xl 
                                border-2 shadow-2xl hover:shadow-3xl
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:scale-[1.03]
                                p-8 max-w-sm mx-4 mb-8
                                backdrop-blur-xl border-border/30 hover:border-border/50"
                       style={{
                         // Neutral glassmorphism with subtle colors
                         background: `linear-gradient(135deg, 
                           hsl(var(--card) / 0.8) 0%, 
                           hsl(var(--background) / 0.7) 25%,
                           hsl(var(--muted) / 0.6) 50%, 
                           hsl(var(--card) / 0.8) 75%,
                           hsl(var(--background) / 0.9) 100%
                         )`,
                         backdropFilter: 'blur(16px) saturate(1.2)',
                         WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
                         boxShadow: `
                           0 8px 32px hsl(var(--foreground) / 0.1),
                           0 4px 16px hsl(var(--foreground) / 0.05),
                           inset 0 1px 0 hsl(var(--background) / 0.3)
                         `
                       }}>
                    
                    {/* Enhanced shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r 
                                  from-transparent via-foreground/5 to-transparent 
                                  translate-x-[-100%] group-hover:translate-x-[100%] 
                                  transition-transform duration-1000 ease-out" />
                    
                    {/* Subtle animated border glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-60 
                                  transition-opacity duration-500"
                         style={{
                           background: `linear-gradient(45deg, 
                             hsl(var(--border) / 0.2), 
                             hsl(var(--muted) / 0.3), 
                             hsl(var(--border) / 0.2)
                           )`,
                           filter: 'blur(1px)',
                           zIndex: -1
                         }} />
                    
                    {/* Content */}
                    <div className="relative space-y-5 text-center">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground 
                                     bg-clip-text text-transparent leading-tight">
                          Discover More Stories
                        </h3>
                        <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                          Explore {filteredPosts.length - visiblePosts.length} additional posts in our complete collection
                        </p>
                      </div>
                      
                      {/* Enhanced button with complementary glassmorphism */}
                      <Button 
                        asChild 
                        variant="outline" 
                        className="group/btn relative overflow-hidden font-semibold
                                 border-2 border-border/60 hover:border-border/80
                                 shadow-lg hover:shadow-xl
                                 transition-all duration-300 ease-out
                                 hover:-translate-y-0.5 text-foreground hover:text-foreground"
                        style={{
                          background: `linear-gradient(135deg, 
                            hsl(var(--background) / 0.9) 0%, 
                            hsl(var(--card) / 0.8) 50%,
                            hsl(var(--background) / 0.9) 100%
                          )`,
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)'
                        }}
                      >
                        <Link to="/posts" className="flex items-center gap-2">
                          <span className="font-semibold">View All Posts</span>
                          <ArrowRight 
                            size={16} 
                            className="transition-transform duration-300 ease-out 
                                     group-hover/btn:translate-x-1" 
                          />
                          
                          {/* Enhanced button shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent 
                                        translate-x-[-100%] group-hover/btn:translate-x-[100%] 
                                        transition-transform duration-700 ease-out" />
                        </Link>
                      </Button>
                    </div>

                    {/* Enhanced floating particles effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <div className="absolute top-4 right-6 w-1.5 h-1.5 bg-foreground/40 rounded-full 
                                    animate-pulse" style={{ animationDelay: '0s' }} />
                      <div className="absolute bottom-6 left-8 w-1 h-1 bg-muted-foreground/50 rounded-full 
                                    animate-pulse" style={{ animationDelay: '1s' }} />
                      <div className="absolute top-8 left-12 w-2 h-2 bg-foreground/30 rounded-full 
                                    animate-pulse" style={{ animationDelay: '2s' }} />
                      <div className="absolute bottom-12 right-10 w-0.5 h-0.5 bg-foreground/20 rounded-full 
                                    animate-pulse" style={{ animationDelay: '1.5s' }} />
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
