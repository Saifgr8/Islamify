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
  "Jami Al Tirmidi",
  "Muwatta Malik",
  "Sahih Al Bukhari",
  "Sunan Abu Dawud",
  "Sunan An Nasai",
  "Sahih Muslim",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHadithBooks, setShowHadithBooks] = useState(false);

  return (
    <div
      className={`transition-colors duration-1000 h-screen ${
        menuOpen
          ? "bg-gradient-to-br from-slate-900 via-slate-700 to-slate-600 w-full"
          : "bg-inherit"
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
              <li className="cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-gradient-to-r from-slate-700 via-amber-500 to-amber-400 rounded-lg">
                Home
              </li>
            </Link>
            <li
            onClick={() => setShowHadithBooks(!showHadithBooks)}
              className={`cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-gradient-to-r from-slate-700 via-amber-500 to-amber-400 rounded-lg`}
            >
              Hadith Books
              <div className=" mx-2 badge badge-ghost">Soon</div>
              <ul>
                {showHadithBooks && books.map((item, index) => {
                  console.log(item)
                  return (
                    <div>
                      <li className="m-1 p-1" key={index}>{item}</li>
                    </div>
                  )
                })}
              </ul>
            </li>

            <li className="cursor-pointer m-2 p-2 text-white font-semibold  text-lg hover:bg-gradient-to-r from-slate-700 via-amber-500 to-amber-400 rounded-lg ">
              Quran
              <div className=" mx-2 badge badge-ghost">Soon</div>
            </li>
            <li className="cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-gradient-to-r from-slate-700 via-amber-500 to-amber-400 rounded-lg">
              Zakat Calculator
              <div className=" mx-2 badge badge-ghost">Soon</div>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Navbar;
