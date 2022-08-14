import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, :after, :before {
        text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        box-sizing: border-box;
    }
    blockquote, body, button, caption, dd, div, dl, dt, fieldset, figure, form, h1, h2, h3, h4, h5, h6, hr, html, input, legend, li, menu, ol, p, pre, table, td, textarea, th, ul {
        margin: 0;
        padding: 0;
        outline: none;
    }
    abbr, body, fieldset, html, iframe, img {
        border: 0;
    }
    html {
        touch-action: manipulation;
    }
    body, button, input, keygen, legend, select, textarea {
        font-size: 14px;
        line-height: 1.5;
        color: #333;
        outline: 0;
        font-family: PingFangSC-Light,helvetica,Heiti SC;
    }
    body {
        background-color: #eee;
    }
    address, cite, dfn, em, i, var {
        font-style: normal;
    }
    a, a:hover, del, ins, s, u {
        text-decoration: none;
        outline: none;
        color: #666;
    }
    li {
        list-style: none;
    }
    b, em, h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, small {
        font-size: 100%;
    }
    address, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }
    a, button {
        cursor: pointer;
    }
`