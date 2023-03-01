import Image from "next/image";
import Link from "next/link";

import pfp from "../../../public/pfp.png";

export default function Footer() {
  return (
    <footer className="p-4 rounded-lg shadow md:px-6 md:py-8">
      <hr className="my-6 border-white sm:mx-aut lg:my-8" />
      <span className="block text-sm text-white sm:text-center">
        © 2023{" "}
        <a href="mailto:hello@michalk.nl" className="hover:underline">
          Michal
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
