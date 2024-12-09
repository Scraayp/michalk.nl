/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ | Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error(response);
        setStatus("❌ | Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again later.");
    }
  };
  return (
    <main>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),rgba(15,23,42,0))]"></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div
            className="lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Michal</span>
            </h1>

            <p className="text-gray-400 mb-8 max-w-lg">
              I'm a passionate developer based in the Netherlands with a keen
              eye for modern design.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link href="#contact">
                <button className="relative inline-flex items-center justify-center rounded-full p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-3.5 py-3.5 rounded-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                    Contact me!
                  </span>
                </button>
              </Link>
              <Link href="#projects">
                <button className="relative inline-flex items-center justify-center rounded-full p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-blue-500 to-cyan-300 group-hover:from-purple-600 group-hover:to-cyan-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-3.5 py-3.5 rounded-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                    See my work!
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
              <Image
                src="/pfp.jpg"
                width={320}
                height={320}
                alt="Profile"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover relative z-10 mx-auto animate-float"
              />
            </div>
            {/* <div
              className="absolute top-0 -left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"
              style={"animation-delay: 0.5s"}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/20 rounded-full animate-float"
              style={"animation-delay: 1s"}
            ></div> */}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 relative ">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center gradient-text"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-left">
              <div className="gradient-border">
                <div className=" p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">My Education</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-2 bg-primary rounded relative">
                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-1 top-0"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Economics & Businness</h4>
                        <p className="text-gray-400">
                          VMBO-Kader (2018 - 2022)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 bg-primary rounded relative">
                        <div className="absolute w-4 h-4 bg-primary rounded-full -gleft-1 top-0"></div>
                      </div>
                      <div>
                        <h3 className="font-bold decoration-primary decoration-2">
                          Software Developer
                        </h3>

                        <p className="text-gray-400">MBO-4 (2022 - Present)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="gradient-border">
                <div className="bg-dark p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">
                    My Work Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-2 rounded relative">
                        <div className="absolute w-4 h-4  rounded-full -left-1 top-0"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">
                          Intern - Software Developer
                        </h4>
                        <p className="text-gray-400">
                          <Link
                            href="https://retrii.com/"
                            className="hover:text-gray-200"
                          >
                            Retrii
                          </Link>{" "}
                          - (2023 - 2024)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 rounded relative">
                        <div className="absolute w-4 h-4  rounded-full -left-1 top-0"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Tech Support</h4>
                        <p className="text-gray-400">
                          <Link
                            href="https://mc-node.net/"
                            className="hover:text-gray-200"
                          >
                            MC-Node
                          </Link>{" "}
                          - (2023 - present)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 bg-primary rounded relative">
                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-1 top-0"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Developer</h4>
                        <p className="text-gray-400">
                          <Link
                            href="https://www.linkedin.com/company/geffen-products/"
                            className="hover:text-gray-200"
                          >
                            Geffenproducts
                          </Link>{" "}
                          - (2024 - present)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="skills" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center gradient-text"
            data-aos="fade-up"
          >
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
              className="glass-effect p-6 rounded-xl text-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <i className="fab fa-react text-4xl text-primary mb-4"></i>
              <h3 className="font-bold mb-2">React</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary w-[90%] h-full rounded-full"></div>
              </div>
            </div>
            <div
              className="glass-effect p-6 rounded-xl text-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <i className="fab fa-vuejs text-4xl text-primary mb-4"></i>
              <h3 className="font-bold mb-2">Vue</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary w-[90%] h-full rounded-full"></div>
              </div>
            </div>
            <div
              className="glass-effect p-6 rounded-xl text-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <i className="fab fa-vuejs text-4xl text-primary mb-4"></i>
              <h3 className="font-bold mb-2">Typescript</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary w-[90%] h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center gradient-text"
            data-aos="fade-up"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="gradient-border">
                <div className="bg-dark rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Discord Anti Spam
                    </h3>
                    <p className="text-gray-400 mb-4">
                      A simple discord anti spam node.js module to prevent spam
                      on your discord server
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                        Typescript
                      </span>
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                        Javascript
                      </span>
                      <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                        Node.js
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <Link
                        href="https://github.com/Michael-J-Scofield/discord-anti-spam"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <i className="fab fa-github text-xl"></i>
                      </Link>
                      {/* <a
                        href="#"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xl"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold mb-12 text-center gradient-text"
            data-aos="fade-up"
          >
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6" data-aos="fade-right">
              <h3 className="text-2xl font-bold">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400">
                Feel free to reach out for collaborations or just a friendly
                hello
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <Link href="mailto:hello@michalk.nl">
                      <p className="text-gray-400">hello@michalk.nl</p>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-gray-400">The Netherlands</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <i className="fa-brands fa-discord text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Discord</h4>
                    <p className="text-gray-400">scraayp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border" data-aos="fade-left">
              <form
                onSubmit={handleSubmit}
                className="bg-dark p-6 rounded-xl space-y-6"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary glass-effect"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary glass-effect"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary glass-effect"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 rounded-lg overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Send Message
                  </span>
                </button>
                {status && <p className="text-sm text-gray-400">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
