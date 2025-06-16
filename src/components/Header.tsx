
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Default to dark mode if no saved preference
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Posts", href: "/posts" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-[#FAF8F3]/80 dark:bg-[#212121]/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center min-w-0 flex-1 sm:flex-none">
            <a href="/" className="text-sm sm:text-lg md:text-xl font-bold text-primary hover:text-primary/80 transition-colors truncate">
              The Documentation Lead
            </a>
          </div>

          {/* Desktop Navigation - Absolutely centered */}
          <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Theme Toggle and Mobile Menu - Right side with larger touch targets */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-11 w-11 p-0 md:h-9 md:w-9"
            >
              {isDark ? (
                <Sun className="h-5 w-5 md:h-4 md:w-4" />
              ) : (
                <Moon className="h-5 w-5 md:h-4 md:w-4" />
              )}
            </Button>

            {/* Mobile Menu Button - Enhanced touch target */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-11 w-11 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced spacing and touch targets */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 px-2 rounded-lg hover:bg-muted/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
