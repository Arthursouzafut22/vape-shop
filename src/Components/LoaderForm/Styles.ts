import styled from "styled-components";

export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: transparent;
  width: 25px;
  height: 25px;
  animation: spin89345 1s linear infinite;
  border-radius: 50%;

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
