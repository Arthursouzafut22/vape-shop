import styled, { css } from "styled-components";

const escoderText = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
`;

const flexItem = css`
  display: flex;
  align-items: center;
`;

export const WrapperCart = styled.div`
  background-color: #ffffff;
  padding: 0.94rem;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  b {
    margin-bottom: 6px;
    display: block;
  }

  .total {
    ${flexItem};
    justify-content: space-between;

    span {
      font-weight: 600;
    }
  }
`;

export const Product = styled.div`
  ${flexItem};
  justify-content: space-between;
  gap: 0.31rem;
  width: 100%;
  margin-bottom: 8px;

  .container {
    ${flexItem};
    gap: 0.63rem;
  }

  p:first-child {
    ${escoderText};
    font-size: 0.88rem;
    line-height: 1.2;
  }

  p:last-child {
    ${escoderText};
    font-size: 0.75rem;
    color: #797979;
    margin: 0;
  }

  span {
    font-size: 0.88rem;
    white-space: nowrap;
  }

  img {
    display: block;
    max-width: 3.75rem;
  }
`;
