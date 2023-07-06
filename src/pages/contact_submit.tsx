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
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Thank you for your submission!</h1>
                            <p className="card-text">We will get back to you as soon as possible.</p>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
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
