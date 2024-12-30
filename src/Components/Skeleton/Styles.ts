import styled, { keyframes } from "styled-components";

// Animação de "brilho"
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const Skeleton = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "20px"};
  background: linear-gradient(90deg, #e0e0e0 35%, #f0f0f0 60%, #e0e0e0 70%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
