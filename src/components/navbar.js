import React from "react";
import logo from "../logo/logo.jpeg";
import "../App.css"
import { FaSun, FaMoon } from "react-icons/fa"; // Assuming you have installed the react-icons package

export function Navbar() {
  const darkMode = false;

  return (
    <div className="bg-white-100 px-[15px]  h-[95px] py-4 flex justify-between items-center custom-shadow">
      <div>
        <img src={logo} alt="Logo" className="h-[80px] w-[80px]" />
      </div>
     
      <div>
        {darkMode ? (
          <FaMoon className="text-white text-2xl" />
        ) : (
          <FaSun className="text-yellow-500 text-2xl" />
        )}
      </div>
    </div>
  );
}


