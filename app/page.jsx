"use client";

import React, { useRef } from "react";
import "./globals.css";
import Instagram from "instagram-web-api";

import Image from "next/image";
import Link from "next/link";
import Detective_Death from "../components/Detective_Death";
import TMDUP from "../components/TMDUP";
import About from "../components/About";
import Contact from "../components/Contact";
import Homepage from "../components/Homepage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const bookRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  return (
    <main>
      <Nav bookRef={bookRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Homepage />
      <Detective_Death />
      <TMDUP />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
