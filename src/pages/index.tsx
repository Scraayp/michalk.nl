import Head from "next/head";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michal | Software Developer.</title>
        <meta
          name="description"
          content="Homepage | Michal, Software Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </>
  );
}
