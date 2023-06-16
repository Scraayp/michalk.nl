import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Image from "next/image";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <a href="/cv">
          <button className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              CV<i className="fa-solid fa-file pl-3"></i>
            </span>
          </button>
        </a>

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
        <p className="mt-5 font-semibold text-lg inline-block text-black dark:text-white">
          I am Michal a software developer from{" "}
          <span className="text-primary">the Netherlands.</span> <br />I have
          been coding since 2012 and have been in{" "}
          <span className="text-primary">love</span> with it since. <br />
          In my free time, I spend the most time on{" "}
          <span className="text-primary">soccer</span>. <br />I am a player,
          referee and a trainer at my local club.
        </p>
      </div>
      <Footer />
    </main>
  );
}
