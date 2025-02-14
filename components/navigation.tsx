"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Github, Linkedin, Mail, Moon, Sun, Terminal } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">DevPortfolio</span>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="link-hover hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="link-hover hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="link-hover hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-primary/10"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
}