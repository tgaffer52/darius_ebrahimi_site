"use client";

import { Router, useRouter } from "next/navigation";
import { React, forwardRef, useRef, useEffect } from "react";

const Homepage = (props, homeRef) => {
  return (
    <div
      className="flex flex-wrap justify-evenly w-screen min-h-screen py-10"
      id="home"
      ref={homeRef}
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

export default forwardRef(Homepage);
