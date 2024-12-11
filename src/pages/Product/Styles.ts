import styled from "styled-components";

const greenColor = "#2f982f";
const darkColor = "#677279";
const whiteColor = "#ffffff";

export const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto auto auto;
`;

export const WrapperLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 0.94rem;

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    a {
      font-size: 15px;
      display: block;
      color: ${darkColor};
    }
  }

  .link-back {
    display: block;
    font-size: 15px;
    font-weight: 500;
    padding: 0.625rem 15px;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    background-color: ${greenColor};
    color: ${whiteColor};
  }
`;
export const WrapperGlobal = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 15px;
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
  gap: 10px;
  background-color: ${whiteColor};
  padding-inline: 0.94rem;
  height: 100%;
  width: 100%;
  flex: 1;

  @media screen and (max-width: 1039px) {
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    flex-direction: column-reverse;
  }

  .imgsProduct {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 1039px) {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: start;
    }

    img {
      display: block;
      max-width: 100px;
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
  height: 100%;
  flex: 1;
  width: 100%;

  .div-one {
    h1 {
      font-size: clamp(25px, 4vw, 28px);
    }

    h1 ~ span {
      font-weight: 600;
      display: block;
      color: ${whiteColor};
      background-color: ${greenColor};
      max-width: 200px;
      width: 100%;
      padding: 3px 8px;
      white-space: nowrap;
      margin-top: 5px;
      border-radius: 5px;
    }

    h1 ~ p {
      font-size: clamp(25px, 4vw, 29px);
      font-weight: 600;
      margin-block: 8px;
    }
  }

  .div-two ~ p {
    font-size: 17px;
    font-weight: 600;
    margin-top: 5px;
  }
`;

export const ContainerIcons = styled.div`
  margin-top: 10px;

  span {
    font-size: 22px;
    color: #677279;
  }
`;

export const ContainerSabores = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;

  button {
    font-size: 17px;
    display: block;
    padding: 5px 7px;
    cursor: pointer;
    border-radius: 5px;
    color: #4c4c4c;
    border: 2px solid #d4d6d8;
  }
`;

export const ContainerAmount = styled.div`
  display: flex;
  align-items: start;
  gap: 6px;
  margin-top: 15px;
`;

export const ContainerPix = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f6f6f6;
  padding: 5px 8px;
  border-radius: 10px;
  margin-top: 10px;

  div {
    p {
      font-size: 13px !important;
      margin: 0 !important;

      .price {
        font-size: 15px;
        font-weight: 600 !important;
      }

      span:last-child {
        color: ${whiteColor};
        background-color: #00b27a;
        padding-inline: 3px;
        border-radius: 3px;
      }
    }
  }
`;
export const ButtonAddCart = styled.button`
  font-size: 17px;
  width: 100%;
  display: block;
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  color: ${whiteColor};
  background-color: ${greenColor};
  border: none;
`;
