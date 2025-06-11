
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { PostCard } from "@/components/PostCard";
import { PostGrid } from "@/components/PostGrid";
import { getFeaturedPost, getAllPosts } from "@/data/posts";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const allPosts = getAllPosts();

  return (
    <Layout>
      <div className="animate-fade-in">
        <Hero />
        
        {/* Featured Post Section - Much tighter mobile spacing */}
        {featuredPost && (
          <section className="pt-3 pb-4 md:pt-3 md:pb-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
                Featured Post
              </h2>
              <PostCard
                title={featuredPost.title}
                excerpt={featuredPost.excerpt}
                date={featuredPost.date}
                readTime={featuredPost.readTime}
                slug={featuredPost.slug}
                tags={featuredPost.tags}
                featured={true}
                showFeaturedStyling={true}
              />
            </div>
          </section>
        )}

        {/* All Posts Section - Remove top margin on mobile */}
        <div className="mt-0 md:mt-0">
          <PostGrid 
            posts={allPosts} 
            showSearch={false}
            title="Recent Posts"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
