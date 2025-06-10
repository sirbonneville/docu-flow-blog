
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isBackgroundExpanded, setIsBackgroundExpanded] = useState(false);

  return (
    <Layout>
      <div className="py-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              About Judson
            </h1>
            
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-6 max-w-2xl mx-auto">
              <img 
                src="/judson_bonneville_pfp.jpg" 
                alt="Judson Bonneville profile picture"
                className="w-20 h-20 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0"
              />
              <p className="text-lg md:text-xl text-muted-foreground text-center md:text-left">
                Leading product documentation at Pieces for Developers, specializing in technical writing 
                and documentation strategy for AI-powered developer tools.
              </p>
            </div>
          </div>

          {/* Background - Collapsible on Mobile */}
          <Card className="mb-10">
            <CardContent className="p-6 md:p-8">
              <Collapsible 
                open={isBackgroundExpanded} 
                onOpenChange={setIsBackgroundExpanded}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Background</h2>
                  
                  {/* Toggle button - only visible on mobile */}
                  <CollapsibleTrigger className="md:hidden flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <span>{isBackgroundExpanded ? 'Show less' : 'Read more'}</span>
                    {isBackgroundExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </CollapsibleTrigger>
                </div>
                
                {/* Desktop: Always show full content */}
                <div className="hidden md:block prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    I lead product documentation at Pieces for Developers, specializing in technical writing and documentation strategy for AI-powered developer tools. I've authored 180+ documentation pages from scratch, managed multiple platform migrations, and established style conventions that create cohesive user experiences.
                  </p>
                  <p>
                    With a Liberal Arts background, 7+ years in technical writing, and 2+ years in web development, I approach documentation through logic-driven structure and clarity. My role spans writing, cross-functional coordination, and product strategy—working daily with engineering, product, and leadership teams.
                  </p>
                  <p>
                    I believe great documentation transforms complex developer experiences into digestible content filled with examples and guided explanations. What drives me is collaboration, thoughtful critique, and communication—essential elements in both documentation and cross-functional work.
                  </p>
                  <p>
                    This blog explores technical writing, developer experience, and modern documentation practices. I share insights on docs-as-code, UX writing, team management, and creating documentation with user empathy at the forefront.
                  </p>
                </div>

                {/* Mobile: Show preview with blur effect when collapsed */}
                <div className="md:hidden">
                  <div className="relative">
                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                      <p>
                        I lead product documentation at Pieces for Developers, specializing in technical writing and documentation strategy for AI-powered developer tools. I've authored 180+ documentation pages from scratch, managed multiple platform migrations, and established style conventions that create cohesive user experiences.
                      </p>
                      {!isBackgroundExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none" />
                      )}
                    </div>
                  </div>
                  
                  <CollapsibleContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 pt-4">
                      <p>
                        With a Liberal Arts background, 7+ years in technical writing, and 2+ years in web development, I approach documentation through logic-driven structure and clarity. My role spans writing, cross-functional coordination, and product strategy—working daily with engineering, product, and leadership teams.
                      </p>
                      <p>
                        I believe great documentation transforms complex developer experiences into digestible content filled with examples and guided explanations. What drives me is collaboration, thoughtful critique, and communication—essential elements in both documentation and cross-functional work.
                      </p>
                      <p>
                        This blog explores technical writing, developer experience, and modern documentation practices. I share insights on docs-as-code, UX writing, team management, and creating documentation with user empathy at the forefront.
                      </p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Core Focus Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Documentation Strategy</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Technical writing for developer tools</li>
                  <li>• Cross-functional team coordination</li>
                  <li>• Style guide development</li>
                  <li>• Platform migration management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Developer Experience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• User empathy-driven content</li>
                  <li>• Docs-as-code implementation</li>
                  <li>• UX writing principles</li>
                  <li>• Modern documentation practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              Have questions about documentation strategy or want to discuss developer experience? 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Connect on LinkedIn
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Follow on Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
