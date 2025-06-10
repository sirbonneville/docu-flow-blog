
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { PostCard } from "@/components/PostCard";
import { PostGrid } from "@/components/PostGrid";
import { getFeaturedPost, getRecentPosts } from "@/data/posts";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(6);

  return (
    <Layout>
      <div className="animate-fade-in">
        <Hero />
        
        {/* Featured Post Section */}
        {featuredPost && (
          <section className="py-16 border-t">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
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
          title="Latest Insights"
        />

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Level Up Your Documentation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore all posts for comprehensive insights on documentation strategy, 
              technical writing, and team management.
            </p>
            <a 
              href="/posts" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View All Posts
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
