import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --c-green: #1CD267;
        --c-purple: #9C71FF;
        --c-orange: #FFB014;
        --c-black: #252525;
        --c-red: #DC0000;
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body, html{
        font-family: 'Roboto Slab', serif;
        background-color: #e7e8de;
    }

    button, 
    input, 
    a, 
    legend, 
    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    label, 
    span{
        font-family: 'Roboto Slab', serif;
    }

    button{
        cursor: pointer;
        transition: all ease-in .4s;
    }

    button:hover{
        transition: all ease-in .4s;
    }

`