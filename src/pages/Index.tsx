
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
        
        {/* Featured Post Section - Seamless flow with centered heading */}
        {featuredPost && (
          <section className="py-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
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
                showFeaturedStyling={true} // Enable featured styling only here
              />
            </div>
          </section>
        )}

        {/* All Posts Section with Liquid Glass Effect */}
        <PostGrid 
          posts={allPosts} 
          showSearch={false}
          title="Recent Posts"
        />
      </div>
    </Layout>
  );
};

export default Index;
