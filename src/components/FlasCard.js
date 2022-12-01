import React, { useState } from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";
import arrow from "../assets/img/seta_play.png";

function FlasCard({
  clickCard,
  setCardCliked,
  cardCliked,
  card,
  index,
  count,
  setCount,
}) {
  const [perguntaCor, setPerguntaCor] = useState("#333333");
  const [icon, setIcon] = useState(arrow);
  const [goToChecked, setGoToChecked] = useState(false);

  if (cardCliked === index) {
    return (
      <PerguntaAberta
        setPerguntaCor={setPerguntaCor}
        card={card}
        index={index}
        setIcon={setIcon}
        count={count}
        setCount={setCount}
        setGoToChecked={setGoToChecked}
        setCardCliked={setCardCliked}
      />
    );
  } else {
    return (
      <PerguntaFechada
        perguntaCor={perguntaCor}
        clickCard={clickCard}
        index={index}
        icon={icon}
        goToChecked={goToChecked}
      />
    );
  }
}

export default FlasCard;
