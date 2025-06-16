
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { PostCard } from "@/components/PostCard";
import { PostGrid } from "@/components/PostGrid";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getFeaturedPost, getAllPosts } from "@/data/posts";

const Index = () => {
  const featuredPost = getFeaturedPost();
  const allPosts = getAllPosts();
  
  // Scroll animation for recent posts section
  const { ref: recentPostsRef, isVisible: recentPostsVisible } = useScrollAnimation({
    threshold: 0.2
  });

  return (
    <Layout>
      <div>
        <Hero />
        
        {/* Featured Post Section - Reduced top padding for better spacing */}
        {featuredPost && (
          <section className="pt-1 pb-4 md:pt-2 md:pb-8">
            <div className="max-w-4xl mx-auto">
              {/* Featured post title with fade-in - delayed more */}
              <h2 
                className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 opacity-0 animate-fade-in"
                style={{
                  animationDelay: '2.4s',
                  animationFillMode: 'forwards'
                }}
              >
                Featured Post
              </h2>
              
              {/* Featured post card with scale-in animation - delayed even more */}
              <div 
                className="opacity-0 animate-scale-in"
                style={{
                  animationDelay: '2.8s',
                  animationFillMode: 'forwards'
                }}
              >
                <PostCard
                  title={featuredPost.title}
                  excerpt={featuredPost.excerpt}
                  date={featuredPost.date}
                  readTime={featuredPost.readTime}
                  slug={featuredPost.slug}
                  tags={featuredPost.tags}
                  tagColors={featuredPost.tagColors}
                  featured={true}
                  showFeaturedStyling={true}
                />
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts Section - Scroll-triggered animation */}
        <div 
          ref={recentPostsRef}
          className={`mt-0 md:mt-0 transition-all duration-1000 ${
            recentPostsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <PostGrid 
            posts={allPosts} 
            showSearch={false}
            title="Recent Posts"
            animateCards={recentPostsVisible}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
