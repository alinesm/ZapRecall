import styled from "styled-components";

export default function PerguntaFechada({
  perguntaCor,
  clickCard,
  index,
  icon,
}) {
  return (
    <PerguntaFechadaStyled
      perguntaStyle={perguntaCor}
      onClick={() => clickCard(index)}
    >
      <p>Pergunta {index + 1}</p>
      <img alt="" src={icon} />
    </PerguntaFechadaStyled>
  );
}

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
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.perguntaStyle};
    text-decoration: ${(props) =>
      props.perguntaStyle !== "#333333" ? "line-through" : "none"};
  }
`;
