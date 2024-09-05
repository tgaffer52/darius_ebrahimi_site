"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../app/globals.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import Arrow from "./Arrow"

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      loop: true,
      slides: {
        perView: 3,
        spacing: 15,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    });

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dh2hxvsxw",
    },
  });

  const carousel1 = cld.image("darius_website/carousel/carousel1.jpg");
  const carousel2 = cld.image("darius_website/carousel/carousel2.jpg");
  const carousel3 = cld.image(
    "darius_website/carousel/family.jpg"
  );
  const carousel4 = cld.image("darius_website/carousel/carousel4.jpg");
  const carousel5 = cld.image("darius_website/carousel/carousel5.jpg");
  const carousel6 = cld.image("darius_website/carousel/carousel6.jpg");

  // insta box
  const goalie = cld.image("darius_website/instabox/goalie.jpg");
  const stairs = cld.image("darius_website/instabox/stairs.jpg");
  const headshot = cld.image("darius_website/instabox/headshot.jpg");
  const ivy = cld.image("darius_website/instabox/ivy.jpg");
  const vegas = cld.image("darius_website/instabox/vegas.jpg");
  const bookCastle = cld.image("darius_website/instabox/book-castle.jpg");

  return (
    <div
      id="about"
      className="min-h-screen w-screen flex flex-col justify-evenly"
    >
      <h1 className="w-3/4 mx-auto text-center text-3xl pt-8 serif">
        About Darius Ebrahimi
      </h1>
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="w-full md:w-3/5 2xl:w-1/2 p-8">
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <AdvancedImage
                  cldImg={carousel1}
                  alt="carousel1"
                  className="carousel-img"
                />
              </div>
              <div className="keen-slider__slide">
                <AdvancedImage
                  cldImg={carousel2}
                  alt="carousel2"
                  className="carousel-img"
                />
              </div>
              <div className="keen-slider__slide">
                <AdvancedImage
                  cldImg={carousel3}
                  alt="carousel3"
                  className="carousel-img"
                />
              </div>
              <div className="keen-slider__slide">
                <AdvancedImage
                  cldImg={carousel4}
                  alt="carousel4"
                  className="carousel-img"
                />
              </div>
              <div className="keen-slider__slide">
                <AdvancedImage
                  cldImg={carousel5}
                  alt="carousel5"
                  className="carousel-img"
                />
              </div>
              <div className="keen-slider__slide">
                <AdvancedImage cldImg={carousel6} alt="carousel6" />
              </div>
              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <a
          href="https://www.instagram.com/dariusebrahimi"
          target="_blank"
          className="insta-box"
        >
          <div className="bg-white text-center py-3">
            <h3 className="insta-title">-FIND ME ON INSTAGRAM-</h3>
            <div className="flex md:flex-wrap items-center justify-evenly px-2">
              <AdvancedImage
                cldImg={goalie}
                className="insta-photo goalie"
                alt="insta-photo"
              />
              <AdvancedImage
                cldImg={stairs}
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
                className="insta-photo"
                alt="insta-photo"
              />
              <AdvancedImage
                cldImg={vegas}
                className="insta-photo"
                alt="insta-photo"
              />
              <AdvancedImage
                cldImg={ivy}
                className="insta-photo hidden sm:block"
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
