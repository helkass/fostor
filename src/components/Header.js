import React from "react";
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const link = {
    men: "/men",
    woman: "/woman",
    kids: "/kids",
    trends: "/trends",
    collections: "/collections",
  };

  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  });
  return (
    <header
      ref={menuRef}
      className="w-full bg-gradient-to-b lg:px-16 from-thrid px-auto to-primary px-3 sm:px-0"
    >
      <nav className="flex relative justify-between container mx-auto md:px-0 lg:px-3 py-4 items-center">
        <h1 className="uppercase text-2xl font-semibold">Fostor</h1>

        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } fixed md:static w-2/3 md:max-w-max bottom-0 transition-all ease-in-out duration-400 top-0 text-center md:bg-inherit bg-thrid md:opacity-100 bg-opacity-90 z-20 md:flex p-24 md:p-0`}
        >
          <ul className="flex md:flex-row flex-col">
            <li className="mr-5 block mb-8 md:mb-0 hover:opacity-75">
              <a href={link.men} className="font-medium">
                MEN
              </a>
            </li>
            <li className="mr-5 block mb-8 md:mb-0 hover:opacity-75">
              <a href={link.woman} className="font-medium">
                WOMAN
              </a>
            </li>
            <li className="mr-5 block mb-8 md:mb-0 hover:opacity-75">
              <a href={link.kids} className="font-medium">
                KIDS
              </a>
            </li>
            <li className="mr-5 block mb-8 md:mb-0 hover:opacity-75">
              <a href={link.trends} className="font-medium">
                TRENDS
              </a>
            </li>
            <li className="mr-5 block mb-8 md:mb-0 hover:opacity-75">
              <a href={link.collections} className="font-medium">
                COLLECTIONS
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="border-font md:m-0 mr-2 border sm:py-1.5 py-1 rounded-md sm:px-7 px-5">
            Login
          </button>
          <FaBars
            onClick={() => {
              if (!isOpen) {
                setIsOpen(!isOpen);
              } else {
                setIsOpen(false);
              }
            }}
            size={27}
            className="flex md:hidden text-second cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
