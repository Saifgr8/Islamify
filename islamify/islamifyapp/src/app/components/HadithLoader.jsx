"use client";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import { MdCommentBank } from "react-icons/md";
import bookAnim from "../assets/book.json";
import hadithIcon from "../assets/hadithSA.json";

const HadithLoader = ({ data, randomHadith }) => {
  const [showGrades, setShowGrades] = useState(true);
  console.log(data);

  //console.log(isHovered);
  //console.log(data);
  const ref = useRef();

  useEffect(() => {
    const time = setTimeout(() => {
      ref.current.pause();
    }, 1500);
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
      <div className="flex flex-row justify-center items-center">
        <div className="mx-2">
          <input
            onChange={() => setSelectedLanguage("Arabic")}
            checked={selectedLanguage === "Arabic"}
            type="radio"
            id="arabic"
          />
          <label className="px-3  font-semibold text-3xl" htmlFor="arabic">
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
          <label className="px-3 font-semibold text-3xl" htmlFor="english">
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
          <label className="px-3 font-semibold text-3xl" htmlFor="urdu">
            اردو
          </label>
        </div>
      </div>
    );
  };

  const gradeSection = () => {
    return (
      <div className="m-4 z-50">
        {gradesData?.length > 0 ? (
          <div className="mx-2">
            <span
              onClick={() => setShowGrades(!showGrades)}
              className="font-semibold text-2xl"
            >
              Grades<span className="text-sm">(authenticity)</span>:
            </span>
            {showGrades && (
              <div className="flex flex-col">
                <div className="overflow-y-scroll h-64 ">
                  {gradesData.map((item, index) => {
                    const grade = item.grade.split(" ");
                    const finalGrade = grade[0];
                    return (
                      <div key={index}>
                        <ol className={`list-disc m-2 p-2`}>
                          <li className="bg-gradient-to-r from-inherit via-slate-500 to-amber-600 p-2 rounded-r-2xl shadow-md shadow-yellow-600">
                            <span className="font-serif font-bold text-xl">
                              {finalGrade}
                            </span>
                            <span className="text-xl">({item.name})</span>
                          </li>
                        </ol>
                      </div>
                    );
                  })}
                </div>
                <span className="border-2 bg-white my-2"></span>
                <div className="flex flex-col gap-2 overflow-y-scroll h-64 bg-white text-black m-2 p-2 rounded-xl text-xl">
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
          <span>No grades available</span>
        )}
      </div>
    );
  };

  const textBody = () => {
    return (
      <div className=" flex rounded-3xl shadow-xl shadow-amber-500 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600 text-white w-full">
        <div className="w-1/4">{gradeSection()}</div>
        <div className=" flex flex-col items-center justify-center w-3/4">
          <div className="flex justify-evenly items-center">
            <Lottie
              loop={false}
              autoPlay={false}
              lottieRef={ref}
              className="lg:h-40 lg:w-40 h-20 w-20"
              animationData={bookAnim}
            />{" "}
            <span className="font-serif text-2xl lg:text-4xl">
              {data?.foundBook_name}
            </span>
            <span className="text-sm font-serif  lg:text-lg px-2">
              [{data?.book_ref?.book_hadith_number}]
            </span>
            {selectedLanguage === "English" ? (
              <div className="ml-32">
                <button
                  onClick={randomHadith}
                  className="bg-gradient-to-r from-inherit via-amber-200 to-amber-500  m-2 py-2 px-6 rounded-xl shadow-xl text-black shadow-yellow-600 cursor-pointer text-xl hover:text-2xl"
                >
                  Random
                </button>
              </div>
            ) : selectedLanguage === "Arabic" ? (
              <div className="ml-32">
                <button
                  onClick={randomHadith}
                  className="bg-gradient-to-r from-inherit via-amber-200 to-amber-500  m-2 py-2 px-6 rounded-xl shadow-xl text-black shadow-yellow-600 cursor-pointer text-xl hover:text-2xl"
                >
                  عشوائي
                </button>
              </div>
            ) : selectedLanguage === "Urdu" ? (
              <div className="ml-32">
                <button
                  onClick={randomHadith}
                  className="bg-gradient-to-r from-inherit via-amber-200 to-amber-500  m-2 py-2 px-6 rounded-xl shadow-xl text-black shadow-yellow-600 cursor-pointer text-xl hover:text-2xl"
                >
                  بے ترتیب
                </button>
              </div>
            ) : null}
          </div>
          <div>{languageSelection()}</div>
          <div className="m-2 p-2 w-11/12">
            {selectedLanguage === "English" ? (
              <div className="overflow-y-scroll mb-4 pr-2 h-80">
                <h1 className=" text-3xl lg:text-5xl py-8 text-left">
                  {data?.text?.english ? (
                    <div className="flex flex-col">
                      <span className="text-xl text-blue-300 py-3">
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
                <h1 className=" text-3xl lg:text-5xl text-right py-8">
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
                <h1 className=" text-3xl lg:text-5xl text-right py-8">
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
          <div className="flex justify-center lg:mr-36 my-2 w-full">
            <h6 className="text-base lg:text-xl italic px-2 text-center">
              Chapter {data?.foundChapter_number}:
            </h6>
            <h6 className="text-base lg:text-xl italic text-center">
              {data?.foundChapter_name} - [
              {data?.chapter_ref?.chapter_hadith_number}]
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
            <div className="bg-gray-300 rounded animate-pulse w-full">
              <div className="h-12 bg-gray-400 w-2/3 my-2"></div>
              <div className="h-32 bg-gray-400  my-2"></div>
              <div className="h-8 bg-gray-400 w-1/3 my-2"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HadithLoader;
