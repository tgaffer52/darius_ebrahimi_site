import React from "react";
import "./globals.css";
import Instagram from "instagram-web-api";

import Image from "next/image";
import Link from "next/link";
import Detective_Death from "../components/Detective_Death";
import TDDUP from "../components/TMDUP";
import About from "../components/About";
import Contact from "../components/Contact";
// import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <main>
      <div
        className="flex flex-wrap justify-evenly w-screen min-h-screen py-10"
        id="home"
      >
        <a href="/#detective-death">
          <img
            src="/assets/Detective Death Cover.png"
            alt="Detective Death"
            className="book-cover"
          />
        </a>
        <a href="/#tmdup">
          <img
            src="/assets/TMDUP.jpg"
            alt="Till Myth Do Us Part"
            className="book-cover"
          />
        </a>
      </div>
      <Detective_Death />
      <TDDUP />
      <About />
      <Contact />
    </main>
  );
}
