import styled, { css } from "styled-components";

const flexItem = css`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #000000;
`;

export const Div = styled.div<{ mobile: boolean }>`
  ${flexItem};
  justify-content: space-between;
  gap: ${({ mobile }) => (mobile ? "1rem" : "3.13rem")};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.19rem 0.94rem;
  

  img {
    display: block;
    max-width: ${({ mobile }) => (mobile ? "5.00rem" : "6.25rem")};
    margin: 0;
    padding: 0;
  }

  & :nth-child(3) {
    ${flexItem};
    color: #ffffff;

    div {
      display: flex;
      align-items: start;
      flex-direction: column;

      P {
        font-size: 0.88rem;
        line-height: 1.3;
      }
    }
  }

  a {
    font-size: 0.88rem;
    ${flexItem};
    gap: 0.25rem;
    color: #ffffff;
  }
  a:last-child {
    font-size: 0.88rem;
    flex-direction: column;
    position: relative;
  }
`;

export const Form = styled.form<{ mobile: boolean }>`
  width: 37.5rem;
  margin: 0 auto;
  position: relative;

  input {
    font-size: 0.88rem;
    width: 100%;
    padding: 0.7rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    margin: 0 auto;
  }

  button {
    font-size: 18px;
    width: 40px;
    height: 30px;
    ${flexItem};
    justify-content: center;
    border-radius: 0.5rem;
    cursor: pointer;
    position: absolute;
    right: 1%;
    top: 11%;
    border: none;
  }
`;

export const ValueCart = styled.span`
  font-size: 14px;
  font-weight: 600;
  ${flexItem};
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  color: #000000;
  top: -30%;
  right: -20%;
  background-color: #ffffff;
`;
