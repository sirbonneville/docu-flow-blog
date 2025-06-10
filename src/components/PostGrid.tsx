
import { useState } from "react";
import { PostCard } from "./PostCard";
import { SearchBar } from "./SearchBar";

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

  return (
    <section className="py-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
              tags={post.tags}
              featured={post.featured}
            />
          ))}
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
