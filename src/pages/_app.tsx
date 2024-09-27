import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics once
    ReactGA.initialize("G-G9V2N9XES1");

    // Track page views when the route changes
    const handleRouteChange = (url: string) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };

    // Listen for route changes and track the page view
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
