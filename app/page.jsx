"use client";

import React, { useRef } from "react";
import "./globals.css";
import Detective_Death from "../components/Detective_Death";
import TMDUP from "../components/TMDUP";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Top from "../components/Top";
import {
  Libre_Baskerville,
  Cinzel,
  Cormorant_Garamond,
} from "next/font/google";

// fonts
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-baskerville",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});
const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: "400",
});

export default function Home() {
  const ddRef = useRef(null);
  const tmdupRef = useRef(null);
  const aboutRef = useRef(null);
  const headerRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className={`${baskerville.className} container`}>
      <div>
        <Nav
          ddRef={ddRef}
          tmdupRef={tmdupRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          headerRef={headerRef}
          cinzel={cinzel}
          garamond={garamond}
        />
      </div>
      <div>
        <Top ddRef={ddRef} tmdupRef={tmdupRef} headerRef={headerRef} />
      </div>
      <div ref={ddRef}>
        <Detective_Death />
      </div>
      <div ref={tmdupRef}>
        <TMDUP />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
