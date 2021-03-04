import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    *, *:before, *:after {
         -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        color: #202020;
        background-color: #fafafe;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    ul {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles
