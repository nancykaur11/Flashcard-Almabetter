import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const Flashcards = () => {
  const cards = useSelector((state) => state.cards);
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`pt-12 transition-all min-h-screen duration-700 ${
        theme ? "bg-white-100 tex-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="auto flex flex-wrap w-full justify-around items-center px-[10%]">
        {cards.map(({ groups, terms }, index) => (
          <div
            key={index}
            className={`w-[400px] relative h-56 rounded-lg transition-all duration-700 ${
              theme
                ? "shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
                : "shadow-2xl shadow-blue-500/20"
            } hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]`}
          >
            <img
              src={groups.Profile}
              className="absolute w-20 h-20 left-1/2 -translate-x-10 -top-10 rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            />
            <h3 className="text-center mt-11">{groups.group}</h3>
            <p className="text-center">{groups.groupDesc}</p>
            <p className="text-center mt-5">{terms.length} Cards</p>
            <Link to={`/flashcards/${groups.group_Id}/${terms[0].card_Id}`}>
              <button className="absolute -translate-x-1/2 left-1/2 border-2 border-red-700 px-3 bottom-3 rounded-md">
                View Cards
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
