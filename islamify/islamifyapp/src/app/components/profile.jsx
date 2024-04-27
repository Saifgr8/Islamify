"use client";
import React from "react";
import { useState } from "react";

const Profile = () => {
  const [bookId, setBookId] = useState("");
  const [chapterNumber, setChapterNumber] = useState("");
  const [title, setTitle] = useState("")
  const [hadithStart, setHadithStart] = useState("");
  const [hadithEnd, setHadithEnd] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!chapterNumber || !bookId) {
      console.error("Missing value");
      return;
    }
    try {
      const res = await fetch("../apis/chapters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId, chapterNumber, title, hadithStart, hadithEnd }),
      });
      
      if (res.ok) {
        console.log("connection successfull");
        const form = e.target;
        form.reset()
      } else {
         console.error("Failed to add book:", res.statusText);
      }
    } catch (error) {
      console.log("Error client side");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="m-2 p-2 flex flex-col gap-3">
          <input
            onChange={(e) => setBookId(e.target.value)}
            className="m-2 p-2 w-fit"
            type="text"
            placeholder="Book_Id"
          />
          <input
            onChange={(e) => setChapterNumber(e.target.value)}
            className="m-2 p-2 w-full resize-none border rounded"
            type="text"
            placeholder="chapterNo"
          />
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="m-2 p-2 w-full resize-none border rounded"
            type="text"
            placeholder="title"
          />
          <input
            onChange={(e) => setHadithStart(e.target.value)}
            className="m-2 p-2 w-full resize-none border rounded"
            type="text"
            placeholder="hadiddstart"
          />
          <input
            onChange={(e) => setHadithEnd(e.target.value)}
            className="m-2 p-2 w-full resize-none border rounded"
            type="text"
            placeholder="hadithend"
          />
          <button className="m-2 p-2 bg-blue-300 rounded-l shadow-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
