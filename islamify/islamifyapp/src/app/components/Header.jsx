import React from "react";
import logo from '../assets/goldenLogo.json'
import Lottie from "lottie-react";

const Header = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center mt-12">
      <div className="absolute top-0 flex flex-col lg:flex-row lg:items-end lg:justify-center">
        <div className="flex  lg:flex-row flex-col justify-center  items-center">
          <div className="flex flex-row justify-center items-center">
            <Lottie
              className="lg:h-24 lg:w-24 h-16 w-16"
              animationData={logo}
            />
            <span className=" text-2xl lg:text-4xl bg-gradient-to-r from-white via-amber-400 to-amber-600 text-transparent bg-clip-text">
              Sunnah Spot
            </span>
          </div>

          <span className="text-white text-xs lg:mt-3 lg:text-lg pl-1">
            a place where deen meets duniya
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
