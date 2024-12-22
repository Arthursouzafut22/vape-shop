import { styled, keyframes } from "styled-components";

const greenColor = "#2f982f";

const rotate4 = keyframes`
100% {
      transform: rotate(360deg);
    }
`;

const dash4 = keyframes`
   0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
  
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
  
    100% {
      stroke-dashoffset: -125px;
    }
`;

export const Svg = styled.svg`
  width: 3.25em;
  transform-origin: center;
  animation: ${rotate4} 2s linear infinite;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Circle = styled.circle`
  fill: none;
  stroke: ${greenColor};
  stroke-width: 10;
  stroke-dasharray: 2, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dash4} 1.5s ease-in-out infinite;
  margin: 0 auto;

`;
