import styled, { css } from "styled-components";

const flexItem = css`
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  max-width: 1000px;
  margin: 20px auto auto auto;
  padding: 0.94rem;
  h2 {
    margin: 30px auto;
    text-align: center;
    color: #4b4b4b;
  }

  .flexx {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 1.25rem;

    @media screen and (max-width: 873px) {
      flex-wrap: wrap;
    }
  }
`;

export const CardPix = styled.div`
  margin: 0 auto;
  ${flexItem};
  flex-direction: column;
  gap: 0.38rem;
  background-color: #ffffff;
  padding: 1.25rem;
  border-radius: 0.5rem;
  width: 100% !important;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  .time {
    font-size: 2.19rem;
    font-weight: bold;
  }

  p {
    font-size: 1.06rem;
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
  .clip {
    font-size: 0.94rem;
    margin-top: 10px;
  }
`;

export const Codigo = styled.input`
  font-size: 1.06rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #9f9f9f;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
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
    ${flexItem};
    gap: 0.63rem;
    padding: 0.75rem 0.5rem;
    span {
      border-radius: 50%;
      background-color: #41c286;
    }

    span svg {
      ${flexItem};
      justify-content: center;
      color: #ffffff;
      padding: 0.63rem;
      height: 40px;
      width: 40px;
    }

    p {
      font-size: clamp(0.88rem, 3vw, 1rem);
      line-height: 1.3;
      color: #797979;
    }
  }
  .wrapper-ambiente {
    ${flexItem};
    gap: 0.63rem;
    padding: 0.75rem 0.5rem;

    .vertical {
      border: 0.5px solid #d1d1d1;
      height: 25px;
      min-height: 1px;
    }
  }
`;
