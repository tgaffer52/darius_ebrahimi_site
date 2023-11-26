import React, { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import styles from "../styles/Nav.module.scss";

const Top = ({ ddRef, tmdupRef, headerRef }) => {
  const [visibleSection, setVisibleSection] = useState();
  const sectionRefs = [
    { section: "dd", ref: ddRef },
    { section: "tmdup", ref: tmdupRef },
  ];

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
  const dd = cld.image("darius_website/dd");
  const tmdup = cld.image("darius_website/tmdup");
  return (
    <div
      className="flex flex-wrap justify-evenly items-start w-screen min-h-screen py-10"
      id="home"
    >
      <a
        onClick={() => {
          scrollTo(ddRef.current);
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
          scrollTo(tmdupRef.current);
        }}
        className={styles.navLink}
      >
        <AdvancedImage
          cldImg={tmdup}
          alt="Till Myth Do Us Part"
          className="book-cover"
        />
      </a>
      <div className="border-black w-3/4"></div>
    </div>
  );
};

export default Top;
