import React, { useState } from "react";
import styled from "styled-components";

function ContainerButtons({
  setPerguntaCor,
  setForget,
  setAlmostForget,
  setRemember,
  index,
}) {
  function forgetButton() {
    setForget(true);
    setPerguntaCor("#ff3030");
  }

  function almostButton() {
    setAlmostForget(true);
    setPerguntaCor("#ff922e");
  }

  function zap() {
    setRemember(true);
    setPerguntaCor("#2fbe34");
  }

  return (
    <ContainerButtonsStyled>
      <OptionButtonRedStyled onClick={forgetButton}>
        Não lembrei
      </OptionButtonRedStyled>
      <OptionButtonOrangeStyled onClick={almostButton}>
        quase não lembrei
      </OptionButtonOrangeStyled>
      <OptionButtonGreenStyled onClick={zap}>Zap</OptionButtonGreenStyled>
    </ContainerButtonsStyled>
  );
}

export default ContainerButtons;

const ContainerButtonsStyled = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;

const OptionButtonRedStyled = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: red;
  border-radius: 5px;
  border: 1px solid red;
  padding: 5px;
  margin-right: 7px;
`;

const OptionButtonOrangeStyled = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #ff922e;
  border-radius: 5px;
  border: 1px solid #ff922e;
  padding: 5px;
  margin-right: 7px;
`;

const OptionButtonGreenStyled = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #2fbe34;
  border-radius: 5px;
  border: 1px solid #2fbe34;
  padding: 5px;
`;
