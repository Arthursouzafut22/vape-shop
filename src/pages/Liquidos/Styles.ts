import styled from "styled-components";

export const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto auto auto;

  h2 {
    padding-inline: 0.94rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 0.94rem;
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
