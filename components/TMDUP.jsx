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
      <div className="description flex flex-col justify-between h-2/3 bg-stone-800 w-1/3 px-5">
        <h1 className="text-white font-serif text-center text-2xl mt-10 leading-loose">
          DEATH. DUTY. MYTHS. WHAT ELSE COULD SEPARATE KAI FROM HIS TRUE LOVE?
        </h1>
        <p className="text-white font-serif truncate">
          Heaven is not what Kai imagined. <br />
          <br />
          The sun scorches, myths run free, and Kai has everything but the one
          thing that would make him happy—his true love, Sophia, who is stuck in
          the perilous city of Asphodel. <br /> <br />
          To get her to Elysium, Kai must fulfill a dubious deal with the mortal
          council that speaks for missing gods and confront a scourge of
          myths—creatures wrought from the desires of those unsatisfied with an
          imperfect afterlife. <br />
          <br />
          Kai is no Hercules, but he is able to speak with so-called monsters
          spanning world traditions to new legends. Yet, no matter what he does,
          the council stalls, and he sneaks illegal rendezvous with his love at
          the fence between cities. <br />
          <br />
          Caught between his duty to Elysium and the one he loves, Kai needs to
          overcome more than myth before heaven burns and love decays into
          death.
        </p>
        <div className="dd-reviews flex justify-evenly text-white">
          <div className="review w-1/3 m-3">
            <p>
              "A beautifully written page-turner with exquisite world-building
              that is spellbinding, captivating, and completely unique."
            </p>
            <br />
            <p>-- Indiereader (Starred)</p>
          </div>
          <div className="review w-1/3 m-3">
            <p className="text-sm">
              "It's only the first installment in the <em>Seed of Yggdrasil</em>{" "}
              series. But it's a strong one that will make readers eager for
              further entries"
            </p>
            <br />
            <p>-- Kirkus Reviews (Starred)</p>
          </div>
          <div className="review w-1/3 m-3">
            <p>
              "This is a great story with character growth and questions about
              what makes a genuine hero."
            </p>
            <br />
            <p>-- Reader's Favorite (Starred)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(TMDUP);
