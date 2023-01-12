import styled from "styled-components";
import { keyframes } from 'styled-components'

export const RegisterStyled = styled.section`

    &{
        align-items: center;
        display: flex;
        flex-direction: column; 
    }

    h1{
        margin: 10px;
        text-align: center;
    }

    form{
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        position: relative;
        width: 90%;

        & fieldset{
            margin: 8px 0;
            padding: 10px;
        }

        & fieldset#form-about-manager{
            border: solid var(--c-orange) 3px;
        }

        & fieldset#form-about-group{
            border: solid var(--c-purple) 3px;
        }

        & fieldset#form-about-group-address{
            border: solid var(--c-green) 3px;
        }

        & legend{
            font-size: 1em;
            font-weight: 800;
            padding: 0 10px;
            text-transform: uppercase;
        }

        & button{
            align-self: flex-end;
            background-color: #489446;
            color: #e7e8de;
            display: flex;
            font-size: 1em;
            font-weight: 400;
            letter-spacing: 2px;
            margin: 10px 0;
            padding: 20px 16px;
            
            &:hover{
                background-color: var(--c-black);
            }
        }

        & p[role="alert"]{
            color: var(--c-red);
            font-size: 1rem;
        }

        & input, select{
            font-size: 1.1em;
            margin: 4px 0;
            padding: 10px 8px;
        }

        & input[type=checkbox], input[type=radio]{
            accent-color: var(--c-purple);
        }

    }

    & .group-input{
        display: flex;
        flex-direction: column;
        margin: 6px 0;

        & label.label-input{
            font-size: 1.1em;
            font-weight: 600;
            margin: 6px 0;
        }

        & label{
            font-size: 1.1em;
            font-weight: 400;
        }

        & label.required-input:after{
            content: "*";
            color: var(--c-red);
            font-size: 1rem;
            padding-left: 2px;
            position: relative;
        }
    }

`

export const breatheAnimation = keyframes`
    0% { top: 0px}
    30% {  top: 30px  }
    60% {  top: 40px  }
    100% { top:  50px }
`

export const AlertMessageStyled = styled.div`
    padding: 10px;
    border: solid var(--c-green) 2px;
    /* background: var(--c-green); */
    box-shadow: 2px 2px 8px -1px var(--c-green); 

    width: auto;
    align-self: flex-end;

    position: absolute;

    visibility: ${showMessage => showMessage ? 'initial' : 'hidden' };
    background: ${showMessage => showMessage ? 'red' : 'green' };

    -webkit-animation: ${breatheAnimation} 2s;
    -webkit-animation-fill-mode: forwards;

`

