import styled, { css } from "styled-components";

const greenColor = "#2f982f";
const darkColor = "#677279";
const whiteColor = "#ffffff";

const flexItems = css`
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto auto auto;
`;

export const WrapperLinks = styled.div`
  ${flexItems};
  justify-content: space-between;
  padding-inline: 0.94rem;

  div {
    ${flexItems};
    gap: 0.38rem;

    a {
      font-size: 0.94rem;
      display: block;
      color: ${darkColor};
    }
  }

  .link-back {
    font-size: 0.94rem;
    display: block;
    font-weight: 500;
    padding: 0.625rem 0.94rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    background-color: ${greenColor};
    color: ${whiteColor};
  }
`;
export const WrapperGlobal = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.94rem;
  margin-top: 15px;
  padding-inline: 0.94rem;

  @media screen and (max-width: 1039px) {
    flex-wrap: wrap !important;
    flex-direction: column;
  }
`;

export const WrapperOne = styled.div`
  display: flex;
  align-items: start;
  gap: 0.63rem;
  background-color: ${whiteColor};
  flex: 1;
  padding-inline: 0.94rem;
  width: 100%;
  border-radius: 10px;

  @media screen and (max-width: 1039px) {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    flex-direction: column-reverse;
    justify-content: start;
  }

  .imgsProduct {
    display: flex;
    flex-direction: column;
    justify-self: start;
    gap: 0.63rem;

    @media screen and (max-width: 1039px) {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: start;
    }

    img {
      display: block;
      max-width: clamp(5rem, 4vw, 6.25rem);
      cursor: pointer;
    }
  }

  .imgPrincipal {
    display: block;
    max-width: 100%;

    img {
      display: block;
      max-width: 100%;
    }
  }
`;

export const WrapperTwo = styled.div`
  background-color: ${whiteColor};
  padding-inline: 0.94rem;
  padding-block: 0.94rem;
  flex: 1;
  width: 100%;
  border-radius: 10px;

  .div-one {
    h1 {
      font-size: clamp(1.75rem, 4vw, 1.75rem);
    }

    h1 ~ span {
      font-weight: 600;
      display: block;
      color: ${whiteColor};
      background-color: ${greenColor};
      max-width: 12.5rem;
      width: 100%;
      padding: 0.19rem 0.5rem;
      white-space: nowrap;
      margin-top: 5px;
      border-radius: 0.31rem;
    }

    h1 ~ p {
      font-size: clamp(1.75rem, 4vw, 1.75rem);
      font-weight: 600;
      margin-block: 8px;
    }
  }

  .div-two {
    .buy {
      ${flexItems};
      gap: 0.25rem;
      font-weight: 600;
      color: #096dd9;
      margin: 10px 0px;
    }
  }

  .div-two ~ p {
    font-size: 1.06rem;
    font-weight: 600;
    margin-top: 5px;
  }
`;

export const ContainerIcons = styled.div`
  ${flexItems};
  gap: 0.19rem;

  span {
    font-size: 1.38rem;
    color: #677279;
  }
`;

export const ContainerSabores = styled.div`
  ${flexItems};
  flex-wrap: wrap;
  gap: 0.63rem;
  margin-top: 10px;

  button {
    font-size: clamp(0.94rem, 4vw, 1.06rem);
    display: block;
    padding: 0.31rem 0.44rem;
    cursor: pointer;
    border-radius: 0.31rem;
    color: #4c4c4c;
    border: 2px solid #d4d6d8;
    background-color: transparent;
  }
`;

export const ContainerAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.38rem;
  margin-top: 20px;
`;

export const ContainerPix = styled.div`
  ${flexItems};
  gap: 0.5rem;
  background-color: #f6f6f6;
  padding: 0.31rem 0.5rem;
  border-radius: 0.63rem;
  margin-top: 20px;

  div {
    p {
      font-size: 0.81rem !important;
      margin: 0 !important;

      .price {
        font-size: 0.94rem;
        font-weight: 600 !important;
      }

      span:last-child {
        color: ${whiteColor};
        background-color: #00b27a;
        padding-inline: 0.19rem;
        border-radius: 0.19rem;
      }
    }
  }
`;
export const ButtonAddCart = styled.button`
  font-size: clamp(0.94rem, 4vw, 1.06rem);
  width: 100%;
  display: block;
  padding: 0.75rem;
  border-radius: 0.63rem;
  cursor: pointer;
  color: ${whiteColor};
  background-color: ${greenColor};
  border: none;
`;
