import React, { useState } from "react";
import FlasCard from "./FlasCard";

export default function Questions({ cards, count, setCount }) {
  const [cardCliked, setCardCliked] = useState(null);

  function clickCard(index) {
    setCardCliked(index);
  }
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
            count={count}
            setCount={setCount}
          />
        );
      })}
    </>
  );
}
