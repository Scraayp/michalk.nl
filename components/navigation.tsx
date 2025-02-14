"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Github, Linkedin, Mail, Moon, Sun, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  return (
    <header className="fixed top-0 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Michal</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {/* Navigation for large screens */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="link-hover hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="link-hover hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-primary/10 relative"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Link href="/contact">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Terminal className="h-6 w-6 text-primary" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/90 backdrop-blur-md p-4 z-40">
          <nav className="flex flex-col items-center gap-4">
            <Link
              href="/"
              className="link-hover hover:text-primary transition-colors"
              onClick={toggleMenu} // Close menu when a link is clicked
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="link-hover hover:text-primary transition-colors"
              onClick={toggleMenu} // Close menu when a link is clicked
            >
              Contact
            </Link>
          </nav>
        </div>
      )} */}
    </header>
  );
}
