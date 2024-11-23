import { styled, keyframes } from "styled-components";

const key = keyframes`
  from{
    transform: translateX(0%);
}
  to{
    transform: translateX(-100%);
}
`;

export const Header = styled.header`
  max-width: 100%;
`;

export const DivPay = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 8px;
  background-color: #000000;
  padding: 0.625rem;

  p {
    font-weight: 600;
    color: #00ff0f;

    &::selection {
      display: none;
    }
  }
`;

export const WrapperBanner = styled.div`
  display: flex;
  align-items: center;
  animation: ${key} 15s linear infinite;

  img {
    max-width: 100%;
  }
`;
