"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../app/globals.css";

const About = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <section
      id="about"
      className="min-h-screen w-screen justify-evenly items-center"
    >
      <div className="flex justify-evenly items-center">
        <div className="w-1/2">
          <div ref={sliderRef} className="keen-slider m-12">
            <div className="keen-slider__slide">
              <img src="/assets/carousel/carousel1.jpg" alt="carousel1" />
            </div>
            <div className="keen-slider__slide">
              <img src="/assets/carousel/carousel2.jpg" alt="carousel2" />
            </div>
            <div className="keen-slider__slide">
              <img src="/assets/carousel/carousel3.jpg" alt="carousel3" />
            </div>
            <div className="keen-slider__slide">
              <img src="/assets/carousel/carousel4.jpg" alt="carousel4" />
            </div>
            <div className="keen-slider__slide">
              <img src="/assets/carousel/carousel5.jpg" alt="carousel5" />
            </div>
            <div className="keen-slider__slide">
              <img src="/assets/carousel/carousel6.jpg" alt="carousel6" />
            </div>
          </div>
        </div>
        <a
          href="https://www.instagram.com/dariusebrahimi"
          target="_blank"
          className="w-1/5 insta-box"
        >
          <div className="bg-white text-center py-3">
            <h1 className="insta-title">-FIND ME ON INSTAGRAM-</h1>
            <div className="flex flex-wrap items-center justify-evenly">
              <img
                src="/assets/instabox/lightsaber_ivy.jpg"
                className="insta-photo"
                alt=""
              />
              <img
                src="/assets/instabox/family.jpg"
                className="insta-photo"
                alt=""
              />
              <img
                src="/assets/instabox/headshot.jpg"
                className="insta-photo"
                alt=""
              />
              <img
                src="/assets/instabox/book-castle.jpg"
                className="insta-photo"
                alt=""
              />
              <img
                src="/assets/instabox/vegas.jpg"
                className="insta-photo"
                alt=""
              />
              <img
                src="assets/instabox/ivy.jpg"
                className="insta-photo"
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
      <div className="m-16 bg-white/75">
        <p className="text-xl leading-loose p-5">
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

export default About;
