import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        //Primary Palette
        --color-primary: #ff8019;
        --color-primary-Focus: #ff7200;
        --color-primary-Negative: rgba(255, 128, 25, 0.507);

        //Grey Scale Palette
        --color-grey-1: #121214;
        --color-grey-2: #212529;
        --color-grey-3: #868E96;
        --color-grey-4: #878787;
        --color-grey-5: #F8F9FA;

        //Feedback Palette
        --color-success: #3FE864;
        --color-error: #E83F5B;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button{
        background: none;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        outline: none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        height: 100vh;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
 
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }


    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *{
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    button, select{
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }
`;
