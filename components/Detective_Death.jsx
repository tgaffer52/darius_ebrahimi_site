"use client";

import React, { useRef, useEffect } from "react";

const Detective_Death = () => {
  const DD = useRef();
  const home = DD.current;
  let options = {
    root: home,
    rootMargin: "0px",
    threshold: 1.0,
  };

  function pushUrl(entries) {
    console.log(entries);
    console.log("at Detective Death");
  }

  useEffect(() => {
    let observer = new IntersectionObserver(pushUrl, options);
    if (DD.current) observer.observe(DD.current);

    return () => {
      if (DD.current) observer.unobserve(DD.current);
    };
  }, [DD, options]);

  return (
    <section
      id="detective-death"
      className="h-screen w-screen flex justify-evenly items-center"
      ref={DD}
    >
      <img
        src="/assets/Detective Death Cover.png"
        alt="Detective Death"
        className="h-2/3"
      />
      <div className="description flex flex-col justify-between h-2/3 bg-stone-800 w-1/3 px-5">
        <h1 className="text-white font-serif text-center text-2xl mt-10 leading-loose">
          A DEATH HUNTS FOR KILLERS, MYTHS, AND A NEW START
        </h1>
        <video className="w-full" controls>
          <source src="assets/DD_Video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="dd-reviews flex justify-evenly text-white">
          <div className="review w-1/3 m-3">
            <p>"A truly original mystery that is humorous, clever, and fun."</p>
            <br />
            <p>-- Reader's Favorite (Starred)</p>
          </div>
          <div className="review w-1/3 m-3">
            <p>"A sublimely bizarre detective story"</p>
            <br />
            <p>-- Kirkus Reviews (Starred)</p>
          </div>
          <div className="review w-1/3 m-3">
            <p>
              "<em>Detective Death</em> manages the impressive feat of living up
              to such a memorable title
            </p>
            <br />
            <p>-- Indiereader</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detective_Death;
