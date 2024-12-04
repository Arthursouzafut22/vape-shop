import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Roboto", serif;
    overflow-x:hidden;
    background-color: #F9F9F9;
}


body * {
    font-family: "Roboto", serif;
}

a{
    display: block;
    text-decoration: none;
}

ul>li{
    list-style: none;
    padding: 0;
}



`;
