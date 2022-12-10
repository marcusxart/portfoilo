import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html{
    font-size: 62.5%;
    }
    body {
    font-family: 'Inter', sans-serif;
    background-color: ${(p) => p.theme.colors.black};
    color: ${(p) => p.theme.colors.white};
    }
`;

export default GlobalStyles;
