import React, { forwardRef } from "react";
import ReactModal from "react-modal";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const TMDUP = () => {
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  ReactModal.setAppElement("#tmdup");

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

  const tmdup_3d = cld.image("darius_website/tmdup_3d");

  return (
    <section
      id="tmdup"
      className="min-h-screen min-w-screen flex flex-wrap justify-evenly items-center"
    >
      <div className="lg:w-1/3 flex flex-col items-center">
        <div className="h-full relative dd">
          <AdvancedImage
            cldImg={tmdup_3d}
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
            contentLabel="Till Myth Do Us Part Preview"
            className="content"
            overlayClassName="overlay"
          >
            <iframe
              src="/assets/tmdup_preview.pdf"
              height="100%"
              width="100%"
            ></iframe>
          </ReactModal>
        </div>
        <div className="flex">
          <a
            href="https://a.co/d/9O7qSvh"
            target="_blank"
            className="bg-amber-500 hover:bg-amber-600 contact_btn mx-auto"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
      <div className="description pb-7">
        <h1 className="description-title">
          <span className="text-red-600">DEATH. DUTY. MYTHS.</span>
          <br /> <br />
          WHAT ELSE COULD SEPARATE KAI FROM HIS TRUE LOVE?
        </h1>

        <p className="text-white responsive m-3">
          "A beautifully written page-turner with exquisite world-building that
          is spellbinding, captivating, and completely unique."
          <br />
          -- <em>Indiereader (Starred)</em>
        </p>

        <p className="text-white responsive m-3">
          "It's only the first installment in the <em>Seed of Yggdrasil</em>{" "}
          series. But it's a strong one that will make readers eager for further
          entries"
          <br />
          -- <em>Kirkus Reviews</em>
        </p>

        <p className="text-white responsive m-3">
          "A great story with character growth and questions about what makes a
          genuine hero."
          <br />
          -- <em>Reader's Favorite (Starred)</em>
        </p>
      </div>
    </section>
  );
};

export default forwardRef(TMDUP);
