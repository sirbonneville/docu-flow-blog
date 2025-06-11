
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

// Simple static data for now - we can make this dynamic later if needed
const staticPosts: MarkdownPost[] = [
  {
    id: "api-documentation-best-practices",
    title: "API Documentation Best Practices",
    excerpt: "Learn how to create comprehensive and user-friendly API documentation that developers actually want to use.",
    content: `# API Documentation Best Practices

Creating effective API documentation is crucial for developer adoption and success. Here are the key principles to follow:

## 1. Start with Clear Overview

Your API documentation should begin with a clear overview that explains:
- What your API does
- Who it's for
- Key benefits and use cases

## 2. Provide Interactive Examples

Interactive examples help developers understand your API quickly:
- Include code samples in multiple languages
- Provide a sandbox or testing environment
- Show real request/response examples

## 3. Structure Your Documentation

Organize your documentation logically:
- Getting started guide
- Authentication details
- Endpoint reference
- Error handling
- SDKs and libraries

## 4. Keep It Updated

Outdated documentation is worse than no documentation:
- Version your API and docs together
- Automate documentation generation where possible
- Regular review and update cycles

## Conclusion

Great API documentation is an investment in developer experience that pays dividends in adoption and support reduction.`,
    date: "2024-01-05",
    readTime: "8 min read",
    slug: "api-documentation-best-practices",
    tags: ["API", "Documentation", "Best Practices"],
    tagColors: {
      "API": "#3B82F6",
      "Documentation": "#10B981",
      "Best Practices": "#8B5CF6"
    },
    featured: true
  },
  {
    id: "docs-as-code-guide",
    title: "Docs-as-Code: A Complete Guide",
    excerpt: "Discover how to treat documentation like code, with version control, automated testing, and collaborative workflows.",
    content: `# Docs-as-Code: A Complete Guide

Docs-as-code is a methodology that applies software development practices to documentation creation and maintenance.

## What is Docs-as-Code?

Docs-as-code means:
- Writing documentation in plain text formats (Markdown, AsciiDoc)
- Storing docs in version control alongside code
- Using the same tools and workflows as development
- Automating documentation publishing and testing

## Benefits

### Version Control
- Track changes over time
- Collaborate using pull requests
- Branch and merge documentation

### Automation
- Automated publishing pipelines
- Link checking and validation
- Integration with CI/CD workflows

### Developer-Friendly
- Familiar tools and workflows
- Easy to contribute and maintain
- Reduced context switching

## Implementation Strategy

1. **Choose Your Format**: Markdown is the most popular choice
2. **Set Up Your Repository**: Store docs with or near your code
3. **Establish Workflows**: Define how changes are reviewed and published
4. **Automate Everything**: Build, test, and deploy automatically

## Tools and Technologies

- **Static Site Generators**: GitBook, Docusaurus, VitePress
- **Version Control**: Git, GitHub, GitLab
- **CI/CD**: GitHub Actions, GitLab CI, Jenkins
- **Hosting**: Netlify, Vercel, GitHub Pages

Docs-as-code transforms documentation from a chore into an integral part of your development workflow.`,
    date: "2024-01-10",
    readTime: "12 min read",
    slug: "docs-as-code-guide",
    tags: ["Docs-as-Code", "Automation", "Workflow"],
    tagColors: {
      "Docs-as-Code": "#F59E0B",
      "Automation": "#EF4444",
      "Workflow": "#06B6D4"
    }
  },
  {
    id: "building-documentation-culture",
    title: "Building a Documentation Culture",
    excerpt: "Transform your team's relationship with documentation from obligation to opportunity through cultural change.",
    content: `# Building a Documentation Culture

Creating a strong documentation culture requires intentional effort and leadership commitment.

## Why Documentation Culture Matters

A strong documentation culture:
- Reduces onboarding time for new team members
- Decreases support burden on senior developers
- Improves knowledge sharing and collaboration
- Creates institutional memory that survives team changes

## Key Elements of Documentation Culture

### Leadership Buy-in
- Leaders must model good documentation practices
- Allocate time and resources for documentation work
- Recognize and reward good documentation

### Make It Easy
- Provide templates and examples
- Integrate documentation into existing workflows
- Use familiar tools and formats

### Start Small
- Begin with the most critical documentation
- Focus on high-impact, low-effort wins
- Build momentum gradually

## Practical Steps

1. **Audit Current State**: Identify what exists and what's missing
2. **Set Standards**: Establish guidelines for style and structure
3. **Create Templates**: Provide starting points for common document types
4. **Integrate with Process**: Make documentation part of definition-of-done
5. **Measure and Improve**: Track usage and gather feedback

## Common Challenges

- **Time Constraints**: Address by showing ROI and efficiency gains
- **Technical Barriers**: Simplify tools and processes
- **Resistance to Change**: Start with willing adopters and show success

Building documentation culture is a journey, not a destination. Focus on progress, not perfection.`,
    date: "2024-01-15",
    readTime: "10 min read",
    slug: "building-documentation-culture",
    tags: ["Culture", "Team Building", "Leadership"],
    tagColors: {
      "Culture": "#8B5CF6",
      "Team Building": "#10B981",
      "Leadership": "#F59E0B"
    }
  },
  {
    id: "technical-writing-metrics",
    title: "Measuring Documentation Success: Key Metrics",
    excerpt: "Learn which metrics actually matter for evaluating the effectiveness of your technical documentation.",
    content: `# Measuring Documentation Success: Key Metrics

You can't improve what you don't measure. Here's how to track documentation effectiveness.

## Why Measure Documentation?

Measuring documentation helps you:
- Identify areas for improvement
- Demonstrate value to stakeholders
- Make data-driven decisions about content
- Track progress over time

## Key Metrics to Track

### Usage Metrics
- **Page Views**: Which content is most accessed
- **Time on Page**: How long users engage with content
- **Bounce Rate**: How often users leave immediately
- **Search Queries**: What users are looking for

### Quality Metrics
- **User Satisfaction**: Surveys and feedback scores
- **Task Completion Rate**: Can users accomplish their goals
- **Support Ticket Reduction**: Fewer questions = better docs
- **Content Freshness**: How up-to-date is your content

### Contribution Metrics
- **Edit Frequency**: How often content is updated
- **Contributor Count**: How many people contribute
- **Review Time**: How quickly changes are processed
- **Issue Resolution**: How fast problems are fixed

## Tools for Measurement

### Analytics
- Google Analytics for web-based documentation
- Hotjar or similar for user behavior tracking
- Custom dashboards for internal metrics

### Feedback Collection
- Embedded feedback forms
- Regular user surveys
- Support ticket analysis
- Community feedback channels

## Setting Up Your Measurement System

1. **Define Goals**: What does success look like?
2. **Choose Metrics**: Select 3-5 key indicators
3. **Set Baselines**: Measure current performance
4. **Create Dashboards**: Make data visible and actionable
5. **Regular Review**: Schedule monthly or quarterly reviews

Remember: Perfect measurement isn't the goal. Useful insights that drive improvement are what matter.`,
    date: "2024-01-20",
    readTime: "9 min read",
    slug: "technical-writing-metrics",
    tags: ["Metrics", "Analytics", "Improvement"],
    tagColors: {
      "Metrics": "#EF4444",
      "Analytics": "#3B82F6",
      "Improvement": "#10B981"
    }
  },
  {
    id: "documentation-automation",
    title: "Automating Documentation Workflows",
    excerpt: "Streamline your documentation process with automation tools and techniques that save time and improve consistency.",
    content: `# Automating Documentation Workflows

Automation can transform documentation from a manual chore into a streamlined, efficient process.

## Benefits of Documentation Automation

### Consistency
- Standardized formatting and structure
- Consistent style and tone
- Reduced human error

### Efficiency
- Faster publishing cycles
- Reduced manual work
- More time for high-value content creation

### Quality
- Automated testing and validation
- Link checking and spell checking
- Up-to-date content through auto-generation

## Areas for Automation

### Content Generation
- **API Documentation**: Auto-generate from code annotations
- **Code Examples**: Extract from working test cases
- **Screenshots**: Automated browser testing tools
- **Changelogs**: Generate from commit messages or PR titles

### Quality Assurance
- **Link Checking**: Validate all external and internal links
- **Spell Check**: Automated proofreading
- **Style Guide Enforcement**: Consistent terminology and formatting
- **Accessibility Testing**: Ensure docs are accessible

### Publishing and Distribution
- **Static Site Generation**: Automatic builds from source
- **Multi-format Output**: PDF, HTML, mobile formats
- **Content Syndication**: Push to multiple platforms
- **Search Index Updates**: Keep search current

## Implementation Strategy

### Start Simple
1. **Choose One Process**: Pick the highest-impact automation opportunity
2. **Prove Value**: Demonstrate ROI before expanding
3. **Iterate**: Gradually add more sophisticated automation

### Build Your Toolkit
- **CI/CD Integration**: GitHub Actions, GitLab CI, Jenkins
- **Static Site Generators**: Docusaurus, VitePress, GitBook
- **Testing Tools**: Percy for visual testing, Pa11y for accessibility
- **Quality Tools**: Vale for style, textlint for consistency

### Best Practices
- Keep automation visible and understandable
- Maintain manual override capabilities
- Regular review and maintenance of automated systems
- Documentation for your documentation automation

Automation should enhance human creativity, not replace human judgment.`,
    date: "2024-01-25",
    readTime: "11 min read",
    slug: "documentation-automation",
    tags: ["Automation", "Workflow", "Efficiency"],
    tagColors: {
      "Automation": "#EF4444",
      "Workflow": "#06B6D4",
      "Efficiency": "#10B981"
    }
  },
  {
    id: "developer-experience-docs",
    title: "Developer Experience Through Documentation",
    excerpt: "How thoughtful documentation design can dramatically improve developer experience and product adoption.",
    content: `# Developer Experience Through Documentation

Great documentation is a cornerstone of excellent developer experience (DX).

## What is Developer Experience?

Developer experience encompasses:
- How easy it is to get started
- How quickly developers can be productive
- How well they can maintain and extend their work
- How supported they feel by tools and resources

## Documentation's Role in DX

### First Impressions Matter
- **Getting Started Guide**: Clear, tested onboarding flow
- **Quick Wins**: Help developers achieve success quickly
- **Clear Value Proposition**: Show benefits upfront

### Ongoing Support
- **Comprehensive Reference**: Detailed API documentation
- **Practical Examples**: Real-world use cases and patterns
- **Troubleshooting**: Common issues and solutions

### Progressive Disclosure
- **Layered Information**: Basic to advanced concepts
- **Multiple Learning Paths**: Different approaches for different needs
- **Just-in-Time Help**: Context-sensitive assistance

## DX Documentation Principles

### Empathy-Driven Design
- Understand your users' goals and constraints
- Consider different experience levels
- Test with real developers

### Task-Oriented Structure
- Organize around what developers want to accomplish
- Provide clear steps and expected outcomes
- Include prerequisites and assumptions

### Continuous Improvement
- Gather feedback regularly
- Monitor usage patterns
- Update based on real user behavior

## Measuring DX Impact

### Quantitative Metrics
- Time to first successful API call
- Documentation page views and engagement
- Support ticket volume and topics
- Developer onboarding completion rates

### Qualitative Feedback
- Developer satisfaction surveys
- Community sentiment analysis
- User interview insights
- Support conversation themes

## Best Practices

1. **Start with User Research**: Understand your developers
2. **Create User Journeys**: Map the complete developer experience
3. **Test Early and Often**: Validate with real users
4. **Maintain Consistency**: Across all touchpoints
5. **Iterate Based on Data**: Use metrics to guide improvements

Remember: Documentation is often the first and most frequent touchpoint developers have with your product. Make it count.`,
    date: "2024-01-30",
    readTime: "13 min read",
    slug: "developer-experience-docs",
    tags: ["Developer Experience", "UX", "Design"],
    tagColors: {
      "Developer Experience": "#8B5CF6",
      "UX": "#F59E0B",
      "Design": "#06B6D4"
    }
  }
];

export function parseMarkdownPosts(): MarkdownPost[] {
  // Sort by date to find the most recent post
  const sortedPosts = [...staticPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
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
