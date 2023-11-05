import React, { forwardRef } from "react";

const TMDUP = (props, tMDUPRef) => {
  return (
    <section
      id="tmdup"
      className="h-screen w-screen flex justify-evenly items-center"
      ref={tMDUPRef}
    >
      <img
        src="/assets/TMDUP.jpg"
        alt="Til Myth Do Us Part"
        className="h-2/3"
      />
      <div className="description  h-2/3 bg-stone-800 w-1/3 px-5">
        <h1 className="text-white font-serif text-center text-2xl mt-10 leading-loose">
          DEATH. DUTY. MYTHS. WHAT ELSE COULD SEPARATE KAI FROM HIS TRUE LOVE?
        </h1>
        <div className="dd-reviews flex flex-col justify-evenly text-white">
          <div className="review m-3">
            <p className="text-2xl">
              "A beautifully written page-turner with exquisite world-building
              that is spellbinding, captivating, and completely unique."
            </p>
            <br />
            -- Indiereader (Starred)
          </div>
          <div className="review m-3">
            <p className="text-2xl">
              "It's only the first installment in the <em>Seed of Yggdrasil</em>{" "}
              series. But it's a strong one that will make readers eager for
              further entries"
            </p>
            <br />
            -- Kirkus Reviews (Starred)
          </div>
          <div className="review m-3">
            <p className="text-2xl">
              "This is a great story with character growth and questions about
              what makes a genuine hero."
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
