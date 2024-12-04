import { css, styled } from "styled-components";
import { PropsNav } from "./NavComponent";
import { getAnimation } from "./animationNav";

const flexItem = css`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  padding: 0.94rem;
  box-shadow: 0px 5px 3px 0px rgba(204, 204, 204, 0.29);
`;

export const WrapperNav = styled.div<PropsNav>`
  display: flex;
  align-items: ${({ mobile }) => (mobile ? "start" : "center")};
  justify-content: center;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  gap: 1.38rem;
  max-width: 1200px;
  padding-block: ${({ mobile }) => (mobile ? "20px" : "0.31rem")};
  padding-inline: ${({ mobile }) => mobile && "0.94rem"};
  margin: ${({ mobile }) => (mobile ? "15px auto auto" : "0 auto")};
  ${({ activeMenu, mobile }) => getAnimation(activeMenu, mobile)};
  position: ${({ mobile }) => (mobile ? "absolute" : "initial")};
  box-shadow: ${({ mobile }) =>
    mobile && "6px 5px 3px 0px rgba(204, 204, 204, 0.17)"};
  background-color: #f9f9f9;
  width: ${({ mobile }) => mobile && "100%"};
  z-index: 20;
  left: ${({ mobile }) => mobile && "0%"};

  a {
    font-size: 1.06rem;
    ${flexItem};
    gap: 0.31rem;
    color: #000000;
  }
`;
export const ButtonMobile = styled.button`
  font-size: 0.94rem;
  font-weight: 600;
  ${flexItem};
  padding: 0.25rem 0.19rem;
  border-radius: 0.31rem;
  border: none;
`;
