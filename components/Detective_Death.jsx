"use client";

import React, { useState } from "react";
import ReactModal from "react-modal";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { AdvancedVideo } from "@cloudinary/react";
import {} from "../app/page";

const Detective_Death = () => {
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  ReactModal.setAppElement("#detective-death");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dh2hxvsxw",
    },
  });

  const dd_3d = cld.image("darius_website/dd_3d");
  const dd_vid = cld.video("darius_website/DD_Video");
  return (
    <div
      id="detective-death"
      className="min-h-screen min-w-screen flex flex-wrap justify-evenly items-center py-16"
    >
      <div className="lg:w-1/3 flex flex-col items-center">
        <div className="h-full relative dd">
          <AdvancedImage
            cldImg={dd_3d}
            alt="Detective Death"
            className="h-full"
          />
          <button
            type="button"
            alt="preview-button"
            className="preview-button"
            onClick={openModal}
          >
            Preview
          </button>
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
        <div className="flex justify-center">
          <a
            href="https://a.co/d/flBuUDM"
            target="_blank"
            className="bg-amber-500 hover:bg-amber-600 contact_btn mx-auto"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
      <div className="description">
        <h1 className="description-title">
          A DEATH GOD HUNTS FOR KILLERS, MYTHS, AND A NEW START
        </h1>
        <AdvancedVideo cldVid={dd_vid} controls />
        <div className="dd-reviews py-5 md:flex grow justify-evenly text-white">
          <div className="dd-review">
            <p>
              "A truly original mystery that is humorous, clever, and fun."
              <br />
              <p className="text-end italic">-- Reader's Favorite (Starred)</p>
            </p>
          </div>
          <div className="dd-review">
            <p>
              "A sublimely bizarre detective story"
              <br />
              <p className="text-end italic">-- Kirkus Reviews (Starred)</p>
            </p>
          </div>
          <div className="dd-review">
            <p>
              "<em>Detective Death</em> manages the impressive feat of living up
              to such a memorable title
              <br />
              <p className="text-end italic">-- Indiereader</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detective_Death;
