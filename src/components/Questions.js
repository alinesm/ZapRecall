import React, { useState } from "react";
import FlasCard from "./FlasCard";

function Questions({ cards, clickCard, cardCliked, setCardCliked }) {
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
