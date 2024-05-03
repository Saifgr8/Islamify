import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="absolute top-4">
        <span className="text-4xl bg-gradient-to-r from-white via-amber-400 to-amber-600 text-transparent bg-clip-text">
          Sunnah Spot
        </span>
        <span className="text-white pl-1">a place where deen meets duniya</span>
      </div>
    </div>
  );
};

export default Header;
