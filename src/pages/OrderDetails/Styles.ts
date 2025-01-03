import styled from "styled-components";

export const Section = styled.section`
  max-width: 1000px;
  margin: 20px auto auto auto;
  padding: 0.94rem;
  border: 1px solid;

  form {
    max-width: 580px;
    border: 1px solid;
  }
`;

export const WrapperOne = styled.div`
  background-color: #ffffff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 100%;
  border-radius: 8px;

  .filho-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */
    width: 100%;
    gap: 20px;

    div {
      width: 100%;

      p {
        font-size: 12px;
        color: red;
      }
    }

    label {
      display: block;
    }

    input {
      font-size: 16px;
      width: 100% !important;
      display: block;
      padding: 6px 10px;
      border-radius: 8px;
      border: 1px solid #dddddd;
      outline: 1px solid transparent;

      &:focus {
        outline: 2px solid #2f982f;
        border: 1px solid transparent;
      }
    }
  }
`;
