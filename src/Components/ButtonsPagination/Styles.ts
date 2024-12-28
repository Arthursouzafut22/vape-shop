import styled from "styled-components";

export const WrapperButtons = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;
 margin-top: 30px;

 .back,.next{
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
 }



 div{
    display: flex;
    align-items: center;
    gap: 8px;
 }


`;

export const ButtonPage = styled.button`
 font-size: 1rem;
    display: block;
    padding: 3px;
    width: 30px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    background-color: #2f982f;


`;
