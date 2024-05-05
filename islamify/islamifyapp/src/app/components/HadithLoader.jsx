"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import bookAnim from "../assets/book.json";
import hadithIcon from "../assets/FinalMainLoader.json";
import exclamationAnim from "../assets/exclamation.json";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { MdReport } from "react-icons/md";

//import { translateText } from "../lib/translate";
import Modal from "../pages/modal/page";

const HadithLoader = ({ data, randomHadith }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [hadithArray, setHadithArray] = useState([]);
  const [hadithPlay, setHadithPlay] = useState(null);
  const hadithIndex = hadithArray.findIndex(
    (item) => item?._id === hadithPlay?._id
  );

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

  useEffect(() => {
    setHadithPlay(hadithArray[hadithArray.length - 1]);
  }, [hadithArray]);

  const ref = useRef(null);

  useEffect(() => {
    const time = setTimeout(() => {
      if (ref.current) {
        ref.current.pause();
      }
    }, 1600);
    return () => clearTimeout(time);
  }, [data]);

  const narratorIndex = hadithPlay?.text?.english.indexOf(":");
  const narratorText = hadithPlay?.text?.english.substr(0, narratorIndex + 1);
  const hadithText = hadithPlay?.text?.english.substr(narratorIndex + 1);
  const gradesData = hadithPlay?.grades;
  //console.log(gradesData);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  //console.log(selectedLanguage);

  const handlePrevClick = (event) => {
    if (hadithArray[0] && hadithArray[0].length === 0) {
      event.preventDefault();
    } else {
      setHadithPlay(hadithArray[0]);
    }
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
                        <div className=" px-2 bg-gradient-to-br from-inherit via-slate-500 to-yellow-500 rounded-lg shadow-md shadow-white">
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

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
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
                {hadithPlay?.foundBook_name}
              </span>
              <span className="text-sm font-serif  lg:text-lg pl-1">
                [{hadithPlay?.book_ref?.book_hadith_number}]
              </span>
            </div>
          </div>
          <div>{languageSelection()}</div>

          <div className="flex flex-row w-full justify-center items-center">
            <div className="lg:w-1/12">
              <FaChevronLeft
                onClick={handlePrevClick}
                className={`cursor-pointer lg:h-24 lg:w-24 h-12 w-12 ${
                  hadithArray[0]?.length === 0
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                } ${
                  hadithIndex === 1 && hadithArray[0]?.length !== 0
                    ? "animate-pulse"
                    : ""
                }`}
                style={{
                  color: "goldenrod",
                }}
              />
            </div>
            <div className="m-2 p-2 lg:w-11/12">
              {selectedLanguage === "English" ? (
                <div className="overflow-y-scroll mb-4 pr-2 h-80 lg:h-56">
                  <h1 className=" text-xl lg:text-4xl text-left pl-2">
                    {hadithPlay?.text?.english ? (
                      <div className="flex flex-col">
                        <span className="lg:text-xl text-base text-blue-300 py-3">
                          {narratorText}
                        </span>
                        {hadithText + "."}
                      </div>
                    ) : hadithPlay?.text?.english === "" ? (
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
                  <h1 className=" text-xl lg:text-4xl text-right py-8 pr-2">
                    {hadithPlay?.text?.arabic ? (
                      hadithPlay?.text?.arabic
                    ) : hadithPlay?.text?.arabic === "" ? (
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
                  <h1 className=" text-xl lg:text-4xl text-right py-8 pr-2">
                    {hadithPlay?.text?.urdu ? (
                      hadithPlay?.text?.urdu
                    ) : hadithPlay?.text?.urdu === "" ? (
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
            <div className=" lg:w-1/12">
              <FaChevronRight
                style={{ color: "goldenrod" }}
                onClick={randomHadith}
                className={`cursor-pointer lg:h-24 lg:w-24 h-12 w-12 ${
                  hadithIndex === 0 || hadithArray[0].length === 0
                    ? "animate-pulse"
                    : ""
                }`}
              />
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center m-2 lg:w-full h-full w-full">
            <div className=" flex flex-row justify-center items-center">
              <h6 className="text-sm lg:text-xl italic pr-2 text-center font-bold">
                Chapter {hadithPlay?.foundChapter_number}:
              </h6>
              <h6 className="text-sm lg:text-xl italic text-left ">
                {hadithPlay?.foundChapter_name}
                <span className="text-xs">
                  [{hadithPlay?.chapter_ref?.chapter_hadith_number}]
                </span>
              </h6>
            </div>
            <div className="justify-start flex w-full overflow-auto">
              <div className="flex flex-row justify-around w-full items-center">
                <div className="w-3/4">{gradeSection()}</div>
                <div onClick={openModal}
                className="flex flex-col items-center justify-center lg:mr-8 cursor-pointer">
                  <MdReport className="lg:h-8 lg:w-8 h-6 w-6" style={{color: 'red'}} />
                    Report
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
      <div className="flex justify-center items-center">
        {hadithPlay?.text ? (
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
      <div>{modalIsOpen && <Modal onClose={closeModal} data={hadithPlay}/>}</div>
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
