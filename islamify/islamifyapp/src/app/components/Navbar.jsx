"use client";
import React, { useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { saveState } from "../redux/navBarSlice";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveState(menuOpen));
  }, [menuOpen]);
  
  return (
    <div
      className={`transition-all duration-1000 h-screen ${
        menuOpen
          ? " bg-gradient-to-br from-slate-900 via-slate-700 to-slate-600 w-full"
          : " bg-inherit "
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
            <li className="text-yellow-300 cursor-pointer m-2 p-2  font-semibold  text-lg hover:bg-gradient-to-r from-slate-700 via-amber-500 to-amber-400 rounded-lg ">
              Profile
              <span className=" mx-2 badge badge-ghost animate-pulse">
                soon
              </span>
            </li>
            <li
              onClick={() => setShowHadithBooks(!showHadithBooks)}
              className={`cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-gradient-to-r from-slate-700 via-amber-500 to-amber-400 rounded-lg`}
            >
              Hadith Books
              <div className=" mx-2 badge badge-ghost animate-pulse">Soon</div>
              <ul>
                {showHadithBooks &&
                  books.map((item, index) => {
                    console.log(item);
                    return (
                      <div>
                        <li className="m-1 p-1" key={index}>
                          {item}
                        </li>
                      </div>
                    );
                  })}
              </ul>
            </li>

            <li className="cursor-pointer m-2 p-2 text-white font-semibold  text-lg hover:bg-gradient-to-r from-slate-700 via-amber-500 to-amber-400 rounded-lg ">
              Quran
              <span className=" mx-2 badge badge-ghost animate-pulse">
                soon
              </span>
            </li>
            <li className="cursor-pointer m-2 p-2 text-white font-semibold text-lg hover:bg-gradient-to-r from-slate-700 via-amber-500 to-amber-400 rounded-lg">
              Zakat Calculator
              <div className=" mx-2 badge badge-ghost animate-pulse">Soon</div>
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default Navbar;
