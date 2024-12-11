import styled from "styled-components";

export const WrapperControl = styled.div`
  display: flex;
  align-items: center;
  max-width: 130px;

  input {
    font-size: 1.06rem;
    text-align: center;
    padding: 0.25rem;
    width: 100%;
    outline: none;
    pointer-events: none;
    border: none;
    background-color: #f6f6f6;
  }

  button {
    font-size: 1.06rem;
    display: block;
    padding: 0.25rem;
    cursor: pointer;
    background-color: #2f982f;
    border: none;
    border-radius: 0.31rem;
    color: #ffffff;
  }
`;
