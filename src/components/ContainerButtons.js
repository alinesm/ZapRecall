import styled from "styled-components";

export default function ContainerButtons({
  forgetButton,
  almostButton,
  zapButton,
}) {
  return (
    <ContainerButtonsStyled>
      <button onClick={forgetButton} data-test="no-btn">
        Não lembrei
      </button>
      <button onClick={almostButton} data-test="partial-btn">
        Quase não lembrei
      </button>
      <button onClick={zapButton} data-test="zap-btn">
        Zap!
      </button>
    </ContainerButtonsStyled>
  );
}

const ContainerButtonsStyled = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
  button {
    cursor: pointer;
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
    border-radius: 5px;
    padding: 5px;
    margin-right: 7px;
    &:nth-child(1) {
      background: red;
      border: 1px solid red;
    }
    &:nth-child(2) {
      background: #ff922e;
      border: 1px solid #ff922e;
    }
    &:nth-child(3) {
      background: #2fbe34;
      border: 1px solid #2fbe34;
    }
  }
`;
