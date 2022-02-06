import React from "react";

const Container = ({ children }) => {
  return (
    <div className="relative w-full max-h-max items-center lg:px-16 py-10 overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
