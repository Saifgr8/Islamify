import React from 'react'

const Footer = () => {
  return (
    <div className=" flex justify-center items-center cursor-pointer">
      <div className="absolute bottom-0 mb-1 ">
        <span className=" text-lg bg-gradient-to-r from-white via-amber-400 to-amber-600 text-transparent bg-clip-text">
          About | Support | Developer | Contact
        </span>
      </div>
    </div>
  );
}

export default Footer