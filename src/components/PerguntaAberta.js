import React, { useState } from "react";
import styled from "styled-components";
import turnAround from "../assets/img/seta_virar.png";
import ContainerButtons from "./ContainerButtons";
import wrong from "../assets/img/icone_erro.png";
import correct from "../assets/img/icone_certo.png";
import interrogation from "../assets/img/icone_quase.png";

export default function PerguntaAberta({
  card,
  index,
  setPerguntaCor,
  setIcon,
  setCount,
  count,
  setCardCliked,
}) {
  const [goToAnswer, setGoToAnswer] = useState(false);
  const [forget, setForget] = useState(false);
  const [remember, setRemember] = useState(false);
  const [almostForget, setAlmostForget] = useState(false);

  function forgetButton() {
    setForget(true);
    setPerguntaCor("#ff3030");
    setIcon(wrong);
    setCount(count + 1);
    setCardCliked(null);
  }

  function almostButton() {
    setAlmostForget(true);
    setPerguntaCor("#ff922e");
    setIcon(interrogation);
    setCount(count + 1);
    setCardCliked(null);
  }

  function zap() {
    setRemember(true);
    setPerguntaCor("#2fbe34");
    setIcon(correct);
    setCount(count + 1);
    setCardCliked(null);
  }

  return (
    <PerguntaAbertaStyled key={index} data-test="flashcard">
      <p data-test="flashcard-text">
        {!goToAnswer ? card.question : card.answer}
      </p>
      {!goToAnswer ? (
        <img
          onClick={() => setGoToAnswer(true)}
          alt=""
          src={turnAround}
          data-test="turn-btn"
        />
      ) : (
        <ContainerButtons
          forgetButton={forgetButton}
          almostButton={almostButton}
          zap={zap}
          index={index}
          setPerguntaCor={setPerguntaCor}
          setIcon={setIcon}
        />
      )}
    </PerguntaAbertaStyled>
  );
}

const PerguntaAbertaStyled = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background-color: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
