
import { Layout } from "@/components/Layout";
import { PostGrid } from "@/components/PostGrid";
import { getAllPosts } from "@/data/posts";

const Posts = () => {
  const allPosts = getAllPosts();

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

        <PostGrid 
          posts={allPosts} 
          showSearch={true}
          title="Browse All Posts"
        />
      </div>
    </Layout>
  );
};

export default Posts;
