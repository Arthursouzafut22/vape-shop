import styled from "styled-components";

export const Wrapper = styled.div`
padding: 0px 15px;
background-color: #000000;

div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    img{
        display: block;
        max-width: 100px;
    }

    input{
        font-size: 17px;
        display: block;
        width: 50%;
        padding: 8px;
        border: none;
        outline: none;
        border-radius: 8px;
    }

    a{
        display: flex;
        align-items: center;
        flex-direction:column;
        gap: 4px;
        color: #ffffff;
    }
}

`;

