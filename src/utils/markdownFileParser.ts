
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

// Improved frontmatter parser that works in the browser
function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  // Handle different possible formats and line endings
  // First, normalize line endings to \n
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  // Look for frontmatter with more flexible matching
  const frontmatterMatch = normalizedContent.match(/^(\s*?)---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  
  if (!frontmatterMatch) {
    console.log('No frontmatter found, returning original content');
    return { data: {}, content };
  }
  
  const [, leadingSpace, frontmatterText, markdownContent] = frontmatterMatch;
  console.log('Found frontmatter with leading space:', JSON.stringify(leadingSpace));
  console.log('Frontmatter text:', frontmatterText);
  
  const data: Record<string, any> = {};
  
  // Parse YAML-like frontmatter line by line
  const lines = frontmatterText.split(/\r?\n/);
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }
    
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex === -1) {
      continue;
    }
    
    const key = trimmedLine.substring(0, colonIndex).trim();
    let value: any = trimmedLine.substring(colonIndex + 1).trim();
    
    // Skip if no key or value
    if (!key || !value) {
      continue;
    }
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Handle arrays (tags) - look for bracket notation
    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      if (arrayContent.trim()) {
        value = arrayContent
          .split(',')
          .map((item: string) => item.trim().replace(/['"]/g, ''))
          .filter((item: string) => item.length > 0);
      } else {
        value = [];
      }
    }
    
    // Handle booleans
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    
    // Handle numbers
    if (!isNaN(Number(value)) && value !== '') {
      const numValue = Number(value);
      if (Number.isInteger(numValue)) {
        value = numValue;
      }
    }
    
    data[key] = value;
    console.log(`Parsed: ${key} = `, value);
  }
  
  console.log('Final parsed data:', data);
  return { data, content: markdownContent };
}

// Import all markdown files from the posts directory
const markdownFiles = import.meta.glob('/src/posts/*.md', { 
  as: 'raw',
  eager: true 
});

export function parseMarkdownPosts(): MarkdownPost[] {
  const posts: MarkdownPost[] = [];
  
  console.log('Available markdown files:', Object.keys(markdownFiles));
  
  Object.entries(markdownFiles).forEach(([filepath, content]) => {
    console.log(`Processing file: ${filepath}`);
    
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
      content: markdownContent.trim(), // Ensure no leading/trailing whitespace
      date: frontmatter.date || new Date().toISOString(),
      readTime: frontmatter.readTime || '5 min read',
      slug: slug,
      tags: frontmatter.tags || [],
      tagColors: frontmatter.tagColors || {},
      featured: frontmatter.featured || false
    };
    
    console.log(`Created post: ${post.title}`, post);
    posts.push(post);
  });
  
  // Sort by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  console.log('Final sorted posts:', sortedPosts);
  
  return sortedPosts;
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
