import React from "react";
import logo from "../logo/logo.png";
import "../App.css";
import { FaSun, FaMoon } from "react-icons/fa"; 
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/features/theme";

export function Navbar() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        theme ? "bg-white-100" : "bg-slate-900"
      } transition-all duration-700 px-[15px]  h-[95px] py-4 flex justify-between items-center shadow-lg ${
        theme ? "shadow-slate-400" : "shadow-white"
      }`}
    >
      <div>
        <img
          src={logo}
          alt="Logo"
          className={`h-[40px] transition-all duration-700 ${!theme ? "invert" : null}`}
        />
      </div>

      <div>
        {theme && theme ? (
          <FaMoon
            className="text-yellow-600 cursor-pointer text-2xl"
            onClick={() => dispatch(update())}
          />
        ) : (
          <FaSun
            className="text-yellow-500 cursor-pointer text-2xl"
            onClick={() => dispatch(update())}
          />
        )}
      </div>
    </div>
  );
}
