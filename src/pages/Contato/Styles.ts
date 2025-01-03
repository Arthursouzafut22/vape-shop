import styled from "styled-components";

export const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto auto auto;

  h1{
    padding-inline: 0.94rem;
  }
`;

export const Wrapper = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: ${({ mobile }) => mobile && "wrap"};
  gap: 20px;
  margin-top: 20px;
`;

export const DivOne = styled.div`
  padding-inline: 0.94rem;
  width: 100%;

  h2 {
    font-weight: normal;
  }

  form {
    margin-top: 20px;

    button {
      display: block;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.625rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      background-color: #2f982f;
      color: #ffffff;
      margin-top: 12px;

      &:hover {
        opacity: 0.8;
      }
    }

    textarea {
      font-size: 16px;
      display: block;
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #eaeaea;
      outline: 1px solid transparent;

      &:focus {
        outline: 2px solid #2f982f;
      }
    }
  }
`;

export const DivTwo = styled.div`
  padding-inline: 0.94rem;
  width: 70%;

  h2 {
    font-size: clamp(1.5rem, 2vw, 1.8rem);
    font-weight: normal;
  }

  p {
    font-size: 17px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 3px;
    color: #677279;

    span {
      font-weight: 600;
    }
  }
`;

export const WrapperInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  input {
    font-size: 1rem;
    display: block;
    color: #677279;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #eaeaea;
    outline: 1px solid transparent;

    &:focus {
      outline: 2px solid #2f982f;
      border:1px solid transparent;
    }
  }
`;
