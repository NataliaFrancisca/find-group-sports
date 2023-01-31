import styled from "styled-components";

export const HomeStyled = styled.header`
    border-radius: 3px;
    color: var(--c-white);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    margin: 0 auto;
    min-height: 85vh;
    height: auto;
    padding: 20px 0;
    width: 95%;

    & section.container-text{
        width: 90%;
    }
  
    & h1.title{
        font-size: 9em;
        font-weight: 700;
        line-height: 6.5rem;
        letter-spacing: 8px;
        text-transform: uppercase;

        @media screen and (max-width:680px){font-size: 7em}
        @media screen and (max-width:480px){font-size: 6em}
        @media screen and (max-width:380px){font-size: 4em}
    }

    & p.subtitle{
        font-size: 1.8em;
        margin-top: 22px;
    }

    & button.btn-navigate-page{
        align-self: flex-start;
        background-color: var(--c-green);
        border-radius: var(--border);
        color: var(--c-black);
        display: flex;
        font-size: 1.2em;
        font-weight: 600;
        letter-spacing: 2px;
        margin-top: 50px;
        padding: 24px 16px;
        z-index: 1;

        &:hover{
            background-color: var(--c-green-dark);
        }
    }

    @media screen and (max-width: 680px){
        justify-content: center;
    }
`
