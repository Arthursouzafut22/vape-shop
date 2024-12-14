import styled from "styled-components";

export const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto auto auto;
  padding: 0.94rem;

  h1 ~ span{
    display: block;
    color: #677279;
    margin-top: 15px !important;
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
`;

export const WrapperCart = styled.div`
  /* border: 2px solid red; */
  flex: 2;
  border-radius: 10px;
  background-color: #ffffffff;

  .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    padding: 0.94rem;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 0.1px solid #677279;

    span {
      color: #677279;
    }

    div {
      display: flex;
      align-items: center;
      gap: 130px;

      span {
        color: #677279;
      }
    }
  }
`;

export const ProductCart = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0.94rem;
`;

export const WrapperOne = styled.div`
  display: flex;
  align-items: start;
  gap: 7px;
`;

export const WrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .button-remove {
    display: block;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

export const WrapperThree = styled.div``;

export const WrapperFinish = styled.div`
  flex: 1;
  background-color: #ffffffff;
  padding: 0.94rem;
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 22px;
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
