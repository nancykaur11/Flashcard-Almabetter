import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export function Container() {
  // Get the current theme from the Redux store
  const theme = useSelector((state) => state.theme);
  return (
    // The main container div that holds the UI elements.
    <div
      className={`w-full pt-2 ${
        theme ? "bg-white-100" : "bg-slate-900"
      } transition-all duration-700`}
    >
      <h1
        className={`text-xl ${
          theme ? "text-black" : "text-white"
        } font-semibold transition-all duration-700 mb-5`}
      >
        Create Flashcard
      </h1>
      <div className="flex items-center space-x-10 mb-3">
        <NavLink to={"/"}>
          <button
            className={`text-sm font-semibold ${
              theme ? "text-red-700" : "text-red-500"
            }`}
          >
            Create New
          </button>
        </NavLink>
        <NavLink to={"/flashcards"}>
          <button
            className={`text-sm font-semibold ${
              theme ? "text-red-700" : "text-red-500"
            }`}
          >
            My Flashcard
          </button>
        </NavLink>
      </div>
      <hr className="border bg-slate-300 border-slate-300 mb-8" />
    </div>
  );
}
