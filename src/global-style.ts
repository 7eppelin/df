import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *:after {
        box-sizing: border-box;
    }

    li {
        list-style: none;
    }
`;
