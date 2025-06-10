
import { Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Contact Information - Centered */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:judsonbonneville97@gmail.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>judsonbonneville97@gmail.com</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/judsonbonneville/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Judson Bonneville. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
