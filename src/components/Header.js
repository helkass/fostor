import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const link = {
    men: "/men",
    woman: "/woman",
    kids: "/kids",
    trends: "/trends",
    collections: "/collections",
  };
  return (
    <header className="w-full bg-primary">
      <nav className="flex justify-between w-10/12 mx-auto py-4 items-center">
        <h1 className="uppercase text-2xl font-semibold">Fostor</h1>
        <FaBars className="flex sm:hidden" />
        <div className="flex list-none">
          <li className="mr-5">
            <a href={link.men} className="font-medium">
              MEN
            </a>
          </li>
          <li className="mr-5">
            <a href={link.woman} className="font-medium">
              WOMAN
            </a>
          </li>
          <li className="mr-5">
            <a href={link.kids} className="font-medium">
              KIDS
            </a>
          </li>
          <li className="mr-5">
            <a href={link.trends} className="font-medium">
              TRENDS
            </a>
          </li>
          <li className="mr-5">
            <a href={link.collections} className="font-medium">
              COLLECTIONS
            </a>
          </li>
        </div>
        <button className="border-font border py-1.5 px-8 text-lg">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
