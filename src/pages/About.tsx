
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Documentation Leadership
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights on building documentation strategies that scale, 
              leading technical writing teams, and creating developer experiences that delight.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To help organizations transform their approach to documentation from an afterthought 
                into a strategic advantage. Through proven frameworks, real-world case studies, and 
                practical guidance, we help teams build documentation cultures that enable better 
                products and happier developers.
              </p>
            </CardContent>
          </Card>

          {/* Expertise Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Documentation Strategy</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Information architecture design</li>
                  <li>• Content governance frameworks</li>
                  <li>• Docs-as-code implementation</li>
                  <li>• User journey optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Team Leadership</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Building and scaling doc teams</li>
                  <li>• Cross-functional collaboration</li>
                  <li>• Performance measurement</li>
                  <li>• Career development programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Technical Writing</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• API documentation excellence</li>
                  <li>• Developer experience design</li>
                  <li>• Content accessibility</li>
                  <li>• Style guide development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">UX Writing</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Interface copy optimization</li>
                  <li>• Error message design</li>
                  <li>• Onboarding flow writing</li>
                  <li>• Voice and tone guidelines</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Background */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  With over a decade of experience in technical communication, I've helped organizations 
                  from startups to Fortune 500 companies transform their documentation from scattered 
                  wikis into strategic assets that drive product adoption and developer satisfaction.
                </p>
                <p className="mb-4">
                  My approach combines technical writing expertise with product thinking, user research, 
                  and engineering best practices. I believe great documentation isn't just about writing—it's 
                  about understanding user needs, building sustainable processes, and creating systems 
                  that scale with your organization.
                </p>
                <p>
                  Through this blog, I share frameworks, case studies, and practical guidance from 
                  real-world documentation transformations. Whether you're a solo technical writer 
                  or leading a team of dozens, these insights will help you build documentation 
                  that truly serves your users and business goals.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              Have questions about documentation strategy or want to discuss a specific challenge? 
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
