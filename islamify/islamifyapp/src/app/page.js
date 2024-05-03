"use client";
import Image from "next/image";
import HadithLoader from "./components/HadithLoader";
import { useEffect, useState, useRef } from "react";

let colors = [
  `bg-gray-300`,
  "bg-red-300",
  "bg-green-300",
  "bg-blue-300",
  "bg-indigo-300",
  "bg-purple-300",
  "bg-pink-300",
  "bg-white-300",
  "bg-slate-300",
  "bg-zinc-300",
  "bg-neutral-300",
  "bg-stone-300",
  "bg-orange-300",
  "bg-amber-300",
  "bg-lime-300",
  "bg-emerald-300",
  "bg-teal-300",
  "bg-cyan-300",
  "bg-sky-300",
  "bg-violet-300",
  "bg-fuchsia-300",
  "bg-rose-300",
  "bg-gray-200",
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-indigo-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-white-200",
  "bg-slate-200",
  "bg-zinc-200",
  "bg-neutral-200",
  "bg-stone-200",
  "bg-orange-200",
  "bg-amber-200",
  "bg-lime-200",
  "bg-emerald-200",
  "bg-teal-200",
  "bg-cyan-200",
  "bg-sky-200",
  "bg-violet-200",
  "bg-fuchsia-200",
  "bg-rose-200",
];

export default function Home() {
  const [data, setData] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    getRandomHadith();
  }, []);

  const randomIndex = () => {
    const randColorIndex = Math.floor(Math.random() * colors.length);
    setColorIndex(randColorIndex);
  };

  const getRandomHadith = async () => {
    try {
      const res = await fetch("../apis/hadith");
      //console.log(res)
      if (!res.ok) {
        console.log("Error fetching hadith");
      }
      const data = await res.json();

      setData(data);
      randomIndex();
    } catch (error) {
      console.log(error);
    }
  };
  const bgColor = colors[colorIndex];
  return (
    <main className={`flex justify-center items-center h-screen bg-slate-900 `}>
      <div className="w-full p-8">
        <HadithLoader data={data} randomHadith={getRandomHadith} />
      </div>
    </main>
  );
}
