
import { useState } from "react";
import { PostCard } from "./PostCard";
import { SearchBar } from "./SearchBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  // Determine if we should show the liquid glass effect
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

          {/* Liquid Glass Effect Overlay */}
          {shouldShowGlassEffect && (
            <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 pointer-events-none">
              {/* Gradient fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              
              {/* Glass morphism effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent backdrop-blur-[2px]" />
              
              {/* Subtle grid pattern overlay that matches the background */}
              <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-muted/30 to-transparent" 
                style={{
                  backgroundImage: 'url("/graph-paper.svg")',
                  backgroundSize: '60px 60px',
                  backgroundPosition: '0 0',
                  backgroundRepeat: 'repeat'
                }}
              />
            </div>
          )}
        </div>

        {/* View More Section */}
        {shouldShowGlassEffect && (
          <div className="relative z-10 mt-8 text-center">
            <div className="inline-flex flex-col items-center space-y-4 px-8 py-6 rounded-2xl border border-border/50 bg-background/80 backdrop-blur-md shadow-lg">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  View More Posts
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Discover {filteredPosts.length - visiblePosts.length} more posts in our complete collection
                </p>
              </div>
              
              <Button asChild variant="outline" className="bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80">
                <Link to="/posts">
                  Explore All Posts
                </Link>
              </Button>
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
