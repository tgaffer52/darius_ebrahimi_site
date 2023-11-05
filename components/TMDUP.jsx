import React, { forwardRef } from "react";
import ReactModal from "react-modal";

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
  return (
    <section
      id="tmdup"
      className="h-screen w-screen flex justify-center items-center"
    >
      <div className="h-2/3 flex flex-col mr-36">
        <div className="h-full relative dd">
          <img
            src="/assets/tmdup_3d.png"
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
      <div className="description flex flex-col justify-between h-2/3 bg-stone-800 w-1/3 px-5">
        <h1 className="text-red-600 text-center text-3xl mt-10 leading-loose">
          DEATH. DUTY. MYTHS. <br />
          <h1 className="text-white text-center text-2xl pb-5 border-b-2">
            WHAT ELSE COULD SEPARATE KAI FROM HIS TRUE LOVE?
          </h1>
        </h1>
        <div className="dd-reviews pb-5 flex flex-col justify-between text-white">
          <div className="review m-3">
            <p className="xl:text-xl">
              "A beautifully written page-turner with exquisite world-building
              that is spellbinding, captivating, and completely unique."
            </p>
            <br />
            -- Indiereader (Starred)
          </div>
          <div className="review m-3">
            <p className="xl:text-xl">
              "It's only the first installment in the <em>Seed of Yggdrasil</em>{" "}
              series. But it's a strong one that will make readers eager for
              further entries"
            </p>
            <br />
            -- Kirkus Reviews
          </div>
          <div className="review m-3">
            <p className="xl:text-xl">
              "A great story with character growth and questions about what
              makes a genuine hero."
            </p>
            <br />
            -- Reader's Favorite (Starred)
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(TMDUP);
