import React from "react";
import { NavLink } from "react-router-dom";

export function Container() {
  return (
    <div className="w-full pt-2">
      <h1 className="text-xl text-black font-semibold mb-5">
        Create Flashcard
      </h1>
      <div className="flex items-center space-x-10 mb-3">
        <button className="text-sm font-semibold text-red-700">
          Create New
        </button>
        <button className="text-sm font-semibold text-red-700">
          My Flashcard
        </button>
      </div>
      <hr className="border bg-slate-300 border-slate-300 mb-8" />
    </div>
  );
}
