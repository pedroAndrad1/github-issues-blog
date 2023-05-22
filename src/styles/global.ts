import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        transition: all 0.3s;
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        font-family: 'Nunito', 'arial';
    }

    h1,h2{
        font-weight: 700;
        color: ${(props) => props.theme['base-title']};
    }

    h1{
        font-size: 1.75rem;
        line-height: 130%;
    }

    h2{
        font-size: 1.5rem;
        line-height: 160%;
    }

    p{
        line-height: 160%;
        color: ${(props) => props.theme['base-text']};
    }

    button{
        background-color: inherit;
        cursor: pointer;

        &:disabled{
            cursor: not-allowed ;
        }
    }

    svg {
        margin: auto 0;
        fill: ${(props) => props.theme['base-label']};
    }

    a{
        cursor: pointer;
    }
`
