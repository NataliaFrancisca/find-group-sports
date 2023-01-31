import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --c-green: #1CD267;
        --c-purple: #9C71FF;
        --c-orange: #FFB014;
        --c-black: #252525;
        --c-red: #DC0000;
        --c-green-dark: #118f45;
        --c-background: #e7e8de;
        --c-white: #F8F8FF;
        --border: 4px;
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body, html{
        font-family: 'Anek Latin', sans-serif;
        font-size: 100%;
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
        font-family: 'Anek Latin', sans-serif;
    }

    button{
        cursor: pointer;
        transition: all ease-in .2s;
    }

    button:hover{
        transition: all ease-in .2s;
    }
`

export const ButtonStyled = styled.button`
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 0px 5px -3px var(--c-black);
    cursor: pointer;
    display: flex;
    font-size: 1.2em;
    font-weight: 500;
    justify-content: center;
    margin: 6px 0;
    padding: 12px 8px;
    transition: all ease-in .4s;

    :hover{
        transition: all ease-in .4s;
    }
`

export const AppStyled = styled.main`
    min-height: 100vh;
    width: 100vw;
    position: absolute;
    background: var(--c-background);
    z-index: 1;
`
export const BackgroundFilter = styled.div`
    background: url('assets/images/sport-volleyball-group.jpg');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: brightness(30%);
    position: absolute;
    z-index: -1;
`