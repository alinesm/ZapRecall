import React, { useState } from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";
import arrow from "../assets/img/seta_play.png";

function FlasCard({ clickCard, cardCliked, card, index, count, setCount }) {
  const [perguntaCor, setPerguntaCor] = useState("#333333");
  const [icon, setIcon] = useState(arrow);

  if (cardCliked === index) {
    return (
      <PerguntaAberta
        setPerguntaCor={setPerguntaCor}
        card={card}
        index={index}
        setIcon={setIcon}
        count={count}
        setCount={setCount}
      />
    );
  } else {
    return (
      <PerguntaFechada
        perguntaCor={perguntaCor}
        clickCard={clickCard}
        index={index}
        icon={icon}
      />
    );
  }
}

export default FlasCard;
