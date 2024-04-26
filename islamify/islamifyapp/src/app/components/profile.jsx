"use client";
import React from "react";
import { useState } from "react";

const Profile = () => {
  const [bookName, setBookName] = useState("second");
  const [bookDesc, setBookDesc] = useState("second");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!bookDesc || !bookName){
        console.error("Missing value")
    }
    try {
      const res = await fetch("../apis/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({bookName, bookDesc})
      });
      if (res.ok) {
        console.log("connection successfull");
        const form = e.target;
        form.reset()
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
            onChange={(e) => setBookName(e.target.value)}
            className="m-2 p-2 w-fit"
            type="text"
            placeholder="Book name"
          />
          <input
            onChange={(e) => setBookDesc(e.target.value)}
            className="m-2 p-2 w-fit"
            type="text"
            placeholder="description"
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
