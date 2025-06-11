import { Post } from '@/data/posts';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface MarkdownPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
  tagColors?: Record<string, string>;
  featured?: boolean;
}

// Import all markdown files from the posts directory
const markdownFiles = import.meta.glob('/src/posts/*.md', { 
  eager: true,
  as: 'raw'
});

function filenameToSlug(filename: string): string {
  // Extract just the filename from the full path
  const baseName = filename.split('/').pop() || '';
  // Remove .md extension and date prefix
  return baseName.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

function filenameToId(filename: string): string {
  // Extract just the filename from the full path
  const baseName = filename.split('/').pop() || '';
  // Use the filename without extension as ID
  return baseName.replace(/\.md$/, '');
}

export function parseMarkdownPosts(): MarkdownPost[] {
  const posts: MarkdownPost[] = [];

  // Process each markdown file
  for (const [filepath, content] of Object.entries(markdownFiles)) {
    if (typeof content !== 'string') continue;

    // Parse frontmatter and content
    const { data: frontmatter, content: markdownContent } = matter(content);

    // Convert markdown to HTML
    const htmlContent = marked(markdownContent);

    // Create post object
    const post: MarkdownPost = {
      id: filenameToId(filepath),
      slug: filenameToSlug(filepath),
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      content: htmlContent,
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      readTime: frontmatter.readTime || '5 min read',
      tags: frontmatter.tags || [],
      tagColors: frontmatter.tagColors || undefined,
      featured: false
    };

    posts.push(post);
  }

  // Sort by date to find the most recent post
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Mark the most recent post as featured
  if (sortedPosts.length > 0) {
    sortedPosts[0].featured = true;
  }

  return sortedPosts;
}

export function getMarkdownPostBySlug(slug: string): MarkdownPost | undefined {
  const posts = parseMarkdownPosts();
  return posts.find(post => post.slug === slug);
}

export function getFeaturedMarkdownPost(): MarkdownPost | undefined {
  const posts = parseMarkdownPosts();
  return posts.find(post => post.featured);
}

export function getRecentMarkdownPosts(limit: number = 6): MarkdownPost[] {
  const posts = parseMarkdownPosts();
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getAllMarkdownPosts(): MarkdownPost[] {
  const posts = parseMarkdownPosts();
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}