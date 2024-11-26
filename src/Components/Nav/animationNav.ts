import { keyframes, css } from "styled-components";

export const getAnimation = (
  activeMenu: boolean | undefined,
  mobile: boolean
) => {
  if (activeMenu && mobile) {
    return css`
      animation: ${fadeIn} 0.5s ease-in-out;
    `;
  }
  return css`
    animation: none;
  `;
};

export const fadeIn = keyframes`
  
  from{
    opacity: 0;
    transform: scale(0);
  }
  
  to{
    opacity: 1;
    transform: scale(1.0);
  }
  
  `;
