
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
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
      </div>
    </Layout>
  );
};

export default Index;
