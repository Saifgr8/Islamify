"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import dice from "../assets/dice.json";
import { MdCommentBank } from "react-icons/md";


export const dummyData = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: It goes on.",
    author: "Robert Frost",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
];

const HadithLoader = ({randomId, handleRandomId}) => {


  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-end">
          <Lottie
            onClick={handleRandomId}
            className=" h-24 lg:h-40 absolute top-0 right-0 m-2 p-2 cursor-pointer"
            animationData={dice}
          />
          <h1 className="absolute right-3 top-20 lg:top-40 lg:right-0 my-2 lg:mr-12 p-2 font-semibold text-lg">
            random
          </h1>
        </div>
        <h1 className=" text-3xl lg:text-7xl">{dummyData[randomId]?.quote}</h1>
        <div className="flex m-1 p-1">
          <MdCommentBank className="mx-2 h-7 w-7" />
          <h6 className="text-base lg:text-xl italic">{dummyData[randomId]?.author}</h6>
        </div>
      </div>
    </>
  );
};

export default HadithLoader;
