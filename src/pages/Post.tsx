import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SocialShare } from "@/components/SocialShare";
import { Button } from "@/components/ui/button";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Tag } from "@/components/Tag";
import { getPostBySlug, getAllPosts } from "@/data/posts";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  if (!slug) {
    navigate("/");
    return null;
  }

  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  if (!post) {
    navigate("/");
    return null;
  }

  return (
    <Layout>
      <ReadingProgressBar />
      <div className="py-8 animate-fade-in">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground -ml-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Tag key={tag} tag={tag} tagColors={post.tagColors} />
                ))}
              </div>
            )}

            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:mt-12 prose-h1:mb-6
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:space-y-2 prose-ul:mb-6 prose-ul:pl-6
              prose-li:relative prose-li:marker:text-primary
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-muted-foreground
              prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
              prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
              prose-a:text-primary prose-a:hover:text-primary/80 prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Posts */}
          <RelatedPosts currentPost={post} allPosts={allPosts} />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <SocialShare title={post.title} />
              
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </div>
          </footer>
        </article>
      </div>
    </Layout>
  );
};

export default Post;