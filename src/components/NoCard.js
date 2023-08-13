import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import notfound from "../assets/notfound.png";

const NoCard = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`h-[80vh] flex justify-center flex-col items-center ${
        theme ? "bg-white text-black" : "bg-slate-900 text-white"
      }`}
    >
      <img src={notfound} alt="notfound" />
      <h6 className="text-3xl mb-10">
        There is no card Please create new Card
      </h6>
      <Link to={"/"}>
        <button className="border-2 border-red-700 hover:bg-red-700 hover:text-white px-2 py-2 rounded-lg transition-all duration-500">
          Create new Card
        </button>
      </Link>
    </div>
  );
};

export default NoCard;
