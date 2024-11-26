import { styled, keyframes, css } from "styled-components";

const key = keyframes`
  from{
    transform: translateX(0%);
}
  to{
    transform: translateX(-100%);
}
`;

const flexItem = css`
  display: flex;
  align-items: center;
`;

export const Header = styled.header`
  max-width: 100%;
`;

export const DivPay = styled.div`
  ${flexItem};
  justify-content: center;
  gap: 0.5rem;
  background-color: #000000;
  padding: 0.625rem;

  p {
    font-size: 0.94rem;
    font-weight: 600;
    color: #00ff0f;

    &::selection {
      display: none;
    }
  }
`;

export const WrapperBanner = styled.div`
  ${flexItem};
  animation: ${key} 15s linear infinite;

  img {
    max-width: 100%;
  }
`;
