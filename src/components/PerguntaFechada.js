import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/img/seta_play.png";

function PerguntaFechada({ perguntaCor, clickCard, index, icon }) {
  return (
    <PerguntaFechadaStyled
      perguntaStyle={perguntaCor}
      onClick={() => clickCard(index)}
    >
      <p>Pergunta {index + 1}</p>
      <img alt="" src={icon} />
      {/* <img alt="" src={wrong} /> */}
      {/* <img alt="" src={correct} /> */}
    </PerguntaFechadaStyled>
  );
}

export default PerguntaFechada;

const PerguntaFechadaStyled = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.perguntaStyle};
    /* color: ${(props) => {
      if (props.perguntaStyle === "red") {
        return "#ff922e";
      } else if (props.perguntaStyle === "green") {
        return "#2FBE34";
      } else if (props.perguntaStyle === "orange") {
        return "#ff3030";
      } else {
        return "#333333";
      }
    }}; */
    /* color: #333333; */
    /* color: #ff922e; */
    /* color: #2FBE34; */
    /* color: #ff3030; */
    text-decoration: ${(props) =>
      props.perguntaStyle !== "#333333" ? "line-through" : "none"};
  }
`;
