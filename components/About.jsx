"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../app/globals.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const About = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dh2hxvsxw",
    },
  });

  const carousel1 = cld.image("darius_website/carousel/carousel1.jpg");
  const carousel2 = cld.image("darius_website/carousel/carousel2.jpg");
  const carousel3 = cld.image("darius_website/carousel/carousel3.jpg");
  const carousel4 = cld.image("darius_website/carousel/carousel4.jpg");
  const carousel5 = cld.image("darius_website/carousel/carousel5.jpg");
  const carousel6 = cld.image("darius_website/carousel/carousel6.jpg");

  // insta box
  const lightsaberIvy = cld.image("darius_website/instabox/lightsaber_ivy.jpg");
  const family = cld.image("darius_website/instabox/family.jpg");
  const headshot = cld.image("darius_website/instabox/headshot.jpg");
  const ivy = cld.image("darius_website/instabox/ivy.jpg");
  const vegas = cld.image("darius_website/instabox/vegas.jpg");
  const bookCastle = cld.image("darius_website/instabox/book-castle.jpg");

  return (
    <div
      id="about"
      className="min-h-screen w-screen flex flex-col justify-evenly"
    >
      <h1 className="text-center text-3xl pt-8">About Darius</h1>
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="w-full md:w-3/5 lg:w-1/2 p-8">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <AdvancedImage cldImg={carousel1} alt="carousel1" />
            </div>
            <div className="keen-slider__slide">
              <AdvancedImage cldImg={carousel2} alt="carousel2" />
            </div>
            <div className="keen-slider__slide">
              <AdvancedImage cldImg={carousel3} alt="carousel3" />
            </div>
            <div className="keen-slider__slide">
              <AdvancedImage cldImg={carousel4} alt="carousel4" />
            </div>
            <div className="keen-slider__slide">
              <AdvancedImage cldImg={carousel5} alt="carousel5" />
            </div>
            <div className="keen-slider__slide">
              <AdvancedImage cldImg={carousel6} alt="carousel6" />
            </div>
          </div>
        </div>
        <a
          href="https://www.instagram.com/dariusebrahimi"
          target="_blank"
          className="md:w-1/5 insta-box mx-8"
        >
          <div className="bg-white text-center py-3">
            <h3 className="insta-title">-FIND ME ON INSTAGRAM-</h3>
            <div className="flex md:flex-wrap items-center justify-evenly">
              <AdvancedImage
                cldImg={lightsaberIvy}
                className="insta-photo"
                alt="insta-photo"
              />
              <AdvancedImage
                cldImg={family}
                className="insta-photo"
                alt="insta-photo"
              />
              <AdvancedImage
                cldImg={headshot}
                className="insta-photo"
                alt="insta-photo"
              />
              <AdvancedImage
                cldImg={bookCastle}
                className="insta-photo hidden md:block"
                alt="insta-photo"
              />
              <AdvancedImage
                cldImg={vegas}
                className="insta-photo hidden md:block"
                alt="insta-photo"
              />
              <AdvancedImage
                cldImg={ivy}
                className="insta-photo hidden md:block"
                alt="insta-photo"
              />
            </div>
          </div>
        </a>
      </div>
      <div className="m-8 bg-white/75">
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
    </div>
  );
};

export default About;
