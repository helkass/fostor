import React from "react";
import { imagesFooter as images } from "./data/DataProducts";

const Footer = () => {
  return (
    <footer>
      <div className="flex w-full mx-0">
        {images.map((img, index) => {
          return (
            <div key={index} className="w-1/5">
              <img className="w-full object-cover" alt={img} src={img} />
            </div>
          );
        })}
      </div>
      <main className="bg-footer w-full relative items-center text-center uppercase max-h-max">
        <div className="px-6 py-3 bg-white absolute mx-auto max-w-max -top-6 left-0 right-0">
          <h3>follow our instagram: @fostor_trends</h3>
        </div>
        <div className="text-white inline-block sm:space-y-12 space-y-7 my-16 h-full">
          <ul className="text-sm flex sm:gap-5 gap-2">
            <li>men</li>
            <li>woman</li>
            <li>collections</li>
            <li>kids</li>
            <li>trends</li>
          </ul>
          <div className="capitalize text-sm">
            <p>copyright fostor all right reserved</p>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
