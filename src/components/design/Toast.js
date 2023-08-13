import React from "react";
import { BsCheckCircle } from "react-icons/bs";

export function Toast({ fn, toastClass }){
  return (
    // Displaying a toast notification with a success icon.
    <div
      data-testid="toast-dataid"
      className={`p-5 space-y-4 bg-blue-600 w-72 sm:w-96 rounded-md text-white fixed top-2 ${toastClass} left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out z-50`}
    >
      <div>
        <h3 className="flex flex-col sm:flex-row items-center gap-2 text-xl font-semibold mb-2">
          <i className="text-2xl text-blue-200">
            <BsCheckCircle />
          </i>
           {/* Message about the created flashcards */}
           Flashcard  created.
        </h3>
        <p className="text-blue-200">
         check your created flashcards.
        </p>
      </div>
      <div className="text-right">
        <button
          type="button"
          onClick={fn}
          className="font-semibold rounded-md px-4 py-1 text-blue-200 min-w-max hover:bg-blue-700 border-2 border-blue-300 transition-all hover:border-blue-700 active:animate-ping"
        >
            {/* Dismiss button */}
          Dismiss
        </button>
      </div>
    </div>
  );
};