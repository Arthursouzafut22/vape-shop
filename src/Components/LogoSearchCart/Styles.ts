import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.19rem 0.94rem;
  background-color: #000000;
`;

export const Div = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ mobile }) => (mobile ? "16px" : "50px")};
  max-width: 1200px;
  margin: 0 auto;

  img {
    display: block;
    max-width: ${({ mobile }) => (mobile ? "5.00rem" : "6.25rem")};
    margin: 0;
    padding: 0;
  }

  & :nth-child(3) {
    display: flex;
    align-items: center;
    color: #ffffff;

    div {
      display: flex;
      flex-direction: column;
      align-items: start;

      P {
        font-size: 0.88rem;
        line-height: 1.3;
      }
    }
  }

  a {
    font-size: 0.88rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #ffffff;
  }
  a:last-child {
    font-size: 0.88rem;
    flex-direction: column;
  }
`;

export const Form = styled.form<{ mobile: boolean }>`
  width: 37.5rem;
  margin: 0 auto;

  input {
    font-size: 0.88rem;
    width: 100%;
    padding: 0.5rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    margin: 0 auto;
  }
`;
