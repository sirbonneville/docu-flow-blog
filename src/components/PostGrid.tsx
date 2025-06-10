
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
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore insights on technical writing, documentation strategy, and team leadership.
          </p>
        </div>

        {showSearch && (
          <div className="mb-8">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
              featured={post.featured}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && searchQuery && (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-lg">
              No posts found matching "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
