import styled from "styled-components";

export const Loader = styled.div<{ color: string; position: string }>`
  border: 4px solid ${(props) => props.color};
  border-left-color: transparent;
  width: 25px;
  height: 25px;
  animation: spin89345 1s linear infinite;
  border-radius: 50%;
  position: ${(props) => props.position};
  top: 48%;
  right: 2%;
  margin: 0 auto;

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
