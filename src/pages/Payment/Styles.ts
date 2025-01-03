import styled from "styled-components";

export const Section = styled.section`
  max-width: 1000px;
  margin: 20px auto auto auto;
  padding: 0.94rem;

  .wrapper {
    display: flex;
    justify-content: center;
  }

  .flexx {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 20px;

    @media screen and (max-width: 873px) {
      flex-wrap: wrap;
    }
  }
`;

export const CardPix = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 100% !important;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  .time {
    font-size: 35px;
    font-weight: bold;
  }

  p {
    font-size: 17px;
    font-weight: 600;
  }
  .pay {
    color: #2f982f;
  }

  img {
    max-width: 50%;
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.625rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #2f982f;
    color: #ffffff;
    cursor: pointer;
    width: 100%;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Codigo = styled.input`
  font-size: 17px;
  text-align: center;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #9f9f9f;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  outline: none;
  pointer-events: none;
`;

export const WrapperInfo = styled.div`
  width: 50%;

  h3 {
    margin-bottom: 4px;
  }

  @media screen and (max-width: 873px) {
    width: 100%;
  }

  .wrapper-infos {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 8px;

    span {
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      background-color: #41c286;
      padding: 8px;
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }

    p {
      font-size: clamp(14px, 3vw, 16px);
      line-height: 1.3;
      color: #797979;
    }
  }
  .wrapper-ambiente {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 8px;

    .vertical {
      border: 0.5px solid #d1d1d1;
      height: 25px;
      min-height: 1px;
    }
  }
`;
