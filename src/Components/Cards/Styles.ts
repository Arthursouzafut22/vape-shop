import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  max-width: 280px;
  padding: 1.25rem;
  background-color: #ffffff;
  border-radius: 0.625rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .off {
    font-size: 12px;
    font-weight: 600;
    background-color: #000000;
    color: #ffffff;
    padding: 6px 2px;
    display: block;
    text-align: center;
    max-width: 80px;
    border-radius: 5px;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 0.5rem;
  }

  button {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.625rem;
    border-radius: 0.5rem;
    border: none;
    width: calc(100% - 40px);
    position: absolute;
    bottom: 20px;
    left: 20px;
    background-color: #2f982f;
    color: #ffffff;
    cursor: pointer;
    transform: translateY(20px);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

type TextProps = {
  size?: string;
  color?: string;
  weigth?: string;
  top?: string;
};

export const Text = styled.p<TextProps>`
  font-size: ${({ size }) => (size ? "21px" : "16px")};
  font-weight: ${({ weigth }) => (weigth ? weigth : "500")};
  color: ${({ color }) => (color ? color : "#000000")};
  text-align: left;
  margin-top: ${({ top }) => (top ? top + "px" : "6px")} !important;
`;

export const ImgFreight = styled.img`
  max-width: 100%;
  display: block;
  width: calc(100% - 40px);
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #2f982f;
  color: #ffffff;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
`;
