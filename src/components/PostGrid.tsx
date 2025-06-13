import { useState, useEffect } from "react";
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
  tagColors?: Record<string, string>;
  featured?: boolean;
}

interface PostGridProps {
  posts: Post[];
  showSearch?: boolean;
  title?: string;
  showDiscoverMore?: boolean; // New prop to control the "Discover More Stories" button
}

export const PostGrid = ({ 
  posts, 
  showSearch = true, 
  title = "Recent Posts",
  showDiscoverMore = true // Default to true for backward compatibility
}: PostGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  // Track screen size changes for proper fade effect
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);
  
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  // Determine how many posts to show and which need fade effect based on screen size
  const getDisplayConfig = () => {
    const totalPosts = filteredPosts.length;
    
    switch (screenSize) {
      case 'mobile':
        return {
          visibleCount: totalPosts > 3 ? 3 : totalPosts,
          showGlassEffect: totalPosts > 3,
          fadeIndices: totalPosts > 3 ? [2] : [] // Only the 3rd card (index 2)
        };
      case 'tablet':
        return {
          visibleCount: totalPosts > 4 ? 4 : totalPosts,
          showGlassEffect: totalPosts > 4,
          fadeIndices: totalPosts > 4 ? [2, 3] : [] // Both 3rd and 4th cards (indices 2, 3) - bottom row in 2-column grid
        };
      case 'desktop':
      default:
        return {
          visibleCount: totalPosts > 6 ? 6 : totalPosts,
          showGlassEffect: totalPosts > 6,
          fadeIndices: totalPosts > 6 ? [3, 4, 5] : [] // Bottom row cards (indices 3, 4, 5)
        };
    }
  };

  const { visibleCount, showGlassEffect, fadeIndices } = getDisplayConfig();
  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <section className="py-2 pb-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Tighter mobile spacing for heading */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-3">{title}</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-4 md:mb-0">
            Explore insights on technical writing, documentation strategy, and team leadership.
          </p>
        </div>

        {showSearch && (
          <div className="mb-6">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        )}

        {/* Cards Container with improved grid consistency */}
        <div className="relative">
          <div 
            className="relative"
            style={{
              clipPath: 'inset(0 0 0 0)',
              contain: 'layout style'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post, index) => {
                // Determine if this card should be hidden on mobile
                const hiddenOnMobile = screenSize === 'mobile' && index >= 3;
                
                // Apply fade effect only to cards that need it
                const shouldFade = fadeIndices.includes(index);
                
                return (
                  <div 
                    key={post.id}
                    className={`
                      ${hiddenOnMobile ? 'hidden md:block' : ''}
                      ${shouldFade ? 'relative' : ''}
                    `}
                    style={shouldFade ? {
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
                      tagColors={post.tagColors}
                      featured={post.featured}
                      // Don't pass showFeaturedStyling - all grid cards use standard styling
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Discover More Stories Section - only show if showDiscoverMore is true */}
        {showGlassEffect && showDiscoverMore && (
          <div className="flex justify-center mt-8">
            <div className="group relative overflow-hidden rounded-2xl 
                          border-2 shadow-2xl hover:shadow-3xl
                          transition-all duration-500 ease-out
                          hover:-translate-y-2 hover:scale-[1.03]
                          p-8 max-w-sm mx-4
                          backdrop-blur-xl border-border/30 hover:border-border/50"
                 style={{
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
        )}

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
