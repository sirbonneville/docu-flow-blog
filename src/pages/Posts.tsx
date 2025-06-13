
import { Layout } from "@/components/Layout";
import { PostGrid } from "@/components/PostGrid";
import { PostCard } from "@/components/PostCard";
import { SearchBar } from "@/components/SearchBar";
import { getAllPosts } from "@/data/posts";
import { useState } from "react";

const Posts = () => {
  const allPosts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search query
  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  // Group posts by month/year
  const groupedPosts = filteredPosts.reduce((groups, post) => {
    const date = new Date(post.date);
    const monthYear = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
    
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(post);
    return groups;
  }, {} as Record<string, typeof filteredPosts>);

  // Sort months chronologically (newest first)
  const sortedMonths = Object.keys(groupedPosts).sort((a, b) => {
    const dateA = new Date(a + " 1");
    const dateB = new Date(b + " 1");
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <Layout>
      <div className="py-8 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            All Posts
          </h1>
          <p className="text-xl text-muted-foreground">
            Deep dives into documentation strategy, technical writing, and team leadership.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={setSearchQuery} />
          </div>

          {/* Posts organized by month */}
          {sortedMonths.length > 0 ? (
            <div className="space-y-12">
              {sortedMonths.map((monthYear) => (
                <div key={monthYear} className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                    {monthYear}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupedPosts[monthYear].map((post) => (
                      <PostCard
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        readTime={post.readTime}
                        slug={post.slug}
                        tags={post.tags}
                        tagColors={post.tagColors}
                        featured={post.featured}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {searchQuery 
                  ? `No posts found matching "${searchQuery}". Try a different search term.`
                  : "No posts available."
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
