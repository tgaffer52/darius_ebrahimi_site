"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-emails";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<UseFormInputs>();
  const { register, handleSubmit, reset } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    reset();
  }

  return (
    <section
      id="contact"
      className="min-h-screen w-screen flex flex-col justify-center items-center"
    >
      <div className="lg:w-3/4 md:flex my-auto justify-evenly bg-white/60 m-8 p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-1/2 flex flex-col justify-evenly"
        >
          <h1 className="text-3xl text-center bold py-8">Contact Me!</h1>
          <div className="mb-12">
            <label htmlFor="name" className="mb-3 block text-black">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="contact_input"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-12">
            <label htmlFor="email" className="mb-3 block text-black">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="contact_input"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-12">
            <label htmlFor="message" className="mb-3 block text-black">
              Message
            </label>
            <textarea
              rows={8}
              placeholder="Type your message"
              className="contact_input"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div>
            <button className="contact_btn bg-red-800 hover:bg-red-900 text-white">
              Submit
            </button>
          </div>
        </form>
        <div className="flex md:flex-col justify-evenly items-center text-center md:w-1/3 xl:w-1/4">
          <img
            src="../assets/holding_ivy.jpg"
            className="w-1/4 md:w-full pb-3 md:mx-auto"
            alt=""
          />
          <div className="socials pb-8">
            <h1 className="text-2xl">Socials!</h1>
            <a
              href="https://www.amazon.com/stores/Darius-Ebrahimi/author/B0B5S9M38N"
              target="_blank"
              className="contact_btn bg-amber-500 hover:bg-amber-600"
            >
              Amazon
            </a>
            <a
              href="https://www.goodreads.com/author/show/22527282.Darius_Ebrahimi"
              target="_blank"
              className="contact_btn bg-amber-100 hover:bg-amber-200"
            >
              Goodreads
            </a>
            <a
              href="https://www.threads.net/@dariusebrahimi"
              target="_blank"
              className="contact_btn bg-slate-800 hover:bg-slate-900 text-white"
            >
              Threads
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
