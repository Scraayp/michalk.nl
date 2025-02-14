"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Github, Linkedin, Mail, Moon, Sun, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const projects = [
    {
      title: "Project Alpha",
      description: "A modern web application built with Next.js and TypeScript",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Project Beta",
      description: "Real-time data visualization dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["React", "D3.js", "Firebase"],
    },
    {
      title: "Project Gamma",
      description: "Mobile-first e-commerce platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["React Native", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 relative z-10">
              <div className="inline-block">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  Available for hire
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-primary">John Doe</span>
                <br />
                Full Stack Developer
              </h1>
              <p className="text-lg text-muted-foreground">
                I build exceptional and accessible digital experiences for the web.
              </p>
              <div className="flex gap-4">
                <Button className="shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" className="card-hover">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="card-hover">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop"
                alt="Profile"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl shadow-primary/20 transition-transform hover:scale-[1.02] duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-muted/50 relative">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover border-primary/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}