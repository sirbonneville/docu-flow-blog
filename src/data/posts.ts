
// Re-export types and functions from the markdown parser
export type { MarkdownPost } from '@/utils/markdownParser';

// Also create a Post type alias for backward compatibility
export type { MarkdownPost as Post } from '@/utils/markdownParser';

export {
  parseMarkdownPosts,
  getMarkdownPostBySlug as getPostBySlug,
  getFeaturedMarkdownPost as getFeaturedPost,
  getRecentMarkdownPosts as getRecentPosts,
  getAllMarkdownPosts as getAllPosts
} from '@/utils/markdownParser';
