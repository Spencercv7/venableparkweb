import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

        // Used to see if something is cliping over screen bounds.
        /* border: 1px solid #f00 !important; */
    }

    html {
        font-size: 62.5%; // Makes it so 1rem is equivalent to 10px.
    }

    a:visited,
    a:link {
        color: inherit;
    }
    
    button {
        appearance: none;
        border: none;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    // CAROUSEL ITEM STYLE
    .carousel_item {
        padding: 2rem 2rem 2rem 2rem;
    }

`

export default GlobalStyle;