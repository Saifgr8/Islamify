"use client";
import React from "react";
import logo from "../assets/goldenLogo.json";
import Lottie from "lottie-react";
import coin from "../assets/coin.json";
import { useState } from "react";

const Header = () => {
  const [points, setPoints] = useState("NP");
  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center mt-12 w-full">
      <div className="absolute top-0 flex flex-col lg:flex-row lg:items-end lg:justify-center w-full">
        <div className="flex lg:flex-row flex-col justify-center items-center w-full">
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
            <div
              onMouseEnter={() => setPoints("Neeki Points")}
              onMouseLeave={() => setPoints("NP")}
              className="lg:pt-1 mt-4 transform transition-all delay-150 text-white hover:scale-125 lg:absolute lg:top-8 lg:right-10 flex justify-center items-center lg:px-4 px-2 rounded-md shadow-lg shadow-white bg-gradient-to-tl from-yellow-200 via-yellow-400 to-yellow-600 "
            > 
              <span className="text-white lg:text-base text-xs hover:font-serif">{points} ___</span>
              <Lottie animationData={coin} className="lg:h-10 lg:w-10 h-8 w-8" />
              {points && <span className="badge badge-outline animate-pulse text-sm">soon</span>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
