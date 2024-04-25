"use client";
import Image from "next/image";
import HadithLoader from "./components/HadithLoader";
import { useEffect, useState } from "react";
import { dummyData } from "./components/HadithLoader";

const colors = [
  "bg-gray-200",
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-indigo-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-black-200",
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
  const [randomId, setRandomId] = useState(0);
  const [colorId, setColorId] = useState(0);

  useEffect(() => {
    handleRandomId();
  }, []);

  const handleRandomId = () => {
    const random = Math.floor(Math.random() * dummyData.length);
    const colorRandom = Math.floor(Math.random() * colors.length);
    setRandomId(random);
    setColorId(colorRandom);
  };
  const randColor = colors[colorId];
  console.log(randColor);
  return (
    <main className={`flex justify-center items-center h-screen ${randColor}`}>
      <div className="w-full p-8">
        <HadithLoader randomId={randomId} handleRandomId={handleRandomId} />
      </div>
    </main>
  );
}
/*{"yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "black",
  "white",
  "slate",
  "zinc",
  "neutral",
  "stone",
  "orange",
  "amber",
  "lime",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "violet",
  "fuchsia",
  "rose"} */
