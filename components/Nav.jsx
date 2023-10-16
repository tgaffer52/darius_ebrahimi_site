import React from "react";
import Image from "next/image";
import "@app/globals.css";
import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <section>
      <nav className="flex w-full fixed top-0">
        <Link href="/#top" passHref>
          <img src="/assets/logo.png" className={styles.logo} alt="logo" />
        </Link>
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
        <div className="nav-links flex flex-col bg-gray-700/75 pb-0">
          <Link
            passHref
            href="/#detective-death"
            className="text-center text-white hover:bg-red-700/75 rounded-md px-3 py-2 text-sm font-medium"
          >
            BOOKS
          </Link>
          <Link
            passHref
            href="/#about"
            className="text-center text-white hover:bg-red-700/75 rounded-md px-3 py-2 text-sm font-medium"
          >
            ABOUT
          </Link>
          <Link
            passHref
            href="/#contact"
            className="text-center text-white hover:bg-red-700/75 rounded-md px-3 py-2 text-sm font-medium"
          >
            CONTACT
          </Link>
        </div>
      </nav>
      <div className="h-28"></div>
    </section>
  );
};

export default Nav;
