import styled from "styled-components";

export const WrapperSlide = styled.div`
  margin-top: 70px;
  overflow: hidden;
  width: 1195px;
  position: relative;
  padding: 0.19rem 0.94rem;
  margin: 20px auto auto auto;

  h2 {
    font-weight: 600;
    text-align: center;
    margin:  0 auto;
    max-width: 225px;
    border-bottom: 3px solid  #2f982f;
    padding: 0.19rem 0.94rem;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(280px * 8 + 15px * 7);
    gap: 15px;
    margin: 15px auto auto auto;
  }
`;

export const ButtonNext = styled.button`
  font-size: 1.25rem;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  background-color: #2f982f;
  color: #ffffff;
  padding: 0.625rem;
  border-radius: 50%;
  margin: 0 auto;
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: absolute;
  top: 45%;
  right: -0%;
  z-index: 5;
  border: none;
`;

export const ButtonPrev = styled(ButtonNext)`
  left: -0%;
  right: initial;
`;
