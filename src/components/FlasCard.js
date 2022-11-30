import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

function FlasCard({ clickCard, cardCliked, card, index }) {
  if (cardCliked === index) {
    return <PerguntaAberta card={card} index={index} />;
  } else {
    return <PerguntaFechada clickCard={clickCard} index={index} />;
  }
}

export default FlasCard;
