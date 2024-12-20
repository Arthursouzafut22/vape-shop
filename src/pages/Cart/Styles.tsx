import styled from "styled-components";

export const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto auto auto;
  padding: 0.94rem;

  h1 ~ span {
    display: block;
    color: #677279;
    margin-top: 15px !important;
  }
`;

export const ContainerCart = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: ${({ mobile }) => (mobile ? "wrap" : "initial")};
  gap: 0.94rem;
  margin-top: 20px;
`;

export const WrapperFinish = styled.div<{ mobile: boolean }>`
  background-color: #ffffffff;
  padding: 0.94rem;
  border-radius: 0.63rem;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
  width: ${({ mobile }) => (mobile ? "100%" : "50%")};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.38rem;
      font-weight: 600;
    }
  }

  div ~ p {
    margin-top: 10px;
    color: #677279;
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.625rem;
    border-radius: 0.5rem;
    border: none;
    width: 100%;
    background-color: #2f982f;
    color: #ffffff;
    cursor: pointer;
    margin-top: 10px;
  }
`;

export const Cart = styled.div`
  width: 100%;
`;

export const Product = styled.div<{ mobile: boolean }>`
  display: flex;
  align-items: start;
  max-width: 100%;
  flex: 1;
  gap: 1.25rem;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 0.63rem;
  box-shadow: 2px 5px 11px -1px rgba(204, 204, 204, 0.61);
  margin-bottom: 12px;

  .wrapper-product {
    .wrapper1 {
      display: flex;
      justify-content: space-between !important;
      width: 100% !important;

      div {
        p:last-child {
          margin-top: 4px;
          margin-bottom: 6px;
        }
      }
    }
    .wrapper2 {
      display: flex;
      justify-content: space-between;
      align-items: end;

      .button-remove {
        display: block;
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: #677279;
      }
    }
  }
`;
