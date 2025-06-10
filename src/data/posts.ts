
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Building Documentation Culture: From Chaos to Clarity",
    excerpt: "How to transform your team's approach to documentation by establishing clear processes, ownership models, and quality standards that scale.",
    content: `# Building Documentation Culture: From Chaos to Clarity

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

Remember: documentation culture is a journey, not a destination. Start where you are, focus on your users' needs, and build systems that make good documentation the easy choice.`,
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "building-documentation-culture",
    featured: true
  },
  {
    id: "2",
    title: "Docs-as-Code: Managing Documentation Like Software",
    excerpt: "Learn how to apply software development best practices to documentation creation, including version control, peer review, and automated publishing.",
    content: `# Docs-as-Code: Managing Documentation Like Software

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

The docs-as-code approach transforms documentation from a necessary evil into a first-class product that evolves alongside your software, providing better experiences for both creators and consumers.`,
    date: "2024-01-10",
    readTime: "12 min read",
    slug: "docs-as-code-guide"
  },
  {
    id: "3",
    title: "API Documentation That Developers Actually Use",
    excerpt: "Best practices for creating API documentation that serves as both reference and tutorial, with real examples and interactive features.",
    content: `# API Documentation That Developers Actually Use

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

Great API documentation isn't just a reference—it's a product that enables developers to be successful with your API. Invest in it accordingly.`,
    date: "2024-01-05",
    readTime: "10 min read",
    slug: "api-documentation-best-practices"
  },
  {
    id: "4",
    title: "Managing Documentation Teams at Scale",
    excerpt: "Strategies for hiring, organizing, and leading documentation teams that support multiple products and engineering organizations.",
    content: `# Managing Documentation Teams at Scale

As organizations grow, documentation needs evolve from individual contributors writing README files to complex, multi-team operations requiring dedicated management and strategy. Here's how to build and lead documentation teams that scale with your organization.

## Team Structure Models

### Centralized Model
A single documentation team serves the entire organization:
- **Pros**: Consistent standards, specialized expertise, efficient resource allocation
- **Cons**: Can become bottleneck, may lack deep product knowledge
- **Best for**: Organizations with similar products or strong central standards

### Embedded Model
Documentation specialists within each product team:
- **Pros**: Deep product knowledge, tight integration with development cycles
- **Cons**: Inconsistent standards, duplicated effort, harder to share learnings
- **Best for**: Diverse product portfolios with different user bases

### Hybrid Model
Central team for standards and strategy, embedded writers for execution:
- **Pros**: Balance of consistency and product focus
- **Cons**: Complex coordination, potential role confusion
- **Best for**: Large organizations with multiple distinct products

## Hiring and Skill Development

### Core Competencies

**Technical Writing Skills:**
- Clear, concise communication
- Audience analysis and adaptation
- Information architecture
- Style guide adherence

**Technical Aptitude:**
- Understanding of software development
- Comfort with APIs and developer tools
- Basic coding skills for docs-as-code workflows
- Version control systems

**Product Thinking:**
- User journey mapping
- Metrics-driven decision making
- Cross-functional collaboration
- Strategic planning

### Career Progression

Create clear growth paths:

**Junior Technical Writer (IC1-IC2)**
- Document existing features
- Update and maintain current content
- Learn product and technical domains
- Follow established processes

**Technical Writer (IC3-IC4)**
- Plan documentation for new features
- Improve information architecture
- Mentor junior writers
- Collaborate with product teams

**Senior Technical Writer (IC5-IC6)**
- Design documentation strategies
- Lead cross-team initiatives
- Establish best practices
- Drive process improvements

**Staff Technical Writer (IC7+)**
- Set organizational standards
- Influence product development
- External thought leadership
- Strategic planning

### Management Track

**Documentation Manager**
- Team leadership and development
- Resource planning and allocation
- Cross-team coordination
- Performance management

**Senior Documentation Manager**
- Multi-team leadership
- Strategic planning
- Stakeholder management
- Budget ownership

**Director of Documentation**
- Organizational strategy
- Executive communication
- Program management
- Industry leadership

## Operational Excellence

### Project Management
Documentation teams need structured approaches to handle multiple concurrent projects:

**Agile Integration:**
- Sprint planning with development teams
- Story pointing for documentation work
- Definition of done includes doc updates
- Regular retrospectives and process improvement

**Roadmap Planning:**
- Quarterly planning aligned with product roadmaps
- Resource allocation across teams
- Risk assessment and mitigation
- Stakeholder communication

### Quality Assurance
Maintain high standards across teams:

**Style and Standards:**
- Comprehensive style guides
- Content templates
- Review processes
- Automated checking tools

**Content Audits:**
- Regular accuracy reviews
- Usage analytics analysis
- User feedback integration
- Performance optimization

### Metrics and Success

Track team performance and impact:

**Productivity Metrics:**
- Content creation velocity
- Review cycle times
- Project completion rates
- Resource utilization

**Quality Metrics:**
- User satisfaction scores
- Content accuracy rates
- Support ticket reduction
- Time to value for users

**Strategic Metrics:**
- Developer onboarding speed
- Feature adoption rates
- API usage growth
- Customer success correlation

## Cross-Team Collaboration

### With Engineering
- Embed in development processes
- Technical review partnerships
- Early involvement in feature planning
- Shared success metrics

### With Product Management
- User research collaboration
- Feature prioritization input
- Release planning coordination
- Market feedback sharing

### With Customer Success
- User pain point identification
- Content gap analysis
- Success story documentation
- Training material development

### With Marketing
- Content strategy alignment
- Developer advocacy programs
- Conference speaking opportunities
- Thought leadership content

## Scaling Challenges

### Common Pitfalls

**Over-Centralization:**
Documentation becomes disconnected from product development, creating delays and accuracy issues.

**Under-Investment:**
Treating documentation as a cost center rather than a product enabler leads to resource constraints and quality problems.

**Process Rigidity:**
Overly complex approval processes slow down necessary updates and frustrate contributors.

### Solutions

**Flexible Frameworks:**
Create standards that provide guidance without stifling innovation or speed.

**Tooling Investment:**
Invest in tools that enable self-service and reduce manual overhead.

**Culture Building:**
Foster a culture where everyone contributes to documentation, with specialists providing guidance and quality assurance.

## Building for the Future

Successful documentation teams prepare for organizational growth:
- Scalable processes and tooling
- Cross-training and knowledge sharing
- Strong partnerships with key stakeholders
- Continuous learning and adaptation

The goal isn't to build the perfect documentation team—it's to build a team that can evolve with your organization's changing needs while maintaining quality and user focus.`,
    date: "2023-12-28",
    readTime: "15 min read",
    slug: "managing-documentation-teams"
  },
  {
    id: "5",
    title: "UX Writing for Developer Tools",
    excerpt: "How to apply UX writing principles to developer-facing interfaces, error messages, and onboarding flows.",
    content: `# UX Writing for Developer Tools

Developer tools have unique UX writing challenges. Your users are highly technical, task-focused, and have low tolerance for unnecessary friction. They want to understand quickly, act efficiently, and recover gracefully from errors.

## Understanding Developer Mental Models

### Context Switching Costs
Developers frequently switch between:
- Code editors and documentation
- Terminal and browser
- Different programming languages
- Various tools and interfaces

Your copy should minimize cognitive load during these transitions.

### Error Recovery Expectations
When something goes wrong, developers expect:
- Specific error information
- Clear next steps
- Debugging guidance
- Links to relevant documentation

### Efficiency Over Politeness
Developers prefer:
- Concise, actionable language
- Technical precision over marketing speak
- Direct instructions over conversational tone
- Scannable content over narrative

## Interface Copy Principles

### 1. Be Precise, Not Polite

**Instead of:**
"We're sorry, but something went wrong with your request. Please try again later."

**Write:**
"API rate limit exceeded. Retry after 60 seconds or upgrade plan for higher limits."

### 2. Lead with Action

**Instead of:**
"Your API key configuration needs to be updated to continue using our service."

**Write:**
"Add API_SECRET to your environment variables to authenticate requests."

### 3. Provide Context

**Instead of:**
"Invalid input"

**Write:**
"Email format invalid. Expected: user@domain.com"

## Error Message Design

### The Error Message Hierarchy

**1. What happened** (the error state)
"Build failed"

**2. Why it happened** (the cause)
"Missing required environment variable: DATABASE_URL"

**3. How to fix it** (the solution)
"Add DATABASE_URL to your .env file or deployment configuration"

**4. Where to learn more** (additional resources)
"[View environment variable guide →]"

### Error Message Examples

**Configuration Errors:**
\`\`\`
❌ Missing required field: webhook_url
💡 Add webhook_url to your configuration:
   {
     "webhook_url": "https://yoursite.com/webhook"
   }
📖 Learn more about webhooks
\`\`\`

**Authentication Errors:**
\`\`\`
❌ Authentication failed
🔍 Verify your API key has these permissions:
   • read:repositories
   • write:deployments
🔧 Manage API key permissions
\`\`\`

**Validation Errors:**
\`\`\`
❌ Invalid JSON in line 12
💡 Missing comma after "name" property
📝 JSON validator
\`\`\`

## Onboarding Copy

### Progressive Disclosure
Start with the minimum viable information:

**Step 1: Core Concept**
"Connect your repository to deploy automatically on every push."

**Step 2: Specific Action**
"Select repository: [dropdown] → Connect"

**Step 3: Advanced Options** (expandable)
"Configure build settings, environment variables, and domains"

### Success States
Celebrate progress and set expectations:

**Instead of:**
"Setup complete!"

**Write:**
"Repository connected ✅
Next deployment will trigger automatically on push to main branch.
Expected build time: 2-3 minutes."

## Documentation Integration

### Contextual Help
Embed documentation links strategically:

\`\`\`
Environment Variables
Set environment variables for your application.

[+ Add Variable]

Need help? → Environment variable guide
Common examples → Database, API keys, feature flags
\`\`\`

### Progressive Information
Start with common use cases, link to comprehensive docs:

**Dashboard Copy:**
"Most teams use webhooks for deployment notifications and status updates."
[Setup webhook] [Advanced webhook configuration →]

## Accessibility in Developer Tools

### Screen Reader Considerations
- Use semantic HTML for better navigation
- Provide alternative text for code snippets
- Ensure error messages are programmatically associated with inputs

### Color and Contrast
- Don't rely solely on color for status indication
- Use icons alongside color coding
- Ensure sufficient contrast for code syntax highlighting

### Keyboard Navigation
- Provide keyboard shortcuts for common actions
- Ensure all interactive elements are focusable
- Include skip links for complex interfaces

## Voice and Tone Guidelines

### Technical Accuracy
- Use correct technical terminology
- Maintain consistency with industry standards
- Link to authoritative sources when introducing concepts

### Confidence Without Arrogance
**Confident:**
"This action will permanently delete your data. Type 'DELETE' to confirm."

**Not Arrogant:**
"Obviously, you'll want to back up your data first."

### Helpful, Not Condescending
**Helpful:**
"New to webhooks? They're HTTP callbacks that notify your app when events occur."

**Not Condescending:**
"Webhooks are simple HTTP callbacks (you probably already know this)."

## Testing and Iteration

### Usability Testing with Developers
- Test with developers at different experience levels
- Observe where they get stuck or confused
- Note questions they ask during testing
- Track completion rates for key workflows

### Analytics and Feedback
Monitor:
- Drop-off points in setup flows
- Support ticket volume for specific features
- Search queries in documentation
- User feedback on error messages

### A/B Testing Copy
Test different approaches to:
- Error message clarity
- Call-to-action effectiveness
- Onboarding flow completion
- Feature adoption rates

## Content Operations

### Style Guide Maintenance
Keep your style guide current with:
- New feature terminology
- API changes and updates
- User feedback integration
- Industry standard evolution

### Cross-Team Collaboration
Work closely with:
- **Engineers** for technical accuracy
- **Product managers** for user journey understanding
- **Support teams** for common pain points
- **DevRel** for community feedback

Great UX writing for developer tools reduces cognitive load, speeds up task completion, and builds confidence in your product. It's the invisible layer that makes complex tools feel intuitive and reliable.`,
    date: "2023-12-20",
    readTime: "11 min read",
    slug: "ux-writing-developer-tools"
  }
];

export const getFeaturedPost = (): Post | undefined => {
  return posts.find(post => post.featured);
};

export const getRecentPosts = (limit: number = 6): Post[] => {
  return posts
    .filter(post => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getAllPosts = (): Post[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
