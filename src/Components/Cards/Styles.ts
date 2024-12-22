import styled from "styled-components";

export const Card = styled.div`
  max-width: 280px;
  padding: 1.25rem;
  background-color: #ffffff;
  border-radius: 0.625rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.3s ease;
  position: relative;
  height: auto;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
  }

  .off {
    font-size: 0.75rem;
    font-weight: 600;
    background-color: #000000;
    color: #ffffff;
    padding: 6px 5px;
    display: block;
    text-align: center;
    max-width: 70px;
    border-radius: 0.31rem;
    position: absolute;
    top: 10px;
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

export const TextName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  text-align: left;
  margin: 0;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
`;

export const TextPrice = styled.p`
  font-size: 1.31rem;
  color: #078407;
  font-weight: 600;
  text-align: left;
  margin: 0;
`;
