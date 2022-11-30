import React, { useState } from "react";
import cards from "../cards";
import FlasCard from "./FlasCard";

function Questions() {
  const [cardCliked, setCardCliked] = useState(null);

  function clickCard(index) {
    console.log(index);
    setCardCliked(index);
  }
  // console.log(cards);

  return (
    <>
      {cards.map((card, index) => {
        return (
          <FlasCard
            clickCard={clickCard}
            cardCliked={cardCliked}
            setCardCliked={setCardCliked}
            card={card}
            index={index}
          />
        );
      })}
    </>
  );
}

export default Questions;
