"use client"
import { FormEvent } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
const JoinUsForm = () => {
  
  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
  }
  return (
    <>
    <div className="flex justify-center align-middle mr-11">
      <Image
        src="/images/pages/landing/js.jpg"
        alt="HIV"
        width={600}
        height={500}
        className=""
      />
    </div>

    <form
      onSubmit={handleFormSubmit}
      className="container px-5 py-24 mx-auto flex pr-20 w-[90%] md:w-[700px]"
      id="join-us"
    >
      <div className=" bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-2xl">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Join Our Team
        </h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="resume" className="leading-7 text-sm text-gray-600">
            Resume
          </label>
          <Input
            type="file"
            id="resume"
            name="resume"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Tell us About yourself
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default JoinUsForm;
