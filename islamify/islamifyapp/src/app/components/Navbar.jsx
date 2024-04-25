"use client";
import React from "react";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

const books = [
  "Sunan Ibn Majah",
  "40 Hadiths of An Nawawi",
  "40 Hadith of Qudsi",
  " 40 Hadith of Shah Waliullah Dehlawi",
  "Jami At Tirmidi",
  "Muwatta Malik",
  "Sahih Al Bukhari",
  "Sunan Abu Dawud",
  "Sunan An Nasai",
  "Sahih Muslim",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHadithBooks, setShowHadithBooks] = useState(false);
  const handleHadithOpen = () => {
    setShowHadithBooks(!showHadithBooks);
  };
  
  return (
    <div
      className={`transition-colors duration-1000 h-screen ${
        menuOpen ? "bg-green-300 w-full" : "bg-inherit"
      }`}
    >
      <BurgerMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setShowHadithBooks={setShowHadithBooks}
      />
      {menuOpen && (
        <div className="m-2 p-2">
          <ol className="list-disc">
            <Link href="/">
              <li
                className="cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-green-700 rounded-lg"
              >
                Home
              </li>
            </Link>
            <li
              className={`cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-green-700 rounded-lg ${
                  showHadithBooks ? "bg-green-700" : "bg-inherit"
                }`}
              onClick={handleHadithOpen}
            >
              <div className="flex justify-between">
                Hadith
                {(showHadithBooks && <SlArrowDown className="mt-1" />) || (
                  <SlArrowRight className="mt-1" />
                )}
              </div>
              {showHadithBooks && (
                <ol className="m-2 p-2  list-decimal">
                  {books.map((item) => {
                    return (
                      <Link href={`/pages/${item}`}>
                        <li key={books.indexOf(item)} className="m-2 py-1 px-2 lg:text-lg text-xs font-bold"> 
                          {item}
                        </li>
                      </Link>
                    );
                  })}
                </ol>
              )}
            </li>

            <li className="cursor-pointer m-2 p-2 text-white font-semibold  text-lg hover:bg-green-700 rounded-lg ">
              Quran
            </li>
            <li className="cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-green-700 rounded-lg">
              About us
            </li>
            <li className="cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-green-700 rounded-lg">
              Support
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Navbar;
