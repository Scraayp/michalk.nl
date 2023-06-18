import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-lightbg dark:bg-darkbg">
        <Script src="https://kit.fontawesome.com/30c1fe66c2.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
