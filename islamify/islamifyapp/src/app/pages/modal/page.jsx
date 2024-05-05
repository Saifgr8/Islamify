"use client";
import Lottie from "lottie-react";
import issueAnim from "../../assets/issue.json";

const Modal = ({ onClose, data }) => {
  if (!onClose) return null;

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center bg-slate-800 h-full w-full bg-opacity-80">
      <div className=" h-1/2 lg:h-11/12 lg:w-1/2 w-11/12 rounded-xl py-4 bg-red-400 flex flex-row justify-center items-center text-2x bg-gradient-to-r from-slate-600 via-slate-400 to-yellow-400">
        <div className="">
          <Lottie animationData={issueAnim} className="h-40 w-40" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-serif text-base text-black lg:text-xl">
            Send your issue, we will look into it soon inshallah.
          </span>
          <div className="flex flex-col">
            <input
              type="text"
              className="cursor-not-allowed mr-1 my-1 bg-gradient-to-r rounded-lg from-slate-200 via-gray-200 to-yellow-400"
              disabled
              placeholder="ID"
              value={`Id: ${data?._id}`}
            />
            <div className="my-1">
              <input
                type="text"
                className="cursor-not-allowed rounded-lg bg-gray-300"
                disabled
                placeholder="Book_Name"
                value={`Book: ${data?.foundBook_name}`}
              />
              <input
                type="text"
                className="cursor-not-allowed mr-1 rounded-lg bg-gradient-to-r from-slate-300 to-yellow-400"
                disabled
                placeholder="HadithNumber"
                value={`Hadith no: ${data?.book_ref?.book_hadith_number}`}
              />
            </div>
            <input
              required
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="bg-gradient-to-r my-1 font-bold rounded-lg  from-gray-300 via-gray-400 to-yellow-400"
            />
            <textarea
              required
              className="lg:h-40 h-20 w-full overflow-auto rounded-lg bg-gradient-to-r from-gray-300 via-gray-200 to-yellow-400"
              placeholder="Issue regarding above hadith"
            />
          </div>
          <button
            onClick={onClose}
            className=" lg:mt-1 mt-3 py-1 px-8 text-2xl transform transition duration-300 active:scale-90 font-serif bg-gradient-to-r from-slate-600 via-yellow-300 to-yellow-600 rounded-lg shadow-xl shadow-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
