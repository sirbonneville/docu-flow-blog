import { Post } from '@/data/posts';

export interface MarkdownPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
  featured?: boolean;
}

// This would normally parse actual markdown files from the filesystem
// For now, we'll simulate this with the existing posts
const markdownFiles = [
  {
    filename: '2024-02-01-accessibility-in-documentation.md',
    frontmatter: {
      title: "Making Documentation Accessible: A Comprehensive Guide",
      excerpt: "Learn how to create documentation that works for everyone, including users with disabilities, different technical backgrounds, and varying accessibility needs.",
      date: "2024-02-01",
      readTime: "9 min read",
      tags: ["Accessibility", "Inclusive Design", "UX", "Documentation"]
    },
    content: `---
title: "Making Documentation Accessible: A Comprehensive Guide"
excerpt: "Learn how to create documentation that works for everyone, including users with disabilities, different technical backgrounds, and varying accessibility needs."
date: "2024-02-01"
readTime: "9 min read"
tags: ["Accessibility", "Inclusive Design", "UX", "Documentation"]
---

# Making Documentation Accessible: A Comprehensive Guide

Accessible documentation isn't just about compliance—it's about creating content that truly serves all users, regardless of their abilities, technical background, or the tools they use to access information.

## Why Accessibility Matters in Documentation

### Universal Design Benefits Everyone
When you design for accessibility, you create better experiences for all users:
- **Clear structure** helps screen readers and visual scanners alike
- **Simple language** reduces cognitive load for everyone
- **Multiple formats** accommodate different learning styles
- **Logical navigation** makes content findable and usable

### Legal and Ethical Considerations
Many organizations are legally required to provide accessible content under laws like the Americans with Disabilities Act (ADA) and Web Content Accessibility Guidelines (WCAG). But beyond compliance, accessible documentation is simply the right thing to do.

## Core Accessibility Principles

### 1. Perceivable Content
Information must be presentable in ways users can perceive:

**Visual Accessibility:**
- Use sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- Don't rely solely on color to convey information
- Provide alt text for images and diagrams
- Ensure text is resizable up to 200% without loss of functionality

**Alternative Formats:**
- Offer audio versions for complex written content
- Provide transcripts for video content
- Use descriptive link text instead of "click here"

### 2. Operable Interface
Users must be able to operate the interface:

**Keyboard Navigation:**
- Ensure all interactive elements are keyboard accessible
- Provide visible focus indicators
- Implement logical tab order
- Include skip navigation links

**Timing Considerations:**
- Avoid auto-playing media with sound
- Provide controls for time-sensitive content
- Don't use flashing content that could trigger seizures

### 3. Understandable Information
Information and UI operation must be understandable:

**Clear Language:**
- Use plain language principles
- Define technical terms when first used
- Keep sentences and paragraphs concise
- Provide context for abbreviations and acronyms

**Predictable Navigation:**
- Use consistent navigation patterns
- Provide clear headings and page structure
- Include breadcrumbs and site maps
- Offer multiple ways to find content

### 4. Robust Content
Content must be robust enough for various assistive technologies:

**Semantic HTML:**
- Use proper heading hierarchy (h1, h2, h3, etc.)
- Implement ARIA labels where needed
- Structure tables with proper headers
- Use lists for related items

## Practical Implementation Strategies

### Content Structure
\`\`\`html
<!-- Good heading hierarchy -->
<h1>Main Topic</h1>
  <h2>Subtopic</h2>
    <h3>Specific Point</h3>
    <h3>Another Point</h3>
  <h2>Another Subtopic</h2>
\`\`\`

### Image Accessibility
\`\`\`html
<!-- Descriptive alt text -->
<img src="api-flow-diagram.png" 
     alt="API authentication flow showing user login, token generation, and resource access steps">

<!-- Decorative images -->
<img src="decorative-border.png" alt="" role="presentation">
\`\`\`

### Link Best Practices
\`\`\`html
<!-- Descriptive link text -->
<a href="/api-guide">Complete API Integration Guide</a>

<!-- Not: Click here for the API guide -->
\`\`\`

## Testing Your Documentation

### Automated Testing Tools
- **WAVE**: Web accessibility evaluation tool
- **axe DevTools**: Browser extension for accessibility testing
- **Lighthouse**: Built-in Chrome accessibility audit
- **Pa11y**: Command-line accessibility testing

### Manual Testing Methods
- **Keyboard-only navigation**: Try using your docs without a mouse
- **Screen reader testing**: Use tools like NVDA or VoiceOver
- **High contrast mode**: Test visibility in high contrast settings
- **Zoom testing**: Ensure usability at 200% zoom level

### User Testing
Include users with disabilities in your testing process:
- Recruit diverse testers with different accessibility needs
- Observe real usage patterns and pain points
- Gather feedback on content clarity and navigation
- Iterate based on user insights

## Common Accessibility Pitfalls

### Color-Only Information
❌ "Click the red button to continue"
✅ "Click the 'Continue' button (highlighted in red) to proceed"

### Poor Heading Structure
❌ Using headings for styling (h1, h3, h2, h4)
✅ Logical hierarchy (h1, h2, h3, h3, h2, h3)

### Inaccessible Forms
❌ Placeholder text as labels
✅ Proper label elements with clear instructions

### Missing Context
❌ Links that say "read more" or "click here"
✅ Descriptive links that explain the destination

## Creating Inclusive Content

### Language Considerations
- Use person-first language ("person with a disability" not "disabled person")
- Avoid ableist language and metaphors
- Provide definitions for technical terms
- Consider cultural context and translation needs

### Multiple Learning Styles
- Combine text with visuals and examples
- Offer step-by-step tutorials alongside quick reference guides
- Provide both beginner and advanced paths through content
- Include video, audio, and interactive elements when appropriate

## Measuring Success

Track metrics that matter for accessibility:
- **Task completion rates** across different user groups
- **Time to find information** for users with assistive technologies
- **Error rates** in form completion and navigation
- **User satisfaction scores** from accessibility-focused surveys

## Building an Accessible Documentation Culture

### Team Training
- Educate writers about accessibility principles
- Provide tools and resources for accessible content creation
- Include accessibility in content review processes
- Share user stories and feedback to build empathy

### Continuous Improvement
- Regular accessibility audits
- User feedback collection and response
- Staying current with accessibility guidelines
- Documenting and sharing accessibility improvements

Remember: accessibility is not a one-time checklist item—it's an ongoing commitment to creating inclusive experiences that serve all users effectively. Start with the basics, test regularly, and continuously improve based on user feedback and evolving best practices.

The goal isn't perfection—it's progress toward documentation that truly works for everyone.`
  },
  {
    filename: '2024-01-15-building-documentation-culture.md',
    frontmatter: {
      title: "Building Documentation Culture: From Chaos to Clarity",
      excerpt: "How to transform your team's approach to documentation by establishing clear processes, ownership models, and quality standards that scale.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Documentation", "Team Culture", "Process", "Leadership"]
    },
    content: `---
title: "Building Documentation Culture: From Chaos to Clarity"
excerpt: "How to transform your team's approach to documentation by establishing clear processes, ownership models, and quality standards that scale."
date: "2024-01-15"
readTime: "8 min read"
tags: ["Documentation", "Team Culture", "Process", "Leadership"]
---

# Building Documentation Culture: From Chaos to Clarity

Documentation is often treated as an afterthought, relegated to the end of development cycles or assigned to whoever has "spare time." This approach leads to inconsistent, outdated, and ultimately unhelpful documentation that frustrates both creators and users.

## The Problem with Ad-Hoc Documentation

Most teams start with good intentions. Developers write README files, product managers create specifications, and support teams maintain FAQ documents. But without a systematic approach, this documentation becomes:

- **Fragmented**: Information scattered across wikis, Google Docs, Slack threads, and tribal knowledge
- **Inconsistent**: Different writing styles, formats, and levels of detail across teams
- **Outdated**: No clear ownership or update processes when products evolve
- **Inaccessible**: Hard to find, poorly organized, or written for the wrong audience

## The Documentation Culture Framework

Building a strong documentation culture requires more than just better writing. It needs:

### 1. Clear Ownership Models

Every piece of documentation needs an owner. This doesn't mean one person writes everything, but someone is accountable for:
- Keeping content current
- Reviewing contributions
- Ensuring quality standards
- Making decisions about scope and structure

### 2. Integrated Workflows

Documentation should be part of your development process, not separate from it. This means:
- Including doc updates in definition of done
- Reviewing documentation changes alongside code reviews
- Planning documentation work in sprint planning
- Measuring documentation quality in retrospectives

### 3. Quality Standards

Establish clear guidelines for:
- Writing style and tone
- Information architecture
- Review processes
- Update schedules
- Success metrics

## Implementation Strategy

Start small and build momentum:

1. **Pick a pilot area**: Choose one product or team to establish best practices
2. **Define your standards**: Create templates and style guides
3. **Train your champions**: Identify documentation advocates in each team
4. **Measure and iterate**: Track usage, feedback, and maintenance costs
5. **Scale gradually**: Apply lessons learned to additional areas

## Measuring Success

Documentation culture isn't just about having more docs—it's about having better outcomes:

- **Reduced support tickets** for well-documented features
- **Faster onboarding** for new team members
- **Improved developer experience** with clear API documentation
- **Better product adoption** through user-friendly guides

The goal isn't perfect documentation—it's sustainable, useful documentation that evolves with your product and serves your users' real needs.

Remember: documentation culture is a journey, not a destination. Start where you are, focus on your users' needs, and build systems that make good documentation the easy choice.`
  },
  {
    filename: '2024-01-30-developer-experience-docs.md',
    frontmatter: {
      title: "Developer Experience: Making Documentation Developer-Friendly",
      excerpt: "Explore strategies for creating documentation that developers actually want to use, with practical examples and implementation tips.",
      date: "2024-01-30",
      readTime: "6 min read",
      tags: ["Developer Experience", "Documentation", "API", "Technical Writing"]
    },
    content: `---
title: "Developer Experience: Making Documentation Developer-Friendly"
excerpt: "Explore strategies for creating documentation that developers actually want to use, with practical examples and implementation tips."
date: "2024-01-30"
readTime: "6 min read"
tags: ["Developer Experience", "Documentation", "API", "Technical Writing"]
---

# Developer Experience: Making Documentation Developer-Friendly

Great developer documentation isn't just about accuracy—it's about creating an experience that helps developers succeed quickly and efficiently.

## Understanding Developer Needs

### Speed and Efficiency
Developers need information fast. They're often working under pressure and looking for specific solutions to immediate problems.

### Practical Examples
Code samples, working examples, and copy-paste snippets are more valuable than lengthy explanations.

### Context Awareness
Documentation should understand where developers are in their journey—from first-time users to advanced implementers.

## Design Principles for Developer Docs

### Progressive Disclosure
- Start with quick start guides
- Provide detailed references for deep dives
- Use clear navigation and search

### Interactive Elements
- Code playgrounds and sandboxes
- Live API explorers
- Interactive tutorials

### Community Integration
- Comment systems for questions
- Community-contributed examples
- Regular feedback collection

## Implementation Tactics

Focus on the "time to first success" metric. How quickly can a developer achieve their first meaningful result with your documentation?

Use analytics to identify drop-off points and continuously optimize the developer journey through your docs.

Remember: the best documentation is the one developers actually use and recommend to others.`
  },
  {
    filename: '2024-01-25-documentation-automation.md',
    frontmatter: {
      title: "Automating Documentation Workflows: Tools and Techniques",
      excerpt: "Discover how to streamline your documentation process with automation tools, reducing manual work while maintaining quality.",
      date: "2024-01-25",
      readTime: "8 min read",
      tags: ["Automation", "Workflow", "Tools", "Productivity"]
    },
    content: `---
title: "Automating Documentation Workflows: Tools and Techniques"
excerpt: "Discover how to streamline your documentation process with automation tools, reducing manual work while maintaining quality."
date: "2024-01-25"
readTime: "8 min read"
tags: ["Automation", "Workflow", "Tools", "Productivity"]
---

# Automating Documentation Workflows: Tools and Techniques

Manual documentation processes don't scale. As your team and product grow, automation becomes essential for maintaining consistency and quality while reducing the burden on writers.

## Key Automation Opportunities

### Content Generation
- API documentation from code comments
- Automated screenshot capture
- Template-based content creation
- Code example extraction

### Quality Assurance
- Spell check and grammar validation
- Link checking and maintenance
- Style guide enforcement
- Accessibility scanning

### Publishing and Distribution
- Automated builds and deployments
- Cross-platform publishing
- Translation workflow automation
- Version management

## Popular Tools and Platforms

- **GitBook**: Integrated writing and publishing
- **Notion**: Collaborative documentation with automation
- **Confluence**: Enterprise-grade automation features
- **Custom solutions**: GitHub Actions, CI/CD pipelines

## Getting Started

Begin with the most time-consuming manual tasks in your workflow. Implement one automation at a time, measure the impact, and gradually expand your automated processes.

The goal is to free up time for high-value strategic work while maintaining documentation quality.`
  },
  {
    filename: '2024-01-20-technical-writing-metrics.md',
    frontmatter: {
      title: "Measuring Success: Key Metrics for Technical Writing Teams",
      excerpt: "Learn how to track and measure the effectiveness of your technical documentation with actionable metrics and KPIs that matter.",
      date: "2024-01-20",
      readTime: "7 min read",
      tags: ["Metrics", "Analytics", "ROI", "Strategy"]
    },
    content: `---
title: "Measuring Success: Key Metrics for Technical Writing Teams"
excerpt: "Learn how to track and measure the effectiveness of your technical documentation with actionable metrics and KPIs that matter."
date: "2024-01-20"
readTime: "7 min read"
tags: ["Metrics", "Analytics", "ROI", "Strategy"]
---

# Measuring Success: Key Metrics for Technical Writing Teams

Technical writing teams often struggle with demonstrating their value and impact within organizations. Unlike sales or marketing teams with clear revenue metrics, documentation teams need different approaches to measure success.

## Essential Documentation Metrics

### User Engagement Metrics
- Page views and unique visitors
- Time spent on documentation pages
- Search queries and popular content
- User feedback and satisfaction scores

### Quality Indicators
- Content freshness and update frequency
- Broken link monitoring
- Accessibility compliance scores
- Translation coverage for global teams

### Business Impact Metrics
- Support ticket reduction
- Developer onboarding time
- API adoption rates
- Customer success correlation

## Implementation Strategies

Start with baseline measurements and establish regular reporting cadences. Use tools like Google Analytics, Hotjar, or specialized documentation platforms to gather data consistently.

Remember: metrics should drive improvement, not just measurement for measurement's sake.`
  },
  {
    filename: '2024-01-10-docs-as-code-guide.md',
    frontmatter: {
      title: "Docs-as-Code: Managing Documentation Like Software",
      excerpt: "Learn how to apply software development best practices to documentation creation, including version control, peer review, and automated publishing.",
      date: "2024-01-10",
      readTime: "12 min read",
      tags: ["Docs-as-Code", "Version Control", "Best Practices", "Git"]
    },
    content: `---
title: "Docs-as-Code: Managing Documentation Like Software"
excerpt: "Learn how to apply software development best practices to documentation creation, including version control, peer review, and automated publishing."
date: "2024-01-10"
readTime: "12 min read"
tags: ["Docs-as-Code", "Version Control", "Best Practices", "Git"]
---

# Docs-as-Code: Managing Documentation Like Software

The docs-as-code approach treats documentation with the same rigor and best practices applied to software development. This methodology has revolutionized how technical teams create, maintain, and publish documentation.

## Core Principles

### Version Control Everything
Store documentation in the same repositories as your code, using Git for:
- **Change tracking**: See exactly what changed, when, and why
- **Branching strategies**: Develop documentation features alongside code
- **Rollback capabilities**: Safely revert problematic changes
- **Collaboration**: Multiple contributors can work simultaneously

### Peer Review Process
Apply code review practices to documentation:
- Pull request workflows for all changes
- Review checklists for consistency and quality
- Approval gates before publishing
- Discussion threads for complex changes

### Automated Publishing
Set up CI/CD pipelines for documentation:
- Automatic builds from source files
- Quality checks and link validation
- Multi-environment deployments
- Performance monitoring

## Implementation Guide

### 1. Choose Your Tools

**Markup Languages:**
- Markdown for simplicity and broad support
- AsciiDoc for advanced formatting needs
- reStructuredText for Python ecosystems

**Static Site Generators:**
- GitBook for user-friendly authoring
- Sphinx for Python documentation
- Docusaurus for React-based sites
- VuePress for Vue.js projects

### 2. Structure Your Repository

\`\`\`
docs/
├── content/
│   ├── getting-started/
│   ├── api-reference/
│   └── tutorials/
├── assets/
│   ├── images/
│   └── diagrams/
├── templates/
└── config/
\`\`\`

### 3. Establish Workflows

**Content Creation:**
1. Create feature branch
2. Write/update documentation
3. Test locally
4. Submit pull request
5. Review and merge
6. Deploy automatically

**Review Criteria:**
- Technical accuracy
- Clarity and readability
- Consistent formatting
- Proper linking
- SEO optimization

## Benefits

### For Writers
- **Familiar tools**: Use the same editors and workflows as developers
- **Change tracking**: See document evolution over time
- **Collaboration**: Work simultaneously without conflicts
- **Quality gates**: Catch errors before publication

### For Organizations
- **Consistency**: Standardized processes across teams
- **Scalability**: Add contributors without chaos
- **Reliability**: Automated testing and deployment
- **Integration**: Documentation stays in sync with code

## Common Challenges

### Initial Setup Complexity
The learning curve can be steep for non-technical writers. Mitigate with:
- Comprehensive onboarding
- Visual Git clients
- Web-based editing interfaces
- Pair programming sessions

### Tool Proliferation
Avoid the temptation to adopt every new tool. Focus on:
- Proven, stable solutions
- Tools your team already uses
- Clear migration paths
- Community support

### Change Management
Shifting from traditional documentation tools requires:
- Executive support
- Training programs
- Gradual migration
- Success metrics

The docs-as-code approach transforms documentation from a necessary evil into a first-class product that evolves alongside your software, providing better experiences for both creators and consumers.`
  },
  {
    filename: '2024-01-05-api-documentation-best-practices.md',
    frontmatter: {
      title: "API Documentation That Developers Actually Use",
      excerpt: "Best practices for creating API documentation that serves as both reference and tutorial, with real examples and interactive features.",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["API", "Documentation", "Developer Experience", "Best Practices"]
    },
    content: `---
title: "API Documentation That Developers Actually Use"
excerpt: "Best practices for creating API documentation that serves as both reference and tutorial, with real examples and interactive features."
date: "2024-01-05"
readTime: "10 min read"
tags: ["API", "Documentation", "Developer Experience", "Best Practices"]
---

# API Documentation That Developers Actually Use

Great API documentation is the difference between developers loving your API and abandoning it for alternatives. Yet most API docs fail because they're written for the documentation team, not the developers who actually use them.

## What Developers Need

### Quick Wins
Developers often arrive at your documentation with specific tasks and tight deadlines. They need:
- **Clear getting started guide**: Working code example in under 5 minutes
- **Interactive exploration**: Test API calls without writing code
- **Real use cases**: Examples that match their actual problems
- **Error handling**: What goes wrong and how to fix it

### Comprehensive Reference
Once hooked, developers need complete information:
- **All endpoints documented**: No hidden or undocumented features
- **Request/response examples**: Real JSON, not abstract schemas
- **Authentication flows**: Step-by-step with actual tokens
- **Rate limiting details**: Understand constraints upfront

## Documentation Structure

### 1. Getting Started (The Critical First 10 Minutes)

\`\`\`markdown
# Quick Start
1. Get your API key
2. Make your first request
3. See real data

## Hello World Example
\`\`\`bash
curl -H "Authorization: Bearer YOUR_TOKEN" \\
  https://api.example.com/v1/users/me
\`\`\`

Expected response:
\`\`\`json
{
  "id": "user_123",
  "name": "Jane Developer",
  "email": "jane@example.com"
}
\`\`\`
\`\`\`

### 2. Authentication Deep Dive
Don't just list authentication methods—show the complete flow:
- How to register for API keys
- Token refresh mechanisms
- Scopes and permissions
- Common authentication errors

### 3. Core Concepts
Explain your API's mental model:
- Key resources and relationships
- Common workflows
- Data models and constraints
- Naming conventions

### 4. Reference Documentation
For each endpoint, include:
- Purpose and use cases
- Complete parameter descriptions
- Multiple request examples
- All possible responses
- Error codes and solutions

## Interactive Features

### API Explorer
Let developers test calls directly:
- Pre-filled authentication
- Parameter forms
- Live request/response
- Code generation in multiple languages

### Code Examples
Provide working examples in popular languages:
- cURL for universal compatibility
- JavaScript for web developers
- Python for data scientists
- Go for backend developers

### SDKs and Libraries
Official libraries reduce friction:
- Consistent patterns across languages
- Built-in error handling
- Automatic retries and rate limiting
- Type definitions for IDE support

## Quality Checklist

### Accuracy
- [ ] All examples actually work
- [ ] Error responses match reality
- [ ] Code samples use current API version
- [ ] Screenshots reflect current UI

### Completeness
- [ ] Every endpoint documented
- [ ] All parameters explained
- [ ] Error conditions covered
- [ ] Edge cases addressed

### Usability
- [ ] Searchable content
- [ ] Mobile-friendly design
- [ ] Fast loading times
- [ ] Logical navigation

### Freshness
- [ ] Updated with each API release
- [ ] Deprecated features marked
- [ ] Migration guides for breaking changes
- [ ] Community feedback incorporated

## Common Pitfalls

### Over-Technical Writing
Remember your audience includes:
- Junior developers learning APIs
- Experienced developers in a hurry
- Non-native English speakers
- People switching between platforms

Write for clarity, not to impress.

### Missing Context
Don't just document what your API does—explain why developers would use it and how it fits into larger workflows.

### Static Examples
Generic "foo" and "bar" examples don't help developers understand real use cases. Use domain-relevant examples that developers can relate to their actual problems.

## Measuring Success

Track metrics that matter:
- **Time to first successful API call**
- **Documentation page completion rates**
- **Support ticket volume for documented topics**
- **Developer onboarding speed**
- **API adoption rates**

Great API documentation isn't just a reference—it's a product that enables developers to be successful with your API. Invest in it accordingly.`
  }
];

function filenameToSlug(filename: string): string {
  // Remove .md extension and date prefix
  return filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

function filenameToId(filename: string): string {
  // Use the filename without extension as ID
  return filename.replace(/\.md$/, '');
}

export function parseMarkdownPosts(): MarkdownPost[] {
  const posts = markdownFiles.map((file) => ({
    id: filenameToId(file.filename),
    slug: filenameToSlug(file.filename),
    title: file.frontmatter.title,
    excerpt: file.frontmatter.excerpt,
    content: file.content,
    date: file.frontmatter.date,
    readTime: file.frontmatter.readTime,
    tags: file.frontmatter.tags,
    featured: false // We'll set this dynamically
  }));

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
