"use client";

import "../app/globals.css";
import styles from "./Nav.module.scss";
// import Link from "next/link";
import React, { useEffect } from "react";
import Scrollspy from "react-scrollspy";

const Nav = (bookRef, aboutRef, contactRef) => {
  {
    bookRef, aboutRef, contactRef;
  }
  console.log(bookRef, aboutRef, contactRef);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
        console.log("At Home");
      } else if (
        aboutRef.current?.offsetTop - window.scrollY <
        window.innerHeight / 2
      ) {
        console.log("At About");
      } else if (
        bookRef.current?.offsetTop - window.scrollY <
        window.innerHeight / 2
      ) {
        console.log("At Books");
      } else {
        // Etc...
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll(top);
  };
  return (
    <section>
      <nav className="flex w-full fixed top-0">
        <button type="button" onClick={scrollToTop}>
          <img src="/assets/logo.png" className={styles.logo} alt="logo" />
        </button>
        <div className={styles.title}>
          <h1 className="text-center">
            DAR{" "}
            <span>
              <img src="/assets/feather.png" className={styles.feather} />
            </span>{" "}
            US EBRAHIMI
          </h1>
          <h4 className="text-center">Fantasy Author</h4>
        </div>
        <Scrollspy
          items={["detective-death", "about", "contact"]}
          currentClassName="bg-red-700"
          className="nav-links flex flex-col bg-gray-700/75 pb-0"
        >
          <li>
            <a
              href="#detective-death"
              className="text-center text-white hover:bg-red-700/75 rounded-md px-3 py-2 text-sm font-medium"
            >
              BOOKS
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-center text-white hover:bg-red-700/75 rounded-md px-3 py-2 text-sm font-medium"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-center text-white hover:bg-red-700/75 rounded-md px-3 py-2 text-sm font-medium"
            >
              CONTACT
            </a>
          </li>
        </Scrollspy>
      </nav>
      <div className="h-28"></div>
    </section>
  );
};

export default Nav;
