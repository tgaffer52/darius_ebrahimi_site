"use client";

import React, { useRef, useState, useEffect } from "react";
import "./globals.css";
import styles from "../styles/Nav.module.scss";
import Detective_Death from "../components/Detective_Death";
import TMDUP from "../components/TMDUP";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
  Libre_Baskerville,
  Inknut_Antiqua,
  Cinzel,
  Cormorant_Garamond,
} from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

// fonts
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-baskerville",
});

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inknut",
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

// obtaining scroll height and visible sections
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
  const dDRef = useRef(null);
  const tMDUPRef = useRef(null);
  const aboutRef = useRef(null);
  const headerRef = useRef(null);
  const contactRef = useRef(null);
  const [subnav, setSubnav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  const [visibleSection, setVisibleSection] = useState();

  const sectionRefs = [
    { section: "dd", ref: dDRef },
    { section: "tmdup", ref: tMDUPRef },
    { section: "about", ref: aboutRef },
    { section: "contact", ref: contactRef },
  ];

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dh2hxvsxw",
    },
  });

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

      setWindowWidth(window.innerWidth);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    console.log(visibleSection);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  const showSubnav = () => setSubnav(!subnav);
  const scrollToTop = () => {
    window.scroll(top);
  };

  // images
  const logo = cld.image("darius_website/logo");
  const title = cld.image("darius_website/title");
  const dd = cld.image("darius_website/DD");
  const tmdup = cld.image("darius_website/TMDUP");
  const sun = cld.image("darius_website/sun");
  console.log(sun);

  return (
    <main className={`${baskerville.className} container`}>
      <div>
        <nav className={styles.navbar} ref={headerRef}>
          <button
            type="button"
            onClick={() => {
              scrollToTop();
            }}
          >
            <AdvancedImage cldImg={logo} className={styles.logo} alt="logo" />
          </button>
          <div className={styles.title}>
            <AdvancedImage
              cldImg={title}
              alt="darius ebrahimi"
              className="m-auto"
            />
            <div className={cinzel.className}>
              <h4 className="text-center">Fantasy Author</h4>
            </div>
          </div>
          <div
            className={styles.navRight}
            onMouseLeave={() => setSubnav(false)}
            onBlur={() => setSubnav(false)}
          >
            <ul className={styles.navLinks + " " + garamond.className}>
              <ul
                className={
                  visibleSection === "dd" || visibleSection === "tmdup"
                    ? styles.navActive
                    : styles.navContainer
                }
              >
                {subnav ? (
                  <>
                    <div className={styles.subnav}>
                      <li
                        className={
                          visibleSection === "dd"
                            ? styles.navActive
                            : styles.navContainer
                        }
                      >
                        <button
                          type="button"
                          onClick={() => {
                            scrollTo(dDRef.current);
                            setSubnav(false);
                          }}
                          className={styles.navLink}
                        >
                          DETECTIVE DEATH
                        </button>
                      </li>
                      <li
                        className={
                          visibleSection === "tmdup"
                            ? styles.navActive
                            : styles.navContainer
                        }
                      >
                        <button
                          type="button"
                          onClick={() => {
                            scrollTo(tMDUPRef.current);
                            setSubnav(false);
                          }}
                          className={styles.navLink}
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
                  className={styles.navLink}
                  onMouseEnter={() => setSubnav(true)}
                >
                  {windowWidth < 768 ? (
                    <FontAwesomeIcon icon={faBook} />
                  ) : (
                    "BOOKS"
                  )}
                </button>
              </ul>
              <li
                className={
                  visibleSection === "about"
                    ? styles.navActive
                    : styles.navContainer
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    scrollTo(aboutRef.current);
                  }}
                  className={styles.navLink}
                >
                  {windowWidth < 768 ? (
                    <FontAwesomeIcon icon={faUser} />
                  ) : (
                    "ABOUT"
                  )}
                </button>
              </li>
              <li
                className={
                  visibleSection === "contact"
                    ? styles.navActive
                    : styles.navContainer
                }
              >
                <button
                  type="button"
                  onClick={() => {
                    scrollTo(contactRef.current);
                  }}
                  className={styles.navLink}
                >
                  {windowWidth < 768 ? (
                    <FontAwesomeIcon icon={faEnvelope} />
                  ) : (
                    "CONTACT"
                  )}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

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
          <AdvancedImage
            cldImg={dd}
            alt="Detective Death"
            className="book-cover"
          />
        </a>
        <a
          onClick={() => {
            scrollTo(tMDUPRef.current);
          }}
          className={styles.navLink}
        >
          <AdvancedImage
            cldImg={tmdup}
            alt="Till Myth Do Us Part"
            className="book-cover"
          />
        </a>
      </div>
      <div className="border-black w-3/4"></div>
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
