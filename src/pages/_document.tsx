import { Html, Head, Main, NextScript } from "next/document";
import ReactGA from "react-ga4";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Document() {
  ReactGA.initialize("G-G9V2N9XES1");
  return (
    <Html lang="en">
      <Head />
      <body className="bg-lightbg dark:bg-darkbg">
        {/* Add the script code */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G9V2N9XES1"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G9V2N9XES1');
            `,
          }}
        />
        <Main />
        <NextScript />
        <SpeedInsights />
        <Analytics />
      </body>
    </Html>
  );
}
