import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Image from "next/image";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [starsCount, setStarsCount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const repoUrl = "Scraayp/michalk.nl";
      const res = await fetch(`https://api.github.com/repos/${repoUrl}`);
      const repo = await res.json();
      setStarsCount(repo.stargazers_count);
    }

    fetchData();
  }, []);

  return (
    <main>
      <Navbar />
      <div id="mainContent">
        <h1 className="text-4xl font-bold text-center mt-32 text-black dark:text-white">
          <span className="text-primary">Hey!</span> I am Michal,
        </h1>
        <h2 className="text-3xl font-bold text-center mt-10 text-black dark:text-white">
          I build the <span className="text-primary">backend</span> side of apps
          and websites.
        </h2>
      </div>
      <div id="about" className="m-auto w-head mt-60 block h-64">
        <h1 className="text-left text-4xl font-bold text-primary block">
          About
        </h1>
        <p className="mt-5 font-semibold text-lg inline-block text-black dark:text-white">
          I am Michal a software developer from{" "}
          <span className="text-primary">the Netherlands.</span> <br />I have
          been coding since 2012 and have been in{" "}
          <span className="text-primary">love</span> with it since. <br />
          In my free time, I spend the most time on{" "}
          <span className="text-primary">soccer</span>. <br />I am a player,
          referee and a trainer at my local club.
        </p>
        <br />
        <Link href="/cv">
          <button className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-darkbg7 rounded-md group-hover:bg-opacity-0">
              CV<i className="fa-solid fa-file pl-3"></i>
            </span>
          </button>
        </Link>

        <Image
          src={"/me.jpg"}
          alt="Yeah, that's me."
          width={400}
          height={400}
          className="rounded-full right-0 float-right"
        />
      </div>
      <div id="projects" className="m-auto w-head mt-96 mb-40">
        <h1 className="text-left text-4xl font-bold text-primary block">
          Projects
        </h1>
        <div className="flex flex-row space-x-4">
          <div className="project mt-10">
            <Link
              href="./api/redirect/portfolio"
              className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personal Portfolio
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                My first personal portfolio website.
              </p>
              <span className="text-gray-400 text-sm italic">
                Technologies used:
              </span>
              <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                <span className="flex w-2.5 h-2.5 bg-primary rounded-full mr-1.5 flex-shrink-0"></span>
                Next.js
                <span className="flex w-2.5 h-2.5 bg-primary rounded-full ml-3 mr-1.5 flex-shrink-0"></span>
                Tailwind
                <span className="flex w-2.5 h-2.5 bg-primary rounded-full ml-3 mr-1.5 flex-shrink-0"></span>
                Figma
              </span>
              <span className="text-gray-400 text-sm italic">
                Languages used:
              </span>
              <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                <span className="flex w-2.5 h-2.5 bg-primary rounded-full mr-1.5 flex-shrink-0"></span>
                Typescript
              </span>
              <span className="text-gray-400 text-sm italic">Github:</span>
              {/* <div className="hover:underline hover:text-primary flex items-center text-sm font-medium text-gray-900 dark:text-white">
                <a href="https://github.com/Scraayp/michalk.nl">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  Repository
                </a>
              </div> */}
            </Link>
          </div>
          <div className="project mt-10">
            <Link
              href="./api/redirect/discordantispam"
              className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Discord Anti Spam
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                A simple module with quick setup and different options to
                implement anti-spam features in your bot.
              </p>
              <span className="text-gray-400 text-sm italic">
                Technologies used:
              </span>
              <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                <span className="flex w-2.5 h-2.5 bg-primary rounded-full mr-1.5 flex-shrink-0"></span>
                NPM Modules
                <span className="flex w-2.5 h-2.5 bg-primary rounded-full ml-3 mr-1.5 flex-shrink-0"></span>
                Open Source Contributing
              </span>
              <span className="text-gray-400 text-sm italic">
                Languages used:
              </span>
              <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                <span className="flex w-2.5 h-2.5 bg-primary rounded-full mr-1.5 flex-shrink-0"></span>
                Javascript
                <span className="flex w-2.5 h-2.5 bg-primary rounded-full ml-3 mr-1.5 flex-shrink-0"></span>
                Typescript
              </span>
              <span className="text-gray-400 text-sm italic">Github:</span>
              <div className="hover:underline hover:text-primary flex items-center text-sm font-medium text-gray-900 dark:text-white">
                <Link href="https://github.com/Scraayp/michalk.nl">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  Repository
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div id="contact" className="m-auto w-head mt-96 mb-40">
        <h1 className="text-left text-4xl font-bold text-primary block">
          Contact
        </h1>
      </div>
      <Footer />
    </main>
  );
}
