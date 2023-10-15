import React from "react";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import Detective_Death from "@components/Detective_Death";
import TDDUP from "@components/TMDUP";
import About from "@components/About";
import Contact from "@components/Contact";
// import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <main>
      <div
        className="flex flex-wrap justify-evenly w-screen min-h-screen py-10"
        id="home"
      >
        <Link href="#detective-death">
          <img
            src="/assets/Detective Death Cover.png"
            alt="Detective Death"
            className="book-cover"
          />
        </Link>
        <Link href="#tmdup">
          <img
            src="/assets/TMDUP.jpg"
            alt="Till Myth Do Us Part"
            className="book-cover"
          />
        </Link>
      </div>
      <Detective_Death />
      <TDDUP />
      <About />
      <Contact />
    </main>
  );
}
