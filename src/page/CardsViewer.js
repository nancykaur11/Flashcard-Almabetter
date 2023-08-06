import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardsViewer = () => {
  const { group_Id, card_Id } = useParams();
  const [activeGroup, setActiveGroup] = useState({});
  const [activeCard, setActiveCard] = useState([]);
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    const foundCard = cards.find((item) => item.groups.group_Id === group_Id);
    setActiveGroup(foundCard || {});
  }, [group_Id, card_Id]);

  useEffect(() => {
    setActiveCard(
      activeGroup?.terms?.map((item) =>
        item.card_Id === card_Id ? item : null
      )
    );
  }, [activeGroup]);

  return (
    <div>
      <h1>{activeGroup?.groups?.group}</h1>
      
    </div>
  );
};

export default CardsViewer;
