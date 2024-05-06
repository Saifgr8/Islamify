"use client";
import React from "react";
import "./menu.css";


const BurgerMenu = ({ menuOpen, setMenuOpen, setShowHadithBooks }) => {
  //console.log(menuOpen)

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setShowHadithBooks(false);
    }
  };
  return (
    <div
      className={`menu ${menuOpen ? "open" : ""}`}
    >
      <div className="menubtn" onClick={handleClick}></div>
    </div>
  );
};

export default BurgerMenu;
