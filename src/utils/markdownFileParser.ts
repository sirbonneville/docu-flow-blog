
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

// Simple frontmatter parser that works in the browser
function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const [, frontmatterText, markdownContent] = match;
  const data: Record<string, any> = {};
  
  // Parse YAML-like frontmatter
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Handle arrays (tags)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => 
          item.trim().replace(/['"]/g, '')
        ).filter(item => item.length > 0);
      }
      
      // Handle booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      data[key] = value;
    }
  });
  
  return { data, content: markdownContent };
}

// Import all markdown files from the posts directory
const markdownFiles = import.meta.glob('/src/posts/*.md', { 
  as: 'raw',
  eager: true 
});

export function parseMarkdownPosts(): MarkdownPost[] {
  const posts: MarkdownPost[] = [];
  
  Object.entries(markdownFiles).forEach(([filepath, content]) => {
    // Extract filename from path for slug generation
    const filename = filepath.split('/').pop()?.replace('.md', '') || '';
    
    // Parse frontmatter and content using our custom parser
    const { data: frontmatter, content: markdownContent } = parseFrontmatter(content);
    
    // Generate slug from filename (remove date prefix if present)
    const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');
    
    const post: MarkdownPost = {
      id: slug,
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      content: markdownContent,
      date: frontmatter.date || new Date().toISOString(),
      readTime: frontmatter.readTime || '5 min read',
      slug: slug,
      tags: frontmatter.tags || [],
      tagColors: frontmatter.tagColors || {},
      featured: frontmatter.featured || false
    };
    
    posts.push(post);
  });
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getMarkdownPostBySlug(slug: string): MarkdownPost | undefined {
  const posts = parseMarkdownPosts();
  return posts.find(post => post.slug === slug);
}

export function getFeaturedMarkdownPost(): MarkdownPost | undefined {
  const posts = parseMarkdownPosts();
  // Return the first featured post, or the most recent if none are marked featured
  const featuredPost = posts.find(post => post.featured);
  return featuredPost || posts[0];
}

export function getRecentMarkdownPosts(limit: number = 6): MarkdownPost[] {
  const posts = parseMarkdownPosts();
  return posts.slice(0, limit);
}

export function getAllMarkdownPosts(): MarkdownPost[] {
  return parseMarkdownPosts();
}
