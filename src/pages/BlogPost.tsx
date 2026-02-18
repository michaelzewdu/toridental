import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto flex min-h-[400px] flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-2xl font-bold">Post Not Found</h1>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout>
      <article className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {post.category}
        </span>
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{post.title}</h1>

        <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        {/* Featured image placeholder */}
        <div className="mb-8 h-64 rounded-xl bg-muted flex items-center justify-center">
          <span className="text-6xl">🦷</span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-foreground">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={i} className="mt-8 mb-4 text-2xl font-bold text-foreground">{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter(Boolean);
              return (
                <ul key={i} className="mb-4 space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/^- \*\*(.*?)\*\*/, "<strong>$1</strong>").replace(/^- /, "") }} />
                    </li>
                  ))}
                </ul>
              );
            }
            return <p key={i} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p>;
          })}
        </div>

        {/* Social share */}
        <div className="mt-10 flex items-center gap-3 border-t border-border pt-6">
          <Share2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Share this article:</span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-4 w-4 text-foreground" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4 w-4 text-foreground" />
          </a>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-xl bg-primary p-8 text-center text-primary-foreground">
          <h3 className="mb-2 text-xl font-bold">Book Your Appointment Today</h3>
          <p className="mb-4 text-primary-foreground/80">Ready to take the next step for your dental health?</p>
          <Button asChild variant="secondary" className="rounded-full" size="lg">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
