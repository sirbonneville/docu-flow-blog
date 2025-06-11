
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
          <section style={{ paddingTop: '12px', paddingBottom: '32px' }} className="md:pb-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center" style={{ marginBottom: '42px' }}>
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

        {/* All Posts Section with Liquid Glass Effect - Mobile spacing adjustments */}
        <div className="mt-8 md:mt-0">
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
