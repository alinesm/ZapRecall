import React, { useState } from "react";
import styled from "styled-components";
import turnAround from "../assets/img/seta_virar.png";
// import wrong from "../assets/img/icone_erro.png";
// import correct from "../assets/img/icone_certo.png";
// import interrogation from "../assets/img/icone_quase.png";
import ContainerButtons from "./ContainerButtons";

function PerguntaAberta({ card, index, setPerguntaCor, setIcon }) {
  const [goToAnswer, setGoToAnswer] = useState(false);
  const [forget, setForget] = useState(false);
  const [remember, setRemember] = useState(false);
  const [almostForget, setAlmostForget] = useState(false);

  // if (forget) {
  //   return (
  //     <PerguntaFechadaStyledRed>
  //       <p>Pergunta {index + 1}</p>
  //       <img alt="" src={wrong} />
  //     </PerguntaFechadaStyledRed>
  //   );
  // } else if (almostForget) {
  //   return (
  //     <PerguntaFechadaStyledOrange>
  //       <p>Pergunta {index + 1}</p>
  //       <img alt="" src={interrogation} />
  //     </PerguntaFechadaStyledOrange>
  //   );
  // } else if (remember) {
  //   return (
  //     <PerguntaFechadaStyledGreen>
  //       <p>Pergunta {index + 1}</p>
  //       <img alt="" src={correct} />
  //     </PerguntaFechadaStyledGreen>
  //   );
  // }

  return (
    <PerguntaAbertaStyled key={index}>
      <p>{!goToAnswer ? card.question : card.answer}</p>
      {!goToAnswer ? (
        <img onClick={() => setGoToAnswer(true)} alt="" src={turnAround} />
      ) : (
        <ContainerButtons
          setForget={setForget}
          setAlmostForget={setAlmostForget}
          setRemember={setRemember}
          index={index}
          forget={forget}
          setPerguntaCor={setPerguntaCor}
          setIcon={setIcon}
        />
      )}
    </PerguntaAbertaStyled>
  );
}

export default PerguntaAberta;

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
    /* color: ${(props) => props.perguntaStyle}; */
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
    /* color: #2fbe34; */
    color: #ff3030;
    /* text-decoration: ${(props) =>
      props.perguntaStyle === "#333333" ? "line-through" : "none"}; */
    text-decoration: line-through;
  }
`;

const PerguntaFechadaStyledRed = styled.div`
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
    /* color: ${(props) => props.perguntaStyle}; */
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
    /* color: #2fbe34; */
    color: #ff3030;
    /* text-decoration: ${(props) =>
      props.perguntaStyle === "#333333" ? "line-through" : "none"}; */
    text-decoration: line-through;
  }
`;

const PerguntaFechadaStyledOrange = styled.div`
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
    /* color: ${(props) => props.perguntaStyle}; */
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
    color: #ff922e;
    /* color: #2fbe34; */
    /* color: #ff3030; */
    /* text-decoration: ${(props) =>
      props.perguntaStyle === "#333333" ? "line-through" : "none"}; */
    text-decoration: line-through;
  }
`;

const PerguntaFechadaStyledGreen = styled.div`
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
    /* color: ${(props) => props.perguntaStyle}; */
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
    color: #2fbe34;
    /* color: #ff3030; */
    /* text-decoration: ${(props) =>
      props.perguntaStyle === "#333333" ? "line-through" : "none"}; */
    text-decoration: line-through;
  }
`;

const PerguntaAbertaStyled = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background-color: yellow;
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
  }
`;
