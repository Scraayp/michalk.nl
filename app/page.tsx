"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Code, Github, GraduationCap, Linkedin, Mail, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loading } from "@/components/loading";

type GithubStats = {
  followers: number;
  public_repos: number;
  public_gists: number;
};

export default function Home() {
  const { theme, setTheme } = useTheme();

  const [loading, setLoading] = useState(true);
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    fetch("https://api.github.com/users/scraayp")
      .then((res) => res.json())
      .then((data) => {
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
      degree: "Software Developer",
      school: "Koning Willem I College",
      year: "2022-2025",
      description:
        "Specialized in Full-Stack Development with a focus on modern web technologies",
    },
    {
      degree: "Economics and Business Administration",
      school: "Baanderherencollege",
      year: "2018-2022",
      description:
        "Specialized in Business Information Management leading up to IT",
    },
  ];

  const projects = [
    {
      title: "Werkvervanger",
      tech: "Laravel, PHP, Tailwind CSS, API, MySQL",
      year: "2025 (To Be Finished)",
      description:
        "A modern web application for workers to find replacements for their work shifts. The app can be managed by the employer.",
      link: "https://github.com/werkvervanger",
      demoLink: "https://werkvervanger.michalk.nl",
    },
    {
      title: "Xstros - Support Dashboard",
      tech: "Laravel, Tailwind CSS, PHP, MySQL, Authentication",
      year: "2025",
      description:
        "A support dashboard where users can create tickets and view their previous tickets, also view their transactions supported by Stripe.",
      link: "https://github.com/Scraayp/xstros-support-panel",
      demoLink: "https://support.xstros.xyz",
    },
    {
      title: "Xstros - Webhosting",
      tech: "Hosting, System configuration, Cloudpanel, Mailcow",
      year: "2024",
      description:
        "A web hosting platform where users can host their websites, using cloudpanel and mailcow.",
      link: "https://www.cloudpanel.io/",
      demoLink: "https://web.xstros.xyz",
    },
    {
      title: "Discord Anti Spam",
      tech: "Javascript, Typescript, NodeJS, Discord",
      year: "2021-2023",
      description:
        "A NPM module based for DiscordJS to prevent spam in servers.",
      link: "https://github.com/Michael-J-Scofield/discord-anti-spam",
      demoLink: "https://discord-anti-spam.js.org/",
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
                Hi, I'm <span className="text-primary">Michal Kolasa</span>
                <br />
                Full Stack Developer
              </h1>
              <p className="text-lg text-muted-foreground">
                I build websites and apps for the web. ☕☕☕
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://github.com/scraayp">
                  <Button className="shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/michkolasa/">
                  <Button variant="outline" className="card-hover">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://x.com/scraayp">
                  <Button variant="outline" className="card-hover">
                    <X className="mr-2 h-4 w-4" />X (Twitter)
                  </Button>
                </Link>
                <Link href="mailto:hello@michalk.nl">
                  <Button variant="outline" className="card-hover">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              {/* Centered Illustration Container */}
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative animate-float w-96 h-96 rounded-full overflow-hidden shadow-2xl">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600" />
                  {/* SVG Illustration on Top */}
                  <Image
                    src="/pfp.jpg"
                    alt="Man Illustration"
                    width={384}
                    height={384}
                    className="relative object-contain"
                  />
                </div>
              </div>

              {/* Custom CSS for the floating animation */}
              <style jsx>{`
                @keyframes float {
                  0%,
                  100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-20px);
                  }
                }
                .animate-float {
                  animation: float 3s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 space-y-16">
          {/* About Section */}
          <section className="grid gap-12 justify-center">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-lg text-muted-foreground">
                I'm a passionate full-stack developer with expertise in modern
                web technologies. I love building beautiful, functional, and
                user-friendly applications. I'm currently studying Software
                Development, while I work on various projects in my free time.
                <br />
                <br />
                I'm a soccer referee in my free time, I referee games all around
                Netherlands for the KNVB. I also enjoy playing video games and
                watching movies.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="https://github.com/scraayp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/michkolasa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://x.com/scraayp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <X className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:hello@michalk.nl"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </section>

          {/* GitHub Stats */}
          {githubStats && (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center shadow-lg dark:shadow-white/40">
                <h3 className="text-2xl font-bold">{githubStats.followers}</h3>
                <p className="text-muted-foreground">GitHub Followers</p>
              </Card>
              <Card className="p-6 text-center shadow-lg dark:shadow-white/40">
                <h3 className="text-2xl font-bold">
                  {githubStats.public_repos}
                </h3>
                <p className="text-muted-foreground">Public Repositories</p>
              </Card>
              <Card className="p-6 text-center shadow-lg dark:shadow-white/40">
                <h3 className="text-2xl font-bold">
                  {githubStats.public_gists}
                </h3>
                <p className="text-muted-foreground">Public Gists</p>
              </Card>
            </section>
          )}

          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.year}
                      </p>
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
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.tech}</p>
                      <p className="text-sm text-muted-foreground">
                        {project.year}
                      </p>
                      <p className="mt-2">{project.description}</p>
                      <span>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-primary hover:underline"
                        >
                          View on GitHub
                        </Link>
                        {project.demoLink && (
                          <Link
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block ml-4 mt-2 text-primary hover:underline"
                          >
                            Demo
                          </Link>
                        )}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
