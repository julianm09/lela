import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import useWindowSize from "../components/useWindowSize";
import "./app.css";
import { useState, useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const size = useWindowSize();

  return (
    <>
      <Nav width={size.width} />
      <Component {...pageProps} scrollPosition={scrollPosition} />
      <Footer {...pageProps} />
    </>
  );
}

export default MyApp;
