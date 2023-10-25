"use client";

import React, { forwardRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../app/globals.css";

const About = (props, aboutRef) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  });
  return (
    <section
      id="about"
      className="min-h-screen w-screen flex justify-evenly items-center"
      ref={aboutRef}
    >
      <div className="w-1/2">
        <div ref={sliderRef} className="keen-slider m-12">
          <div className="keen-slider__slide w-1/2 bg-cover">
            <img src="/assets/book-castle.jpg" className="" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/assets/deer.jpg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="assets/ivy.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-white/50">
        <p className="text-2xl leading-loose p-5">
          Winner of the 2023 IndieReader Discovery Award for Fantasy. Darius
          Ebrahimi is inspired by mythology, his Persian-American heritage, and
          traveling the world. A graduate of the University of Colorado at
          Boulder and University of Texas at Austin, with a BA in Economics and
          MS in Finance respectively, Darius has been writing full-time since
          2018. He is currently living in San Francisco with his cat, Ivy, and
          is working on his next book.
        </p>
      </div>
    </section>
  );
};

export default forwardRef(About);
