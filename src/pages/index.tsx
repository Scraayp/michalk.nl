import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Image from "next/image";

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
    </main>
  );
}
