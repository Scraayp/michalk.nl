import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <footer className=" rounded-lg shadow  m-4">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pb-5">
        © 2023{" "}
        <a href="mailto:hello@michalk.nl" className="hover:underline">
          Michal
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
