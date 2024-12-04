import styled from "styled-components";

export const Main = styled.main`
  border: 1px solid;
  max-width: 1200px;
  margin: 20px auto auto auto;

  h2 {
    position: relative;
    padding-inline: 0.94rem;

    span {
      border-bottom: 4px solid red;
      max-width: 100px;
      padding: 2px;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 15px;
  padding: 0.19rem 0.94rem;
  flex-wrap: wrap;
  margin-top: 15px;

  @media screen and (max-width: 912px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 612px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
