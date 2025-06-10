
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { PostCard } from "@/components/PostCard";
import { PostGrid } from "@/components/PostGrid";
import { getFeaturedPost, getRecentPosts, getAllPosts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(6);
  const allPosts = getAllPosts();
  const olderPosts = allPosts.slice(6); // Posts after the first 6
  const [showAllOlderPosts, setShowAllOlderPosts] = useState(false);

  // For mobile: show max 3 older posts, for desktop: show all
  const displayedOlderPosts = showAllOlderPosts 
    ? olderPosts 
    : olderPosts.slice(0, 3);

  return (
    <Layout>
      <div className="animate-fade-in">
        <Hero />
        
        {/* Featured Post Section */}
        {featuredPost && (
          <section className="py-4 border-t">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Featured Post
              </h2>
              <PostCard
                title={featuredPost.title}
                excerpt={featuredPost.excerpt}
                date={featuredPost.date}
                readTime={featuredPost.readTime}
                slug={featuredPost.slug}
                featured={true}
              />
            </div>
          </section>
        )}

        {/* Recent Posts Section */}
        <PostGrid 
          posts={recentPosts} 
          showSearch={false}
          title="Recent Posts"
        />

        {/* See Older Posts Section */}
        {olderPosts.length > 0 && (
          <section className="py-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold mb-3">See Older Posts</h2>
              </div>

              {/* Mobile: Show max 3, Desktop: Show all when expanded */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {displayedOlderPosts.map((post) => (
                  <div 
                    key={post.id}
                    className={`${!showAllOlderPosts && displayedOlderPosts.indexOf(post) >= 3 ? 'hidden md:block' : ''}`}
                  >
                    <PostCard
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      readTime={post.readTime}
                      slug={post.slug}
                      featured={post.featured}
                    />
                  </div>
                ))}
              </div>

              {/* Show More/View All Posts buttons */}
              <div className="text-center space-y-3">
                {/* Mobile: Show "Show More" if there are more than 3 older posts and not showing all */}
                {!showAllOlderPosts && olderPosts.length > 3 && (
                  <Button 
                    onClick={() => setShowAllOlderPosts(true)}
                    variant="outline"
                    className="md:hidden"
                  >
                    Show More Posts
                  </Button>
                )}
                
                {/* Desktop: Direct link to all posts */}
                <Button asChild variant="outline" className="hidden md:inline-flex">
                  <Link to="/posts">
                    View All Posts
                  </Link>
                </Button>

                {/* Mobile: View all posts link when showing more */}
                {showAllOlderPosts && (
                  <Button asChild variant="outline" className="md:hidden">
                    <Link to="/posts">
                      View All Posts
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Index;
