import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Navbar } from "flowbite-react";

export default function navbar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://michalk.nl" className="mt-4 ml-4">
        <Image
          src="./logo.png"
          className="mr-3 h-8 sm:h-9 rounded-full"
          alt="Scraayp's Logo"
        />
        <span className="self-center whitespace-nowrap font-semibold text-primary text-3xl dark:text-white">
          Michal
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-xl hover:text-primary">
          Home
        </Navbar.Link>
        <Navbar.Link href="#about" className="text-xl hover:text-primary">
          About
        </Navbar.Link>
        <Navbar.Link href="#projects" className="text-xl hover:text-primary">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#contact" className="text-xl hover:text-primary">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
