"use client";

import { Router, useRouter } from "next/navigation";
import { React, useRef, useEffect } from "react";

const Homepage = () => {
  const ref = useRef(null);
  const home = ref.current;
  const router = useRouter();
  let options = {
    root: home,
    rootMargin: "0px",
    threshold: 1.0,
  };

  function pushUrl() {
    console.log("at homepage");
    // router.push("/#home");
  }

  useEffect(() => {
    let observer = new IntersectionObserver(pushUrl, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return (
    <div
      className="flex flex-wrap justify-evenly w-screen min-h-screen py-10"
      id="home"
      ref={ref}
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
  );
};

export default Homepage;
