import React from "react";

const Hero = () => {
  return (
    <section className="flex relative bg-primary w-full max-h-max py-10 overflow-hidden">
      <div className="bg-gradient-to-t from-thrid to-primary w-3/12 h-3/6 absolute top-0 right-0" />
      <div className="bg-gradient-to-t from-thrid to-primary w-3/12 h-3/6 absolute bottom-0 left-0" />
      <img
        src="./images/dot.svg"
        className="absolute w-20 md:-left-10 lg:left-0 -left-9 translate-y-3/4 rotate-90"
        alt=""
      />
      <div className="container lg:mt-14 md:mt-10 grid md:grid-cols-2 sm:mx-auto mx-3 z-10">
        <div className="text-center md:text-left mb-12 md:mb-0">
          <h1 className="lg:text-[50px] md:text-[40px] text-3xl font-bold md:pr-10">
            find the best fashion style for you
          </h1>
          <p className="font-semibold w-full md:w-8/12 mt-5">
            Contrary to populer belief, Lorem Ipsum is not simply random text.
            It has root in piece of classial Latin litarature from 45 BC, making
            it over 2000 years old
          </p>
          <button className="bg-font text-white px-8 py-3 mt-10">
            shop now
          </button>
        </div>
        <div className="relative">
          <img
            src="./images/model1.png"
            className="md:w-10/12 w-9/12 md:float-right mx-auto"
            alt=""
          />
          <img
            src="./images/dot.svg"
            className="w-20 absolute top-10 right-4 md:-right-14"
            alt=""
          />
          <img
            src="./images/dot.svg"
            className="w-20 absolute bottom-20 left-10"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
