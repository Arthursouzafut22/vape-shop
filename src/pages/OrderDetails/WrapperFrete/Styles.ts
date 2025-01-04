import styled from "styled-components";

export const RadioInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  b{
    display: block;
    margin-bottom: 8px;
  }

`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  --border-color: #a1b0d8;
  border: 1px solid var(--border-color);
  border-radius: 0.38rem;
  margin: 5px;
  padding: 1rem;
  display: flex;
  align-items: center !important;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  gap: 0.38rem;
  cursor: pointer;


  

  &:hover {
    --border-color: #2f64d8;
    border-color: var(--border-color);
  }

  ${Input}:checked + & {
    --border-color: #2f64d8;
    border-color: var(--border-color);
    border-width: 2px;
  }
`;

export const Circle = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(189, 187, 207);
  margin-right: 0.5rem;
  position: relative;

  ${Input}:checked + ${Label} &::before {
    content: "";
    display: inline;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2f64d8;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-weight: bold;
`;

export const Small = styled.span`
  font-size: 10px;
  color: rgb(136, 138, 139);
  font-weight: 100;
`;

export const Info = styled.span`
  position: absolute;
  display: inline-block;
  font-size: 11px;
  background-color: rgb(31, 236, 123);
  border-radius: 20px;
  padding: 1px 9px;
  top: 0;
  transform: translateY(-50%);
  right: 5px;
`;
