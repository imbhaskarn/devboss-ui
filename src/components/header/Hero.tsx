import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-slate-200 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-[72px]">
              <span className="relative mt-2 text-transparent bg-clip-text z-10 bg-gradient-to-br from-blue-600 to-blue-800 md:inline-block">
                Unlock the Code
              </span>
            </h1>
            <p className="max-w-2xl mb-6  font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl ">
              Navigating the World of Programming with Precision and Passion!
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-4 text-center mr-3 md:mr-0 "
            >
              <a
                href="#"
                className="inline-flex items-center justify-center  text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800"
              >
                Start Unlocking
              </a>
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
