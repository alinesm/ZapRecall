import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import FooterContainer from "./FooterContainer";
import Questions from "./Questions";
import cards from "../cards";

function App() {
  const [cardCliked, setCardCliked] = useState(null);
  const [count, setCount] = useState(0);

  function clickCard(index) {
    // const listIndexes = [...usedIndexes, index];
    // setUsedIndexes(listIndexes);
    setCardCliked(index);
  }

  return (
    <ScreenContainerStyle>
      <LogoContainerStyle>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
      </LogoContainerStyle>
      <Questions
        clickCard={clickCard}
        cardCliked={cardCliked}
        setCardCliked={setCardCliked}
        cards={cards}
        count={count}
        setCount={setCount}
      />
      <FooterContainer count={count} cards={cards} />
    </ScreenContainerStyle>
  );
}

export default App;

const ScreenContainerStyle = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const LogoContainerStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
