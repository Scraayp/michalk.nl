import { Inter } from "next/font/google";
import NavbarComp from "./components/navbar";
import Image from "next/image";
import Footer from "./components/footer";
import Link from "next/link";
import Script from "next/script";

export default function Home() {

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
      <div id="about" className="m-auto w-head mt-60 block h-64">
        <h1 className="text-left text-4xl font-bold text-primary block">
          About
        </h1>
        <p className="mt-5 font-semibold text-lg inline-block text-black dark:text-white">
          I am Michal, a software developer from{" "}
          <span className="text-primary">the Netherlands.</span> <br />I have
          been coding since 2012 and have been in{" "}
          <span className="text-primary">love</span> with it since. <br />
          In my free time, I spend the most time on{" "}
          <span className="text-primary">soccer</span>. <br />I am a player,
          referee and a trainer at my local club.
        </p>
        <br />
        <Link href="/cv">
          <button className="mt-5 md:mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-darkbg bg-white rounded-md group-hover:bg-opacity-0">
              CV<i className="fa-solid fa-file pl-3"></i>
            </span>
          </button>
        </Link>

        <Image
          src={"/me.jpg"}
          alt="Yeah, that's me."
          width={400}
          height={400}
          className="rounded-full right-0 float-right mt-16 mb-16 md:mb-0 md:mt-0"
        />
      </div>
      <div id="projects" className="m-auto w-head mt-96 mb-40">
        <h1 className="text-left text-4xl font-bold text-primary block">
          Projects
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="project mt-10">
            <div className="block md:w-96 w-auto h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
                <span className="text-gray-400 text-sm italic">Github:</span>
                <div className="hover:underline hover:text-primary flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <a href="https://github.com/Scraayp/michalk.nl">Repository</a>
                </div>
              </div>
            </div>
          </div>
          <div className="project mt-10">
            <div className="block md:w-96 w-auto h-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
                  NPM Modules
                </span>
                <span className="text-gray-400 text-sm italic">
                  Languages used:
                </span>
                <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full mr-1.5 flex-shrink-0"></span>
                  Javascript
                  <span className="flex w-2.5 h-2.5 bg-yellow-300 rounded-full ml-3 mr-1.5 flex-shrink-0"></span>
                  Typescript
                </span>
                <span className="text-gray-400 text-sm italic">Github:</span>
                <div className="hover:underline hover:text-primary flex items-center text-sm font-medium text-gray-900 dark:text-white">
                  <span className="flex w-2.5 h-2.5 bg-purple-600 rounded-full mr-1.5 flex-shrink-0"></span>
                  <a href="https://github.com/Michael-J-Scofield/discord-anti-spam">
                    Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="m-auto w-head mb-40">
        <h1 className="text-left text-4xl font-bold text-primary block">
          Contact
        </h1>
        <div className="flex items-center flex-col md:flex-row">
          <div id="formcontact">
            <form
              className="mt-10"
              action="https://send.pageclip.co/azcmdAiGz3zpcFLkoMStgQZlZk8UFkj0/michalk-forms-contact"
              method="POST"
            >
              <div className="relative z-0 w-80 mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-80 mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-80 mb-6 group">
                  <input
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Phone number (+3689716634)
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-80 mb-6 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Subject
                </label>
              </div>
              <div className="relative z-0 w-80 mb-6 group">
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block py-2.5 px-0 w-full h-20 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                ></textarea>
              </div>
              <button
                type="submit"
                className="center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
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
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="
              https://www.linkedin.com/in/michkolasa/"
                target="_blank"
              >
                <i className="fab fa-linkedin ml-4 fa-2x"></i>
              </a>
              <a
                href="https://www.twitter.com/scraayp
            "
                target="_blank"
              >
                <i className="fab fa-twitter ml-4 fa-2x"></i>
              </a>

              <a
                href="
              https://discord.gg/bWsYCZNKaU"
                target="_blank"
              >
                <i className="fab fa-discord ml-4 fa-2x"></i>
              </a>
            </div>
            <div id="largescreen" className="hidden md:block">
              <div className="flex flex-col justify-center mt-10 text-white">
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
                >
                  <i className="fab fa-github mr-2 fa-1x"></i>
                  Github
                </button>
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
                >
                  <i className="fab fa-linkedin mr-2 fa-1x"></i>
                  Linkedin
                </button>
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
                >
                  <i className="fab fa-twitter mr-2 fa-1x"></i>
                  Twitter
                </button>
                <button
                  type="button"
                  className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary"
                >
                  <i className="fab fa-discord mr-2 fa-1x"></i>
                  Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Script src="https://s.pageclip.co/v1/pageclip.js"></Script>
      <Script src="https://kit.fontawesome.com/30c1fe66c2.js"></Script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></script>
    </main>
  );
}
