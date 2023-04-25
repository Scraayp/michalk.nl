import Head from "next/head";
import Image from "next/image";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import pfp from "../../public/logo.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michal | Software Developer</title>
        <meta
          name="description"
          content="Homepage | Michal, Software Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Image
        src={pfp}
        alt="pfp"
        width={400}
        height={400}
        className="logo-img rounded-full"
      />
      <Footer />
    </>
  );
}
