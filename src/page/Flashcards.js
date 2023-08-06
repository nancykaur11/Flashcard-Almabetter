import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Flashcards = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <div>
      <h1>My Cards</h1>
      <div>
        {cards.map(({ groups }, index) => (
          <div key={index}>
            <h3>{groups.group}</h3>
            <p>{groups.groupDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
