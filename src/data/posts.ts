
// Re-export types and functions from the new markdown file parser
export type { MarkdownPost } from '@/utils/markdownFileParser';

// Also create a Post type alias for backward compatibility
export type { MarkdownPost as Post } from '@/utils/markdownFileParser';

export {
  parseMarkdownPosts,
  getMarkdownPostBySlug as getPostBySlug,
  getFeaturedMarkdownPost as getFeaturedPost,
  getRecentMarkdownPosts as getRecentPosts,
  getAllMarkdownPosts as getAllPosts
} from '@/utils/markdownFileParser';
