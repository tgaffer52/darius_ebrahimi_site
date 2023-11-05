"use client";

import React, { useRef, useState, useEffect } from "react";
import "./globals.css";
import Detective_Death from "../components/Detective_Death";
import TMDUP from "../components/TMDUP";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import styles from "../styles/Nav.module.scss";
// import { Link, animateScroll as scroll } from "react-scroll";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Home() {
  const homeRef = useRef(null);
  const dDRef = useRef(null);
  const tMDUPRef = useRef(null);
  const aboutRef = useRef(null);
  const headerRef = useRef(null);
  const contactRef = useRef(null);

  const [visibleSection, setVisibleSection] = useState();

  const sectionRefs = [
    { section: "dd", ref: dDRef },
    { section: "tmdup", ref: tMDUPRef },
    { section: "about", ref: aboutRef },
    { section: "contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    console.log(visibleSection);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const scrollToTop = () => {
    window.scroll(top);
  };

  return (
    <main>
      <section>
        <nav className={styles.navbar} ref={headerRef}>
          <button
            type="button"
            onClick={() => {
              scrollToTop();
            }}
          >
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
          <div
            className={styles.navRight}
            onMouseLeave={() => setSubnav(false)}
          >
            <ul className={styles.navLinks}>
              <ul
                className={
                  visibleSection === "dd" || visibleSection === "tmdup"
                    ? "nav-active"
                    : "nav-container"
                }
              >
                {subnav ? (
                  <>
                    <div className={styles.subnav}>
                      <li
                        className={
                          visibleSection === "dd"
                            ? "nav-active"
                            : "nav-container"
                        }
                      >
                        <button
                          type="button"
                          onClick={() => {
                            scrollTo(dDRef.current);
                          }}
                          className="nav-link"
                        >
                          DETECTIVE DEATH
                        </button>
                      </li>
                      <li
                        className={
                          visibleSection === "tmdup"
                            ? "nav-active"
                            : "nav-container"
                        }
                      >
                        <button
                          type="button"
                          onClick={() => {
                            scrollTo(tMDUPRef.current);
                          }}
                          className="nav-link"
                        >
                          TILL MYTH DO US PART
                        </button>
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
                  onMouseEnter={() => setSubnav(true)}
                >
                  BOOKS
                </button>
              </ul>
              <li
                className={
                  visibleSection === "about" ? "nav-active" : "nav-container"
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    scrollTo(aboutRef.current);
                  }}
                  className="nav-link"
                >
                  ABOUT
                </button>
              </li>
              <li
                className={
                  visibleSection === "contact" ? "nav-active" : "nav-container"
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    scrollTo(contactRef.current);
                  }}
                  className="nav-link"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <div
        className="flex flex-wrap justify-evenly items-start w-screen min-h-screen py-10"
        id="home"
      >
        <a
          onClick={() => {
            scrollTo(dDRef.current);
          }}
          className="mt-0 p-0"
        >
          <img
            src="/assets/Detective Death Cover.png"
            alt="Detective Death"
            className="book-cover"
          />
        </a>
        <a
          onClick={() => {
            scrollTo(tMDUPRef.current);
          }}
          className="nav-link"
        >
          <img
            src="/assets/TMDUP.jpg"
            alt="Till Myth Do Us Part"
            className="book-cover"
          />
        </a>
      </div>
      <div ref={dDRef}>
        <Detective_Death />
      </div>
      <div ref={tMDUPRef}>
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
