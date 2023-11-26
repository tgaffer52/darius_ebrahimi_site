import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import styles from "../styles/Nav.module.scss";

const Nav = ({
  cinzel,
  garamond,
  aboutRef,
  ddRef,
  tmdupRef,
  contactRef,
  headerRef,
}) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [visibleSection, setVisibleSection] = useState();
  const sectionRefs = [
    { section: "dd", ref: ddRef },
    { section: "tmdup", ref: tmdupRef },
    { section: "about", ref: aboutRef },
    { section: "contact", ref: contactRef },
  ];

  const [subnav, setSubnav] = useState(false);

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

  const showSubnav = () => setSubnav(!subnav);
  const scrollToTop = () => {
    window.scroll(top);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
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
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    console.log(visibleSection);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  // images
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dh2hxvsxw",
    },
  });
  const logo = cld.image("darius_website/logo");
  const title = cld.image("darius_website/title");
  return (
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
      <div className={styles.navRight} onMouseLeave={() => setSubnav(false)}>
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
                        scrollTo(ddRef.current);
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
                        scrollTo(tmdupRef.current);
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
              {windowWidth < 768 ? <FontAwesomeIcon icon={faBook} /> : "BOOKS"}
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
              {windowWidth < 768 ? <FontAwesomeIcon icon={faUser} /> : "ABOUT"}
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
  );
};

export default Nav;
