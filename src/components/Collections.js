import React from "react";
import Container from "./Container";

const Collections = () => {
  return (
    <section className="my-12">
      <Container>
        <div className="text-center space-y-5">
          <h1 className="text-3xl font-bold uppercase">new collection</h1>
          <p className="opacity-80">
            Lorem Ipsum is simply dummy text of the princing and typesetting
            industry
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-rows-1 md:gap-5 sm:gap-3 px-8 lg:mt-12 mt-8">
          <div className="h-full relative mt-6 md:mt-0 mx-auto">
            <img
              className="md:h-full md:w-full h-5/6 object-cover"
              src="./images/laura.svg"
              alt=""
            />
            <p className="absolute bottom-16 sm:bottom-10 md:-bottom-5 drop-shadow-md right-10 left-10 text-center bg-white px-8 py-3 text-lg font-semibold rounded-md">
              sweater
            </p>
          </div>
          <div className="h-full relative mt-6 md:mt-0 mx-auto">
            <img
              className="md:h-full md:w-full h-5/6 object-cover"
              src="./images/laura.svg"
              alt=""
            />
            <p className="absolute bottom-16 sm:bottom-10 md:-bottom-5 drop-shadow-md right-10 left-10 text-center bg-white px-8 py-3 text-lg font-semibold rounded-md">
              sweater
            </p>
          </div>
          <div className="md:h-full relative mt-6 md:mt-0 mx-auto">
            <img
              className="md:h-full md:w-full h-5/6 object-cover"
              src="./images/dm.svg"
              alt=""
            />
            <p className="absolute bottom-16 sm:bottom-10 md:-bottom-5 drop-shadow-md right-10 left-10 text-center bg-white px-8 py-3 text-lg font-semibold rounded-md">
              sweater
            </p>
          </div>
        </div>
        <div className="w-11/12 mx-auto grid sm:grid-cols-2 grid-rows gap-5 my-5 lg:mt-12 md:pt-8">
          <div className="relative md:mt-16 md:mb-3 mx-auto my-auto sm:w-full w-10/12">
            <img
              className="w-11/12 mx-auto"
              src="./images/model2.svg"
              alt=""
            ></img>
            <img
              src="./images/dot.svg"
              className="w-1/6 absolute -top-4 -right-4"
              alt=""
            ></img>
            <div className="bg-primary opacity-75 absolute w-1/6 h-1/6 -bottom-8 -left-4"></div>
          </div>
          <div className="sm:w-10/12 sm:px-0 px-8 lg:pr-12 text-center sm:text-left my-auto font-semibold space-y-5">
            <h1 className="capitalize lg:text-[45px] md:text-[38px] text-[32px]">
              best fashion since 2019
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-font text-white px-8 py-3">shop now</button>
          </div>
        </div>
        <div className="flex p-4 md:p-7 max-w-max mx-auto bg-white justify-between shadow-3xl transition-all ease-in-out duration-400">
          <div className="text-center px-6 md:px-8">
            <h2 className="text-xl font-bold">2019</h2>
            <p className="capitalize font-semibold">fostor founded</p>
          </div>
          <div className="text-center px-6 md:px-8 border-l-2 border-r-2 border-second">
            <h2 className="text-xl font-bold">8900+</h2>
            <p className="capitalize font-semibold">product sold</p>
          </div>
          <div className="text-center px-6 md:px-8">
            <h2 className="text-xl font-bold">3015+</h2>
            <p className="capitalize font-semibold">best reviews</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Collections;
