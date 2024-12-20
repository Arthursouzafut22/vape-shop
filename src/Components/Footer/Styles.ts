import styled from "styled-components";

export const Footer = styled.footer`
  background-color: red;
  background-color: #ffffffff;
  margin-top: 70px;
  padding: 0.94rem 0;

  img {
    display: block;
    max-width: 350px;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.94rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;

  div {
    flex: 1;

    h3 {
      text-align: center;
    }

    p {
      margin-top: 6px;
      font-size: 14px;
      color: #677279;
    }
  }
`;
