import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import notfound from "../assets/notfound.png";

// Component to display when no card is found
const NoCard = () => {
  // Redux state for theme
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`h-[80vh] flex justify-center flex-col items-center ${
        theme ? "bg-white text-black" : "bg-slate-900 text-white"
      }`}
    >
      <img src={notfound} alt="notfound" />

      {/* Display message */}
      <h6 className="text-3xl mb-10">
        There is no card. Please create a new card.
      </h6>

      {/* Link to create a new card */}
      <Link to={"/"}>
        <button className="border-2 border-red-700 hover:bg-red-700 hover:text-white px-2 py-2 rounded-lg transition-all duration-500">
          Create new Card
        </button>
      </Link>
    </div>
  );
};

export default NoCard;
