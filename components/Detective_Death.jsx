"use client";

import React, { forwardRef, useState } from "react";
import ReactModal from "react-modal";

const Detective_Death = (props, dDRef) => {
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  ReactModal.setAppElement("#detective-death");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section
      id="detective-death"
      className="h-screen w-screen flex justify-center items-center"
      ref={dDRef}
    >
      <div className="h-2/3 flex flex-col mr-36">
        <div className="h-full relative dd" onClick={openModal}>
          <img
            src="/assets/dd_3d.png"
            alt="Detective Death"
            className="h-full"
          />
          <img src="../assets/Preview.png" alt="" className="preview-button" />
        </div>
        <div>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Detective Death Preview"
            className="content"
            overlayClassName="overlay"
          >
            <iframe
              src="/assets/dd_preview.pdf"
              height="100%"
              width="100%"
            ></iframe>
          </ReactModal>
        </div>
        <div className="flex">
          <a
            href="https://www.amazon.com/Detective-Death-Scarlett-Mythical-Mysteries/dp/B0C2RPJ9RX/ref=sr_1_1?keywords=detective+death&qid=1698999137&sr=8-1"
            target="_blank"
            className="bg-amber-500 hover:bg-amber-600 contact_btn mx-auto"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
      <div className="description flex flex-col justify-evenly h-2/3 bg-stone-800 w-1/3 px-5">
        <h1 className="text-white font-serif text-center text-2xl mt-10 leading-loose">
          A DEATH GOD HUNTS FOR KILLERS, MYTHS, AND A NEW START
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

export default forwardRef(Detective_Death);
