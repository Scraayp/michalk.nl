import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-lightbg dark:bg-darkbg">
        <script src="https://kit.fontawesome.com/30c1fe66c2.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
