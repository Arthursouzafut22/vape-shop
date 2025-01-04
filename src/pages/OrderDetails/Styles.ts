import styled, { css } from "styled-components";

const whiteColor = "#ffffff";

const flexItem = css`
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 3.13rem;
  max-width: 1000px;
  margin: 20px auto auto auto;
  padding: 0.94rem 1.56rem;

  @media screen and (max-width: 940px) {
    flex-wrap: wrap-reverse;
  }

  form {
    width: 100%;

    input {
      font-size: 1rem;
      display: block;
      padding: 0.38rem 0.63rem;
      border-radius: 0.5rem;
      border: 1px solid #dddddd;
      outline: 1px solid transparent;
      width: 100% !important;

      &:focus {
        outline: 2px solid #2f982f;
        border: 1px solid transparent;
      }
    }
  }
`;

export const WrapperOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.38rem;
  background-color: ${whiteColor};
  padding: 1.56rem;
  width: 100%;
  border-radius: 0.5rem;

  .filho-1 {
    ${flexItem};
    justify-content: center;
    width: 100%;
    gap: 1.25rem;

    @media screen and (max-width: 467px) {
      flex-wrap: wrap;
      gap: 0.63rem;
    }

    div {
      width: 100%;

      p {
        font-size: 0.75rem;
        color: red;
      }
    }

    label {
      display: block;
    }
  }
`;

export const WrapperTwo = styled.div`
  background-color: ${whiteColor};
  margin-top: 20px;
  padding: 1.56rem;
  border-radius: 0.5rem;

  b {
    display: block;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.75rem;
    color: red;
  }
`;

export const WrapeprInputs = styled.div`
  ${flexItem}
  gap:  1.25rem;
  border-radius: 0.5rem;

  input {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 467px) {
    flex-wrap: wrap;
    gap: 0.31rem;

    input {
      margin: 0;
    }

    label {
      font-size: 0.88rem;
    }
  }

  div {
    width: 100%;
  }
`;
