import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #000000;
  padding: 12px 15px;
`;

export const WrapperNav = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  a {
    font-size: 17px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #ffffff;
  }
`;
