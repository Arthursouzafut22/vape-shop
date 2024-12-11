import styled from "styled-components";;

export const WrapperControl = styled.div`
display: flex;
align-items: center;
/* border: 1px solid; */
max-width: 130px;

 input{
    font-size: 17px;
    text-align: center;
    padding: 4px;
    width: 100%;
    outline: none;
    pointer-events: none;
    border: none;
 }


button{
    font-size: 17px;
    display: block;
    padding: 4px;
    cursor: pointer;
    background-color: #2f982f;
    border: none;
    border-radius: 5px;
    color: #ffffff;
}

`