import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "./components/footer";
import NavbarComp from "./components/navbar";
import ContactForm from "./components/contactForm";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-G9V2N9XES1"); // Use your Google Analytics Measurement ID
  }, []);
  return (
    <main>
      <NavbarComp />
      <div id="mainContent">
        <h1 className="text-4xl font-bold text-center mt-32 text-black dark:text-white">
          <span className="text-primary">Hey!</span> I am Michal,
        </h1>
        <h2 className="text-3xl font-bold text-center mt-10 text-black dark:text-white">
          I build the <span className="text-primary">backend</span> side of apps
          and websites.
        </h2>
      </div>
      <div id="about" className="m-auto w-head mt-60 block">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-left text-4xl font-bold text-primary">About</h1>
            <p className="mt-5 font-semibold text-lg text-black dark:text-white">
              I am Michal, a software developer from{" "}
              <span className="text-primary">the Netherlands.</span> <br />I
              have been coding since 2012 and have been in{" "}
              <span className="text-primary">love</span> with it since. <br />
              In my free time, I spend the most time on{" "}
              <span className="text-primary">soccer</span>. <br />I am a player,
              referee, and a trainer at my local club.
            </p>

            <Link href="">
              <button className="mt-5 md:mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-darkbg bg-white rounded-md group-hover:bg-opacity-0">
                  CV<i className="fa-solid fa-file pl-3"></i>
                </span>
              </button>
            </Link>
          </div>

          <div className="flex-none md:ml-8 mt-8 md:-mt-20">
            <Image
              src={"/me.jpg"}
              alt="Yeah, that's me."
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div id="projects" className="m-auto w-4/5 mt-96 mb-40">
        <h1 className="text-left text-4xl font-bold text-primary block">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="project">
            <div className="block h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personal Portfolio
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                My first personal portfolio website.
              </p>
              <div>
                <span className="text-gray-400 text-sm italic">
                  Technologies used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span>
                  Next.js
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full ml-3 mr-1.5 flex-shrink-0"></span>
                  Tailwind
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full ml-3 mr-1.5 flex-shrink-0"></span>
                  Figma
                </span>
                <span className="text-gray-400 text-sm italic">
                  Languages used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 flex-shrink-0"></span>
                  Typescript
                </span>
                <span className="text-gray-400 text-sm italic">Links</span>
                <div className="y flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <Link
                    href="https://github.com/Scraayp/michalk.nl"
                    className=" hover:text-primary"
                  >
                    Repository
                  </Link>
                  <span className="ml-3 flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <Link
                    href="/api/redirect/portfolio"
                    className="hover:text-primary"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="block h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Discord Anti Spam
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A simple module with quick setup and different options to
                implement anti-spam features in your bot.
              </p>
              <div>
                <span className="text-gray-400 text-sm italic">
                  Technologies used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span>
                  NPM
                </span>
                <span className="text-gray-400 text-sm italic">
                  Languages used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 flex-shrink-0"></span>
                  Javascript
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  Typescript
                </span>
                <span className="text-gray-400 text-sm italic">Links</span>
                <div className="y flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <Link
                    href="https://github.com/Michael-J-Scofield/discord-anti-spam"
                    className=" hover:text-primary"
                  >
                    Repository
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="block h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                What to wear?
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A simple website telling you what you can wear based on the
                weather api.
              </p>
              <div>
                <span className="text-gray-400 text-sm italic">
                  Technologies used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span>
                  Meotosource API
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  NextJS
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  Tailwind
                </span>
                <span className="text-gray-400 text-sm italic">
                  Languages used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 flex-shrink-0"></span>
                  Javascript
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  Typescript
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  CSS
                </span>
                <span className="text-gray-400 text-sm italic">Links</span>
                <div className="y flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <Link
                    href="https://github.com/Scraayp/kleren.michalk.nl"
                    className=" hover:text-primary"
                  >
                    Repository
                  </Link>
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  <Link
                    href="https://kleren.michalk.nl"
                    className=" hover:text-primary"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="block h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mad Gamer
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A website I have made for my Front End Development Exam.
              </p>
              <div>
                <span className="text-gray-400 text-sm italic">
                  Technologies used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span>
                  NuxtJS
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  TailwindCSS
                </span>
                <span className="text-gray-400 text-sm italic">
                  Languages used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 flex-shrink-0"></span>
                  Javascript
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  Typescript
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  CSS
                </span>
                <span className="text-gray-400 text-sm italic">Links</span>
                <div className="y flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <Link
                    href="https://github.com/Scraayp/brouwwereld/tree/examen-FED2024"
                    className=" hover:text-primary"
                  >
                    Repository
                  </Link>
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  <Link
                    href="https://fd2024.michalk.nl/"
                    className=" hover:text-primary"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="block h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Status Page
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A uptime monitor / status page, which monitors my own projects.
              </p>
              <div>
                <span className="text-gray-400 text-sm italic">
                  Technologies used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span>
                  Uptime Kuma
                </span>

                <span className="text-gray-400 text-sm italic">Links</span>
                <div className="y flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <Link
                    href="https://github.com/louislam/uptime-kuma"
                    className=" hover:text-primary"
                  >
                    Repository
                  </Link>
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  <Link
                    href="https://status.michalk.nl"
                    className=" hover:text-primary"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="block h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Werkvervanger
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A website which will allow users to request easier work shifts
                replacements
              </p>
              <div>
                <span className="text-gray-400 text-sm italic">
                  Technologies used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 flex-shrink-0"></span>
                  Laravel
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  TailwindCSS
                  <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  NestJS
                </span>
                <span className="text-gray-400 text-sm italic">
                  Languages used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 flex-shrink-0"></span>
                  PHP
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  Typescript
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 ml-3 flex-shrink-0"></span>
                  CSS
                </span>
                <span className="text-gray-400 text-sm italic">Links</span>
                <div className="y flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <Link
                    href="https://github.com/Scraayp/werkvervanger"
                    className=" hover:text-primary"
                  >
                    Repository
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="w-head mb-40 m-auto align-middle justify-center"
      >
        <h1 className="text-left text-4xl font-bold text-primary block">
          Contact
        </h1>
        <div className="flex items-center flex-col md:flex-row ">
          <div id="formcontact">
            <ContactForm />
            <span className="block mt-5 text-gray-500 text-center sm:text-left">
              You can also contact me trough email.
              <br />
              <Link
                href="mailto:hello@michalk.nl"
                className="hover:text-primary"
              >
                hello@michalk.nl
              </Link>
            </span>
          </div>
          <div id="contactsocial">
            <h1 className="text-primary font-bold text-3xl hidden md:block">
              My (Social Media) accounts
            </h1>
            <div
              id="mobile"
              className="flex flex-row justify-center mt-10 text-primary dark:text-white md:hidden"
            >
              <a
                href="
            https://www.github.com/scraayp"
                target="_blank"
                onClick={() =>
                  ReactGA.event({
                    category: "Social Media",
                    action: "Click",
                    label: "GitHub",
                  })
                }
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="
              https://www.linkedin.com/in/michkolasa/"
                target="_blank"
                onClick={() =>
                  ReactGA.event({
                    category: "Social Media",
                    action: "Click",
                    label: "LinkedIn",
                  })
                }
              >
                <i className="fab fa-linkedin ml-4 fa-2x"></i>
              </a>
              <a
                href="https://www.twitter.com/scraayp
            "
                target="_blank"
                onClick={() =>
                  ReactGA.event({
                    category: "Social Media",
                    action: "Click",
                    label: "Twitter",
                  })
                }
              >
                <i className="fab fa-twitter ml-4 fa-2x"></i>
              </a>

              <a
                href="
              https://discord.gg/bWsYCZNKaU"
                target="_blank"
                onClick={() =>
                  ReactGA.event({
                    category: "Social Media",
                    action: "Click",
                    label: "Discord",
                  })
                }
              >
                <i className="fab fa-discord ml-4 fa-2x"></i>
              </a>
            </div>
            <div id="largescreen" className="hidden md:block">
              <div className="flex flex-col justify-center mt-10 text-white">
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
                  onClick={() =>
                    ReactGA.event({
                      category: "Social Media",
                      action: "Click",
                      label: "GitHub",
                    })
                  }
                >
                  <a
                    href="https://www.github.com/scraayp"
                    target="_blank"
                    onClick={() =>
                      ReactGA.event({
                        category: "Social Media",
                        action: "Click",
                        label: "GitHub",
                      })
                    }
                  >
                    <i className="fab fa-github mr-2 fa-1x"></i>
                    Github
                  </a>
                </button>
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
                >
                  <a
                    href="https://www.linkedin.com/in/michkolasa/"
                    target="_blank"
                    onClick={() =>
                      ReactGA.event({
                        category: "Social Media",
                        action: "Click",
                        label: "LinkedIn",
                      })
                    }
                  >
                    <i className="fab fa-linkedin mr-2 fa-1x"></i>
                    Linkedin
                  </a>
                </button>
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
                >
                  <a
                    href="https://www.twitter.com/scraayp"
                    target="_blank"
                    onClick={() =>
                      ReactGA.event({
                        category: "Social Media",
                        action: "Click",
                        label: "Twitter",
                      })
                    }
                  >
                    <i className="fab fa-twitter mr-2 fa-1x"></i>
                    Twitter
                  </a>
                </button>
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
                >
                  <a
                    href=" https://discord.gg/bWsYCZNKaU"
                    target="_blank"
                    onClick={() =>
                      ReactGA.event({
                        category: "Social Media",
                        action: "Click",
                        label: "Discord",
                      })
                    }
                  >
                    <i className="fab fa-discord mr-2 fa-1x"></i>
                    Discord
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Script src="https://kit.fontawesome.com/30c1fe66c2.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></Script>
    </main>
  );
}
