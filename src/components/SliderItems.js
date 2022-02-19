import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const SliderItems = () => {
  const dataSlider = [
    {
      img: "./images/dm1.png",
      title: "pastel long sleeve",
      firstPrice: "$220",
      afterPrice: "$150",
    },
    {
      img: "./images/dm2.png",
      title: "pastel short sleeve",
      firstPrice: "$230",
      afterPrice: "$120",
    },
    {
      img: "./images/dm1.png",
      title: "american kabaya",
      firstPrice: "$250",
      afterPrice: "$190",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = dataSlider.length;

  if (!Array.isArray(dataSlider) || dataSlider.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  return (
    <section className="bg-second py-10 lg:px-16">
      <div className="container mx-auto">
        <div className="flex max-h-full md:py-6 flex-col md:flex-row md:text-left items-center text-center space-y-5 md:space-y-0">
          <div className="md:w-6/12 text-white items-center my-auto pr-3 bg-second sm:w-10/12">
            <div className="space-y-4">
              <h1 className="capitalize text-3xl">best fashion since 2019</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </p>
              <button className="border-2 border-white py-3 text-sm px-8 uppercase">
                see more
              </button>
            </div>
          </div>
          <div className="md:w-6/12 flex bg-second items-center justify-center sm:w-full">
            <BsFillArrowLeftCircleFill
              size={32}
              color="white"
              className="cursor-pointer mr-6"
              onClick={prevSlide}
            />
            {dataSlider.map((slide, index) => {
              return (
                <div
                  className={
                    index === current
                      ? "transition-opacity ease-in-out duration-500"
                      : "opacity-0 transition-opacity ease-in-out duration-500"
                  }
                  key={index}
                >
                  {index === current && (
                    <div className="block items-center text-left">
                      <img src={slide.img} className="h-72" alt="" />
                      <div className="bg-white text-black font-semibold px-3 py-2">
                        <div>
                          <AiFillStar color="yellow" />
                        </div>
                        <p className="capitalize">{slide.title}</p>
                        <p className=" space-x-5">
                          <span className="opacity-60 line-through">
                            {slide.firstPrice}
                          </span>
                          <span>{slide.afterPrice}</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <BsFillArrowRightCircleFill
              size={32}
              color="white"
              className="cursor-pointer ml-6"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderItems;
