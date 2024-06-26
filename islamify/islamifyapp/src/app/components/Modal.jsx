"use client";
import Lottie from "lottie-react";
import issueAnim from "../assets/issue.json";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ onClose, data }) => {
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const id = data?._id;
  const book_name = data?.foundBook_name;
  const book_hadith_number = data?.book_ref?.book_hadith_number;

  if (!onClose) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("../apis/issues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          book_name,
          book_hadith_number,
          email,
          problem,
        }),
      });
      if (res.ok) {
        onClose();
        window.alert("Issue successfully submitted, Jazakallah Khair");
      } else {
        console.log("Failed to submit issue");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="z-50 fixed top-0 left-0 flex justify-center items-center bg-slate-800 h-full w-full bg-opacity-80">
      <div className=" h-10/12 lg:h-11/12 lg:w-1/2 w-11/12 rounded-xl py-4 bg-red-400 flex flex-row justify-center items-center text-2x bg-gradient-to-r from-slate-600 via-slate-400 to-yellow-500">
        <div className="">
          <Lottie animationData={issueAnim} className="h-40 w-40" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-3 w-full">
              <span className="font-serif text-sm text-black lg:text-xl">
                Send your issue, we will look into it soon inshallah.
              </span>

              <IoCloseOutline style={{color:'white'}} className="lg:h-10 animate-pulse lg:w-10 cursor-pointer h-14 w-14 lg:hover:h-12 lg:hover:w-12" onClick={() => onClose()} />
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                className="font-bold cursor-not-allowed mr-1 my-1 bg-gradient-to-r rounded-lg from-slate-200 via-gray-200 to-yellow-400"
                disabled
                placeholder="ID"
                value={`Id: ${data?._id}`}
              />
              <div className="my-1">
                <input
                  type="text"
                  className="cursor-not-allowed font-bold rounded-lg bg-gray-300"
                  disabled
                  placeholder="Book_Name"
                  value={`Book: ${data?.foundBook_name}`}
                />
                <input
                  type="text"
                  className="cursor-not-allowed mr-1 font-bold rounded-lg bg-gradient-to-r from-slate-300 to-yellow-400"
                  disabled
                  placeholder="HadithNumber"
                  value={`Hadith no: ${data?.book_ref?.book_hadith_number}`}
                />
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="text"
                name=""
                id=""
                placeholder="Your Email/ Name"
                className="bg-gradient-to-r my-1 font-bold rounded-lg  from-gray-300 via-gray-400 to-yellow-400"
              />
              <textarea
                onChange={(e) => setProblem(e.target.value)}
                required
                className="lg:h-40 h-20 w-full overflow-auto rounded-lg bg-gradient-to-r from-gray-300 via-gray-200 to-yellow-400"
                placeholder="Issue regarding above hadith"
              />
            </div>
            <button className=" lg:mt-1 mt-3 py-1 px-8 text-2xl transform transition duration-300 active:scale-90 font-serif bg-gradient-to-r from-slate-600 via-yellow-300 to-yellow-600 rounded-lg shadow-xl shadow-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
