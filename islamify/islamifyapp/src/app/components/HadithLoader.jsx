"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import { MdCommentBank } from "react-icons/md";
import loadingIcon from "../assets/reload.json";

const HadithLoader = ({ data, randomHadith }) => {
  console.log(data);
  // useEffect(() => {
  //   if (data[index]?.text) {
  //     ref?.current?.pause();
  //   }
  // }, [data]);

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <>
      <div className="flex flex-col gap-3">
        <div onClick={randomHadith} className="flex justify-end cursor-pointer">
          <Lottie
            autoplay={true}
            loop={true}
            className=" h-32 lg:h-60 absolute top-20 lg:top-0 right-0 m-2 p-2 cursor-pointer"
            animationData={loadingIcon}
          />
          <h1 className="absolute  top-40 lg:top-44 lg:right-0 my-2 lg:mr-20 p-2 font-semibold text-lg">
            random
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          <div className=" absolute top-10 m-2 p-2 border-t-4 border-blue-500 rounded-lg shadow-xl w-fit">
            <div className="flex flex-row justify-between">
              <div className="mx-2">
                <input
                  onChange={() => setSelectedLanguage("Arabic")}
                  checked={selectedLanguage === "Arabic"}
                  type="radio"
                  id="arabic"
                />
                <label className="px-1 font-semibold text-2xl" htmlFor="arabic">
                  عربي
                </label>
              </div>
              <div className="mx-2">
                <input
                  onChange={() => setSelectedLanguage("English")}
                  checked={selectedLanguage === "English"}
                  type="radio"
                  id="english"
                />
                <label
                  className="px-1 font-semibold text-2xl"
                  htmlFor="english"
                >
                  English
                </label>
              </div>
              <div className="mx-2">
                <input
                  onChange={() => setSelectedLanguage("Urdu")}
                  checked={selectedLanguage === "Urdu"}
                  type="radio"
                  id="urdu"
                />
                <label className="px-1 font-semibold text-2xl" htmlFor="urdu">
                  اردو
                </label>
              </div>
            </div>
          </div>
        </div>
        {data?.text ? (
          <div>
            <h1 className="text-xl lg:text-3xl italic text-center">
              Book: {data?.foundBook_name}
              <span className="text-sm lg:text-lg px-2">
                [{data?.book_ref?.book_hadith_number}]
              </span>
            </h1>
            {selectedLanguage === "English" ? (
              <div className="overflow-auto h-80">
                <h1 className=" text-3xl lg:text-5xl  py-8 text-justify">
                  {data?.text?.english ? (
                    data?.text?.english
                  ) : data?.text?.english === "" ? (
                    <span className=" text-2xl lg:text-4xl text-center font-thin p-2 text-red-700">
                      Translation unavailable, please look other languages.
                    </span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            ) : selectedLanguage === "Arabic" ? (
              <div className="overflow-auto h-80">
                <h1 className=" text-3xl lg:text-5xl text-center py-8">
                  {data?.text?.arabic ? (
                    data?.text?.arabic
                  ) : data?.text?.arabic === "" ? (
                    <span className=" text-2xl lg:text-4xl text-center font-thin p-2 text-red-700">
                      الترجمة غير متوفرة، يرجى البحث في لغات أخرى
                    </span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            ) : selectedLanguage === "Urdu" ? (
              <div className="overflow-auto h-80">
                <h1 className=" text-3xl lg:text-5xl text-center py-8">
                  {data?.text?.urdu ? (
                    data?.text?.urdu
                  ) : data?.text?.urdu === "" ? (
                    <span className=" text-2xl lg:text-4xl text-center font-thin p-2 text-red-700">
                      ترجمہ دستیاب نہیں ہے، براہ کرم دیگر زبانیں دیکھیں۔
                    </span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            ) : null}
            <div className="flex justify-center lg:mr-36">
              <MdCommentBank className="mx-2 h-7 w-7" />
              <h6 className="text-base lg:text-xl italic px-2 text-center">
                ({data?.foundChapter_number})
              </h6>
              <h6 className="text-base lg:text-xl italic text-center">
                {data?.foundChapter_name} -{" "}
                {data?.chapter_ref?.chapter_hadith_number}
              </h6>
            </div>
          </div>
        ) : (
          <div className="bg-gray-300 rounded animate-pulse">
            <div className="h-12 bg-gray-400 w-2/3 my-2"></div>
            <div className="h-32 bg-gray-400  my-2"></div>
            <div className="h-8 bg-gray-400 w-1/3 my-2"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default HadithLoader;
