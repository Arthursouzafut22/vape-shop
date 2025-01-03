import styled, { css } from "styled-components";

const flexItems = css`
  display: flex;
  align-items: center;
`;

export const WrapperButtons = styled.div`
  ${flexItems};
  justify-content: space-between;
  gap: 0.625rem;
  margin-top: 30px;
  padding: 0.19rem 0.94rem;

  .back,
  .next {
    ${flexItems};
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  .btns-page {
    ${flexItems};
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const ButtonPage = styled.button`
  font-size: 1rem;
  display: block;
  padding: 0.1875rem;
  width: 30px;
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  /* color: #ffffff; */
  /* background-color: #2f982f; */
`;
