"use client";
import Image from "next/image";
import HadithLoader from "./components/HadithLoader";
import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getRandomHadith();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const getRandomHadith = async () => {
    try {
      let data;
      let res;
      let maxAttempts = 10;

      for (let attempts = 0; attempts < maxAttempts; attempts++) {
        //console.log("Attempt number:", attempts);
        res = await fetch("./apis/hadith", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          data = await res.json();
          if (data?.foundChapter_number !== "0") {
            //console.log("Valid data found:", data);
            setData(data);
            break;
          } else {
            //console.log("Triggered")
            continue;
          }
        } else {
          console.log("Failed to fetch data, status:", res.status);
          // Consider what to do if fetch fails - maybe handle differently or retry
        }
      }
    } catch (error) {
      console.error("Error in fetching hadith:", error);
    }
  };

  return (
    <main className={`flex justify-center items-center h-screen bg-slate-900 `}>
      <div className="w-full p-8">
        <Header />
        <HadithLoader data={data} randomHadith={getRandomHadith} />
        <Footer />
      </div>
    </main>
  );
}
