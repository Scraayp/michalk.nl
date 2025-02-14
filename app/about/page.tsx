"use client";

import { Card } from "@/components/ui/card";
import { Github, GraduationCap, Linkedin, Mail, Twitter, Code } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Loading } from "@/components/loading";

interface GithubStats {
  followers: number;
  public_repos: number;
  public_gists: number;
}

export default function About() {
  const [loading, setLoading] = useState(true);
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    fetch('https://api.github.com/users/yourusername')
      .then(res => res.json())
      .then(data => {
        setGithubStats({
          followers: data.followers,
          public_repos: data.public_repos,
          public_gists: data.public_gists,
        });
      });

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  const education = [
    {
      degree: "Master of Computer Science",
      school: "University of Technology",
      year: "2020-2022",
      description: "Specialized in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Bachelor of Software Engineering",
      school: "Tech Institute",
      year: "2016-2020",
      description: "Focus on Web Development and Software Architecture",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      tech: "Next.js, Stripe, PostgreSQL",
      year: "2023",
      description: "Built a full-stack e-commerce platform with secure payments and real-time inventory management",
      link: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "AI Image Generator",
      tech: "React, OpenAI API, TailwindCSS",
      year: "2023",
      description: "Created an AI-powered image generation tool using DALL-E API with advanced prompt engineering",
      link: "https://github.com/yourusername/ai-generator",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg text-muted-foreground">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I love building beautiful, functional, and user-friendly applications that solve
              real-world problems.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-2xl mx-auto"
            />
          </div>
        </section>

        {/* GitHub Stats */}
        {githubStats && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold">{githubStats.followers}</h3>
              <p className="text-muted-foreground">GitHub Followers</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold">{githubStats.public_repos}</h3>
              <p className="text-muted-foreground">Public Repositories</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-2xl font-bold">{githubStats.public_gists}</h3>
              <p className="text-muted-foreground">Public Gists</p>
            </Card>
          </section>
        )}

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                    <p className="mt-2">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.tech}</p>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                    <p className="mt-2">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary hover:underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}