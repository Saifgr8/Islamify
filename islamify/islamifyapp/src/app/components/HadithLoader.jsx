"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import bookAnim from "../assets/book.json";
import hadithIcon from "../assets/FinalMainLoader.json"
import gradeMissing from '../assets/gradeMissing.json'

const HadithLoader = ({ data, randomHadith }) => {
  const [showGrades, setShowGrades] = useState(true);
  console.log(data);


  //console.log(isHovered);
  //console.log(data);
  const ref = useRef();

  useEffect(() => {
    const time = setTimeout(() => {
      ref?.current?.pause();
    }, 1600);
    return () => clearTimeout(time);
  }, [data]);

  const narratorIndex = data?.text?.english.indexOf(":");
  const narratorText = data?.text?.english.substr(0, narratorIndex + 1);
  const hadithText = data?.text?.english.substr(narratorIndex + 1);
  const gradesData = data?.grades;
  console.log(gradesData);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  console.log(selectedLanguage);

  const languageSelection = () => {
    return (
      <div className="flex  justify-center items-center mt-4">
        <div className="mx-2">
          <input
            className="appearance-none  lg:w-3 lg:h-3 w-2 h-2 rounded-full bg-white focus:ring-yellow-600 ring-2 ring-offset-2 ring-offset-white checked:bg-yellow-600 checked:ring-yellow-600 mr-1"
            onChange={() => setSelectedLanguage("Arabic")}
            checked={selectedLanguage === "Arabic"}
            type="radio"
            id="arabic"
          />
          <label
            className="lg:px-3 text-lg font-semibold lg:text-3xl px-1"
            htmlFor="arabic"
          >
            عربي
          </label>
        </div>
        <div className="mx-2">
          <input
            className="appearance-none  lg:w-3 lg:h-3 w-2 h-2 rounded-full bg-white focus:ring-yellow-600 ring-2 ring-offset-2 ring-offset-white checked:bg-yellow-600 checked:ring-yellow-600 mr-1"
            onChange={() => setSelectedLanguage("English")}
            checked={selectedLanguage === "English"}
            type="radio"
            id="english"
          />
          <label
            className="lg:px-3 text-lg font-semibold lg:text-3xl px-1"
            htmlFor="english"
          >
            English
          </label>
        </div>
        <div className="mx-2">
          <input
            className="appearance-none  lg:w-3 lg:h-3 w-2 h-2 rounded-full bg-white focus:ring-yellow-600 ring-2 ring-offset-2 ring-offset-white checked:bg-yellow-600 checked:ring-yellow-600 mr-1"
            onChange={() => setSelectedLanguage("Urdu")}
            checked={selectedLanguage === "Urdu"}
            type="radio"
            id="urdu"
          />
          <label
            className="lg:px-3 text-lg font-semibold lg:text-3xl px-1"
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
      <div className="lg:m-4 my-3 lg:w-full ">
        {gradesData?.length > 0 ? (
          <div className="mx-2">
            <span
              onClick={() => setShowGrades(!showGrades)}
              className="font-semibold text-sm lg:text-2xl"
            >
              <div className="lg:ml-4 flex flex-col lg:flex-row justify-left items-center">
                Grades<span className="text-xs">(authenticity)</span>
              </div>
            </span>
            {showGrades && (
              <div className="flex flex-col">
                <div className="overflow-y-scroll h-64 ">
                  {gradesData.map((item, index) => {
                    const grade = item.grade.split(" ");
                    const finalGrade = grade[0];
                    return (
                      <div key={index}>
                        <ol className={`list-disc lg:m-2 lg:p-2 my-1 py-1`}>
                          <li className="bg-gradient-to-r from-inherit via-slate-400 to-amber-500 p-2 rounded-r-2xl shadow-lg shadow-yellow-600 w-fit">
                            <span className="font-serif font-bold text-xs lg:text-xl">
                              {finalGrade}
                            </span>
                            <span className="text-xs lg:text-xl">
                              ({item.name})
                            </span>
                          </li>
                        </ol>
                      </div>
                    );
                  })}
                </div>
                <span className="border-2 bg-white lg:my-2 my-1"></span>
                <div className="flex flex-col gap-2 overflow-y-scroll h-64 bg-white text-black lg:m-2 p-2 rounded-xl  text-sm lg:text-xl">
                  {selectedLanguage === "English" ? (
                    <>
                      <span>
                        <span className="font-bold font-serif">Ṣaḥīḥ</span>:
                        Hadith transmitted by narrators of sound character and
                        memory, forming an unbroken chain. It must not conflict
                        with more reliable reports and should be free from
                        hidden defects.
                      </span>
                      <span>
                        <span className="font-bold font-serif">Ḥasan</span>:
                        Hadith transmitted by narrators of sound character but
                        weak memory, with an unbroken chain. It should not
                        contradict more reliable reports and must be free from
                        hidden defects.
                      </span>
                      <span>
                        <span className="font-bold font-serif">Ḍaʻīf</span>:
                        Hadith lacking the elements to qualify as Ḥasan, such as
                        narrators with weak memory or character, hidden defects,
                        or a broken chain of narrators.
                      </span>
                    </>
                  ) : selectedLanguage === "Urdu" ? (
                    <>
                      <span>
                        <span className="font-bold font-serif">صحیح</span>: حدیث
                        جو صحیح خصوصیات اور یاداشت کے ناقلین کے ذریعہ منتقل ہوتی
                        ہے، بغیر رکاوٹ کے زنجیر بناتی ہے۔ یہ زیادہ قابل اعتماد
                        رپورٹ کے ساتھ تضاد نہیں کرنی چاہئے اور اسے پوشیدہ عیبوں
                        سے آزاد ہونا چاہئے۔
                      </span>
                      <span>
                        <span className="font-bold font-serif">حسن</span>: حدیث
                        جو صحیح خصوصیات رکھنے والے ناقلین کے ذریعہ بغیر رکاوٹ کی
                        زنجیر کے ساتھ، لیکن کمزور یاداشت کے ساتھ منتقل ہوتی ہے۔
                        اسے زیادہ قابل اعتماد رپورٹ کے ساتھ تضاد نہیں کرنی چاہئے
                        اور اسے پوشیدہ عیبوں سے آزاد ہونا چاہئے۔
                      </span>
                      <span>
                        <span className="font-bold font-serif">ضعیف</span>: حدیث
                        جو حسن کے ارکان کے طور پر معیار نہ پورا کرتی ہو، جیسے کہ
                        ناقلین کمزور یاداشت یا خصوصیات کے ساتھ، پوشیدہ عیبوں، یا
                        منقطع زنجیر کی وجہ سے۔
                      </span>
                    </>
                  ) : selectedLanguage === "Arabic" ? (
                    <>
                      <span>
                        <span className="font-bold font-serif">صحيح</span>:
                        الحديث الذي يتم نقله عن طريق الرواة ذوي الطابع السليم
                        والذاكرة الجيدة، والذي يشكل سلسلة متصلة. يجب ألا يتعارض
                        هذا الحديث مع تقارير أكثر موثوقية ويجب أن يكون خاليًا من
                        العيوب الخفية.
                      </span>
                      <span>
                        <span className="font-bold font-serif">حسن</span>:
                        الحديث الذي يتم نقله عن طريق الرواة ذوي الطابع السليم
                        ولكن الذاكرة الضعيفة، مع سلسلة متصلة. يجب ألا يتعارض هذا
                        الحديث مع تقارير أكثر موثوقية ويجب أن يكون خاليًا من
                        العيوب الخفية.
                      </span>
                      <span>
                        <span className="font-bold font-serif">ضعيف</span>:
                        الحديث الذي يفتقر إلى العناصر للتأهل كحديث حسن، مثل
                        الرواة ذوي الذاكرة أو الشخصية الضعيفة، أو العيوب الخفية،
                        أو سلسلة منقطعة من الرواة.
                      </span>
                    </>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="m-2 p-2 flex flex-col justify-center items-center">
            <Lottie className=" h-40 w-40 lg:h-96 lg:w-96" animationData={gradeMissing} />
            <span className="text-xs lg:text-xl ">No grades available for this Hadith</span>
          </div>
        )}
      </div>
    );
  };

  const textBody = () => {
    return (
      <div className=" flex rounded-3xl shadow-xl shadow-amber-500 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 text-white w-full">
        <div className="lg:w-1/4 w-28">{gradeSection()}</div>
        <div className=" flex flex-col items-center justify-center w-3/4">
          <div className="flex justify-center items-center ">
            <Lottie
              loop={false}
              autoPlay={false}
              lottieRef={ref}
              className="lg:h-40 lg:w-40 h-20 w-20"
              animationData={bookAnim}
            />{" "}
            <div className=" lg:w-full w-2/3">
              <span className="font-serif text-lg lg:text-4xl">
                {data?.foundBook_name}
              </span>
              <span className="text-sm font-serif  lg:text-lg pl-1">
                [{data?.book_ref?.book_hadith_number}]
              </span>
            </div>
            <div className=" lg:w-1/12 w-2/3 lg:flex lg:justify-center lg:items-center">
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
                    بے ترتیب
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div>{languageSelection()}</div>
          <div className="m-2 p-2 w-11/12">
            {selectedLanguage === "English" ? (
              <div className="overflow-y-scroll mb-4 pr-2 h-80">
                <h1 className=" text-xl lg:text-5xl py-8 text-left">
                  {data?.text?.english ? (
                    <div className="flex flex-col">
                      <span className="lg:text-xl text-base text-blue-300 py-3">
                        {narratorText}
                      </span>
                      {hadithText + "."}
                    </div>
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
              <div className="overflow-auto pr-2 mb-4 h-80">
                <h1 className=" text-xl lg:text-5xl text-right py-8">
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
              <div className="overflow-auto pr-3 mb-4 h-80">
                <h1 className=" text-xl lg:text-5xl text-right py-8">
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
          </div>
          <div className=" flex justify-center m-2 lg:w-full h-10 w-52 overflow-auto">
            <h6 className="text-sm lg:text-xl italic pr-2 text-center font-bold">
              Chapter {data?.foundChapter_number}:
            </h6>
            <h6 className="text-sm lg:text-xl italic text-left ">
              {data?.foundChapter_name}
              <span className="text-xs">
                [{data?.chapter_ref?.chapter_hadith_number}]
              </span>
            </h6>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="">
        <div className="">
          {data?.text ? (
            textBody()
          ) : (
            <div>
              <div className="bg-gray-300 flex flex-row justify-center rounded animate-none w-full">
                <div className="h-full bg-gray-400 w-1/3">
                  <div className="h-12 bg-gray-400 w-2/3 my-2"></div>
                  <div className="h-32 bg-gray-400  my-2"></div>
                </div>
                <div className=" justify-end h-full bg-slate-700 w-2/3">
                  <Lottie
                    className=" lg:ml-32 "
                    animationData={hadithIcon}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HadithLoader;
