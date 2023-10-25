"use client";

import "../app/globals.css";
import styles from "./Nav.module.scss";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";

const Nav = () => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
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
        <div className="nav-right relative">
          <ul className="nav-links flex flex-col justify-evenly bg-gray-700/75 pb-0">
            <li className="w-full text-center hover:bg-red-700/75 rounded-md px-3 py-2">
              {subnav ? (
                <>
                  <div className="bg-gray-700/75 absolute w-44 right-24 list-none">
                    <li className="w-full text-center hover:bg-red-700/75 rounded-md px-3 py-2">
                      <a href="#detective-death" className="nav-link">
                        DETECTIVE DEATH
                      </a>
                    </li>
                    <li className="w-full text-center hover:bg-red-700/75 rounded-md px-3 py-2">
                      <a href="#tmdup" className="nav-link">
                        TILL MYTH DO US PART
                      </a>
                    </li>
                  </div>
                </>
              ) : null}
              <button
                type="button"
                onClick={() => {
                  showSubnav();
                }}
                className="nav-link"
              >
                BOOKS
              </button>
            </li>
            <li className="w-full text-center hover:bg-red-700/75 rounded-md px-3 py-2">
              <a href="#about" className="nav-link">
                ABOUT
              </a>
            </li>
            <li className="w-full text-center hover:bg-red-700/75 rounded-md px-3 py-2">
              <a href="#contact" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="h-28"></div>
    </section>
  );
};

export default Nav;
