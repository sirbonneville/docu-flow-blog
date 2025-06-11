
import { PostCard } from './PostCard';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
  tagColors?: Record<string, string>;
  featured?: boolean;
}

interface RelatedPostsProps {
  currentPost: Post;
  allPosts: Post[];
  maxPosts?: number;
}

export const RelatedPosts = ({ currentPost, allPosts, maxPosts = 3 }: RelatedPostsProps) => {
  // Find related posts based on shared tags, excluding current post
  const getRelatedPosts = () => {
    const otherPosts = allPosts.filter(post => post.id !== currentPost.id);
    
    if (!currentPost.tags || currentPost.tags.length === 0) {
      // If no tags, return most recent posts
      return otherPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, maxPosts);
    }

    // Score posts based on shared tags
    const scoredPosts = otherPosts.map(post => {
      if (!post.tags) return { post, score: 0 };
      
      const sharedTags = post.tags.filter(tag => 
        currentPost.tags?.includes(tag)
      ).length;
      
      return { post, score: sharedTags };
    });

    // Sort by score (shared tags) first, then by date
    return scoredPosts
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
      })
      .slice(0, maxPosts)
      .map(item => item.post);
  };

  const relatedPosts = getRelatedPosts();

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
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
    </section>
  );
};
