import styled from "styled-components";

export const WrapperPix = styled.div`
  background-color: #ffffff;
  margin-top: 20px;
  padding: 1.56rem;
  border-radius: 0.5rem;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);

  b {
    display: block;
  }

  img {
    display: block;
    margin: 16px auto auto auto;
    border: 2px solid #4b8fef;
    padding: 0.63rem;
    border-radius: 0.25rem;
    cursor: pointer;
    max-width: 5.63rem;
  }

  .details-pix {
    border: 1px solid #ddd;
    padding: 0.5rem;
    margin-top: 15px;
    border-radius: 0.31rem;

    p {
      font-size: 0.94rem;
      color: #7e7e7e;
      line-height: 1.3;
    }
  }

  button {
    font-size: 1rem;
    font-weight: 600;
    display: block;
    color: #ffffff;
    background-color: #1fbb70;
    border: none;
    border-radius: 0.5rem;
    padding: 0.63rem;
    margin-top: 15px;
    cursor: pointer;
  }
`;
