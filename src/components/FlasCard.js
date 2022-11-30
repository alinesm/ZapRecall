import React, { useState } from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

function FlasCard({ clickCard, cardCliked, card, index }) {
  const [perguntaCor, setPerguntaCor] = useState("#333333");

  if (cardCliked === index) {
    return (
      <PerguntaAberta
        setPerguntaCor={setPerguntaCor}
        card={card}
        index={index}
      />
    );
  } else {
    return (
      <PerguntaFechada
        perguntaCor={perguntaCor}
        clickCard={clickCard}
        index={index}
      />
    );
  }
}

export default FlasCard;
