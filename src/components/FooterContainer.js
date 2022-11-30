import React from "react";
import styled from "styled-components";

function FooterContainer({ usedIndexes, cards }) {
  const lengthListIndexes = usedIndexes.length;
  const lengthFlashcards = cards.length;

  if (lengthListIndexes <= 8) {
    return (
      <FooterStyle>
        {lengthListIndexes}/{lengthFlashcards}
      </FooterStyle>
    );
  } else {
    return (
      <FooterStyle>
        {lengthFlashcards}/{lengthFlashcards} CONCLUÍDOS
      </FooterStyle>
    );
  }
}

export default FooterContainer;

const FooterStyle = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

// .footer-concluidos > .container-botoes {
//   display: flex;
//   width: 80%;
//   justify-content: space-between;
//   margin: 20px;
// }
