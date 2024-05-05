"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import bookAnim from "../assets/book.json";
import hadithIcon from "../assets/FinalMainLoader.json";
import gradeMissing from "../assets/gradeMissing.json";
import exclamationAnim from "../assets/exclamation.json";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const HadithLoader = ({ data, randomHadith }) => {
  const [hadithArray, setHadithArray] = useState([]);
  console.log('main arr', hadithArray)
  const [hadithPlay, setHadithPlay] = useState([hadithArray[1]]);
  console.log("final array is", hadithPlay);
  let finalData = hadithArray[hadithArray?.length - 1];

  const updateQueue = (newData) => {
    const dataArr = [...hadithArray];
    if (dataArr.length === 2) {
      dataArr.shift();
    }
    dataArr.push(newData);
    setHadithArray(dataArr);
  };

  useEffect(() => {
    if (data) {
      updateQueue(data);
    }
  }, [data]);
  const ref = useRef(null);

  useEffect(() => {
    const time = setTimeout(() => {
      if (ref.current) {
        ref.current.pause();
      }
    }, 1600);
    return () => clearTimeout(time);
  }, [data]);

  const narratorIndex = finalData?.text?.english.indexOf(":");
  const narratorText = finalData?.text?.english.substr(0, narratorIndex + 1);
  const hadithText = finalData?.text?.english.substr(narratorIndex + 1);
  const gradesData = finalData?.grades;
  console.log(gradesData);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  console.log(selectedLanguage);

  const handlePrevClick = () => {
    setHadithPlay(hadithArray[0]);
  };
  const handleCurrentClick = () => {
    setHadithPlay(hadithArray[1]);
  };
  const languageSelection = () => {
    return (
      <div className="flex  justify-center items-center mt-4">
        <div className="mx-2">
          <input
            className="appearance-none  lg:w-3 lg:h-3 w-2 h-2 rounded-full bg-white focus:ring-yellow-400 ring-2 ring-offset-2 ring-offset-white checked:bg-yellow-400 checked:ring-yellow-400 mr-1"
            onChange={() => setSelectedLanguage("Arabic")}
            checked={selectedLanguage === "Arabic"}
            type="radio"
            id="arabic"
          />
          <label
            className="lg:px-3 text-lg font-semibold lg:text-3xl px-1 hover:text-yellow-300"
            htmlFor="arabic"
          >
            عربي
          </label>
        </div>
        <div className="mx-2">
          <input
            className="appearance-none  lg:w-3 lg:h-3 w-2 h-2 rounded-full bg-white focus:ring-yellow-400 ring-2 ring-offset-2 ring-offset-white checked:bg-yellow-400 checked:ring-yellow-400 mr-1"
            onChange={() => setSelectedLanguage("English")}
            checked={selectedLanguage === "English"}
            type="radio"
            id="english"
          />
          <label
            className="lg:px-3 text-lg font-semibold lg:text-3xl px-1 hover:text-yellow-300"
            htmlFor="english"
          >
            English
          </label>
        </div>
        <div className="mx-2">
          <input
            className="appearance-none  lg:w-3 lg:h-3 w-2 h-2 rounded-full bg-white focus:ring-yellow-400 ring-2 ring-offset-2 ring-offset-white checked:bg-yellow-400 checked:ring-yellow-400 mr-1"
            onChange={() => setSelectedLanguage("Urdu")}
            checked={selectedLanguage === "Urdu"}
            type="radio"
            id="urdu"
          />
          <label
            className="lg:px-3 text-lg font-semibold lg:text-3xl px-1 hover:text-yellow-300"
            htmlFor="urdu"
          >
            اردو
          </label>
        </div>
      </div>
    );
  };

  const gradeSection = () => {
    return (
      <div className="lg:m-4 my-3 lg:w-full">
        <div className="lg:ml-4 flex text-lg flex-row justify-start items-center mx-2">
          <div className="flex items-center justify-start lg:justify-center ">
            <span className="font-bold text-base lg:text-xl">Grades</span>

            <Lottie
              className=" inline-block lg:h-10 lg:w-10 h-6 w-6 cursor-pointer"
              animationData={exclamationAnim}
            />
          </div>
          {gradesData?.length > 0 ? (
            <div className="flex flex-row overflow-x-auto max-w-full h-10">
              {gradesData.map((item, index) => {
                const grade = item.grade.split(" ");
                const finalGrade = grade.includes("Daif")
                  ? "Daif"
                  : grade.includes("Sahih")
                  ? "Sahih"
                  : grade.includes("Hasan")
                  ? "Hasan"
                  : "";
                return (
                  <div className="flex-shrink-0" key={index}>
                    <div className="flex flex-row justify-center items-center">
                      <span className="lg:text-xl text-base whitespace-nowrap py-1.5 px-2 ">
                        <div className="hover:shadow-yellow-400 hover:shadow-xl px-2 bg-gradient-to-br from-inherit via-slate-500 to-yellow-500 rounded-lg shadow-md shadow-white">
                          <span className="font-serif">{finalGrade} </span>(
                          {item.name} )
                        </div>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" flex justify-center items-center">
              <span className="text-xs lg:text-xl">
                No grades available for this Hadith.
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const textBody = () => {
    return (
      <div className=" flex  rounded-3xl shadow-xl shadow-amber-500 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 text-white w-full">
        <div className=" flex flex-col items-center justify-center w-full">
          <div className="flex justify-center items-center ">
            <Lottie
              loop={false}
              autoPlay={true}
              lottieRef={ref}
              className="lg:h-40 lg:w-40 h-20 w-20"
              animationData={bookAnim}
            />{" "}
            <div className="w-full">
              <span className="font-serif text-lg lg:text-4xl">
                {finalData?.foundBook_name}
              </span>
              <span className="text-sm font-serif  lg:text-lg pl-1">
                [{finalData?.book_ref?.book_hadith_number}]
              </span>
            </div>
            <div className=" lg:w-1/12 w-1/3 lg:flex lg:justify-center lg:items-center">
              {selectedLanguage === "English" ? (
                <div className="lg:absolute right-10">
                  <button
                    onClick={randomHadith}
                    className="bg-gradient-to-r from-inherit via-amber-200 to-amber-500   lg:m-2 py-2 lg:px-6 rounded-xl shadow-xl text-black shadow-yellow-600 cursor-pointer lg:text-2xl  text-xs px-4  transform transition-transform duration-75 ease-in-out active:scale-95 "
                  >
                    Random
                  </button>
                </div>
              ) : selectedLanguage === "Arabic" ? (
                <div className="lg:absolute right-10">
                  <button
                    onClick={randomHadith}
                    className="bg-gradient-to-r from-inherit via-amber-200 to-amber-500  m-2 py-2 lg:px-6 rounded-xl shadow-xl text-black shadow-yellow-600 cursor-pointer lg:text-2xl  text-xs px-4  transform transition-transform duration-75 ease-in-out active:scale-95"
                  >
                    عشوائي
                  </button>
                </div>
              ) : selectedLanguage === "Urdu" ? (
                <div className="lg:absolute right-10">
                  <button
                    onClick={randomHadith}
                    className="bg-gradient-to-r from-inherit via-amber-200 to-amber-500  m-2 py-2 lg:px-6 rounded-xl shadow-xl text-black shadow-yellow-600 cursor-pointer lg:text-2xl  text-sm px-2  transform transition-transform duration-75 ease-in-out active:scale-95 "
                  >
                    بےترتیب
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div>{languageSelection()}</div>
          <div className="m-2 p-2 w-11/12">
            {selectedLanguage === "English" ? (
              <div className="overflow-y-scroll mb-4 pr-2 h-80 lg:h-56">
                <h1 className=" text-xl lg:text-4xl text-left">
                  {finalData?.text?.english ? (
                    <div className="flex flex-col">
                      <span className="lg:text-xl text-base text-blue-300 py-3">
                        {narratorText}
                      </span>
                      {hadithText + "."}
                    </div>
                  ) : finalData?.text?.english === "" ? (
                    <span className=" text-2xl lg:text-4xl text-center font-thin p-2 text-gray-200">
                      Translation unavailable, please look other languages.
                    </span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            ) : selectedLanguage === "Arabic" ? (
              <div className="overflow-y-scroll mb-4 pr-2 h-80 lg:h-56">
                <h1 className=" text-xl lg:text-4xl text-right py-8">
                  {finalData?.text?.arabic ? (
                    finalData?.text?.arabic
                  ) : finalData?.text?.arabic === "" ? (
                    <span className=" text-2xl lg:text-4xl text-center font-thin p-2 text-gray-400">
                      الترجمة غير متوفرة، يرجى البحث في لغات أخرى
                    </span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            ) : selectedLanguage === "Urdu" ? (
              <div className="overflow-y-scroll mb-4 pr-2 h-80 lg:h-56">
                <h1 className=" text-xl lg:text-4xl text-right py-8">
                  {finalData?.text?.urdu ? (
                    finalData?.text?.urdu
                  ) : finalData?.text?.urdu === "" ? (
                    <span className=" text-2xl lg:text-4xl text-center font-thin p-2 text-gray-400">
                      ترجمہ دستیاب نہیں ہے، براہ کرم دیگر زبانیں دیکھیں۔
                    </span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            ) : null}
          </div>
          <div className=" flex flex-col justify-center items-center m-2 lg:w-full h-full w-full">
            <div className="flex mb-4 gap-3 ">
              <FaChevronLeft
                onClick={handlePrevClick}
                className="cursor-pointer lg:h-6 lg:w-6 "
                style={{ color: "gold" }}
              />

              <FaChevronRight
                onClick={handleCurrentClick}
                className=" cursor-pointer lg:h-6 lg:w-6"
                style={{ color: "gold" }}
              />
            </div>
            <div className=" flex flex-row justify-center items-center">
              <h6 className="text-sm lg:text-xl italic pr-2 text-center font-bold">
                Chapter {finalData?.foundChapter_number}:
              </h6>
              <h6 className="text-sm lg:text-xl italic text-left ">
                {finalData?.foundChapter_name}
                <span className="text-xs">
                  [{finalData?.chapter_ref?.chapter_hadith_number}]
                </span>
              </h6>
            </div>
            <div className="justify-start flex w-full overflow-auto">
              <div className="flex flex-row justify-around w-full items-center">
                <div className="w-3/4">{gradeSection()}</div>
                <div className="flex flex-row items-center justify-center lg:mr-8 ">
                  <Lottie
                    loop={false}
                    autoplay={true}
                    className=" absolute w-40 cursor-pointer mb-5"
                    animationData={gradeMissing}
                  />
                  <span className="text-sm lg:text-lg lg:mt-8 mt-3 cursor-pointer">
                    Report
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="">
        {finalData?.text ? (
          textBody()
        ) : (
          <div>
            <div className="bg-inherit flex flex-col justify-center items-center rounded animate-none w-full">
              <div className=" justify-end h-full bg-inherit  w-2/3">
                <Lottie className=" lg:ml-32 " animationData={hadithIcon} />
              </div>
              <span className="text-white text-base  lg:mt-1 mt-6 lg:text-xl italic justify-self-center">
                Fetching your good deeds, please wait.
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HadithLoader;

// {
//   selectedLanguage === "English" ? (
//     <>
//       <span>
//         <span className="font-bold font-serif">Ṣaḥīḥ</span>: Hadith transmitted
//         by narrators of sound character and memory, forming an unbroken chain.
//         It must not conflict with more reliable reports and should be free from
//         hidden defects.
//       </span>
//       <span>
//         <span className="font-bold font-serif">Ḥasan</span>: Hadith transmitted
//         by narrators of sound character but weak memory, with an unbroken chain.
//         It should not contradict more reliable reports and must be free from
//         hidden defects.
//       </span>
//       <span>
//         <span className="font-bold font-serif">Ḍaʻīf</span>: Hadith lacking the
//         elements to qualify as Ḥasan, such as narrators with weak memory or
//         character, hidden defects, or a broken chain of narrators.
//       </span>
//     </>
//   ) : selectedLanguage === "Urdu" ? (
//     <>
//       <span>
//         <span className="font-bold font-serif">صحیح</span>: حدیث جو صحیح خصوصیات
//         اور یاداشت کے ناقلین کے ذریعہ منتقل ہوتی ہے، بغیر رکاوٹ کے زنجیر بناتی
//         ہے۔ یہ زیادہ قابل اعتماد رپورٹ کے ساتھ تضاد نہیں کرنی چاہئے اور اسے
//         پوشیدہ عیبوں سے آزاد ہونا چاہئے۔
//       </span>
//       <span>
//         <span className="font-bold font-serif">حسن</span>: حدیث جو صحیح خصوصیات
//         رکھنے والے ناقلین کے ذریعہ بغیر رکاوٹ کی زنجیر کے ساتھ، لیکن کمزور
//         یاداشت کے ساتھ منتقل ہوتی ہے۔ اسے زیادہ قابل اعتماد رپورٹ کے ساتھ تضاد
//         نہیں کرنی چاہئے اور اسے پوشیدہ عیبوں سے آزاد ہونا چاہئے۔
//       </span>
//       <span>
//         <span className="font-bold font-serif">ضعیف</span>: حدیث جو حسن کے ارکان
//         کے طور پر معیار نہ پورا کرتی ہو، جیسے کہ ناقلین کمزور یاداشت یا خصوصیات
//         کے ساتھ، پوشیدہ عیبوں، یا منقطع زنجیر کی وجہ سے۔
//       </span>
//     </>
//   ) : selectedLanguage === "Arabic" ? (
//     <>
//       <span>
//         <span className="font-bold font-serif">صحيح</span>: الحديث الذي يتم نقله
//         عن طريق الرواة ذوي الطابع السليم والذاكرة الجيدة، والذي يشكل سلسلة
//         متصلة. يجب ألا يتعارض هذا الحديث مع تقارير أكثر موثوقية ويجب أن يكون
//         خاليًا من العيوب الخفية.
//       </span>
//       <span>
//         <span className="font-bold font-serif">حسن</span>: الحديث الذي يتم نقله
//         عن طريق الرواة ذوي الطابع السليم ولكن الذاكرة الضعيفة، مع سلسلة متصلة.
//         يجب ألا يتعارض هذا الحديث مع تقارير أكثر موثوقية ويجب أن يكون خاليًا من
//         العيوب الخفية.
//       </span>
//       <span>
//         <span className="font-bold font-serif">ضعيف</span>: الحديث الذي يفتقر
//         إلى العناصر للتأهل كحديث حسن، مثل الرواة ذوي الذاكرة أو الشخصية الضعيفة،
//         أو العيوب الخفية، أو سلسلة منقطعة من الرواة.
//       </span>
//     </>
//   ) : null;
// }
