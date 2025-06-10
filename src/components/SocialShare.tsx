
import { useState } from "react";
import { Copy, Twitter, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  title: string;
  url?: string;
}

export const SocialShare = ({ title, url }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const currentUrl = url || window.location.href;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(currentUrl);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The post URL has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the URL manually.",
        variant: "destructive",
      });
    }
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      
      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="flex items-center space-x-2"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span>{copied ? "Copied!" : "Copy Link"}</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={shareOnTwitter}
        className="flex items-center space-x-2"
      >
        <Twitter className="h-4 w-4" />
        <span>Twitter</span>
      </Button>
    </div>
  );
};
