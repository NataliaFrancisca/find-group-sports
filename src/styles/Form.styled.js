import styled from "styled-components";
import { ButtonStyled } from "./Global.styled";


export const FormStyled = styled.section`

    &{
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column; 
        height: 90vh;
    }

    h1{
        margin: 10px 0;
        font-size: 1.4em;
        font-weight: 800;
        text-transform: uppercase;
    }

    form{
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        font-size: 1.2em;
        padding: 40px;
        position: relative;
        width: 50%;
        background: var(--c-background);
        border: solid var(--c-black) 4px;
        z-index: 1;

        &#form-login{
            :after{
                left: 10px;
                top: 4px;
            }
        }

        &#form-register{
            :after{
                right: 10px;
                top: 10px;
            }
        }

        :after{
            content: "";
            border: solid var(--c-purple) 4px;
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: -1;
        }

        input, select{
            border-radius: 4px;
            font-size: 1.1em;
            margin: 4px 0;
            padding: 16px 8px;
        }

        input[type=checkbox], 
        input[type=radio]{
            accent-color: var(--c-purple);
        }

        p[role="alert"]{
            color: var(--c-red);
            font-size: 1.1rem;
        }

        p#error-message,
        p#succeed-message{
            width: fit-content;
            padding: 6px 10px;
            display: flex;
            align-self: flex-end;
            color: var(--c-white);
        }

        p#error-message{
            background: var(--c-red);
        }

        p#succeed-message{
            background: var(--c-green-dark);
        }

        .group-input{
            display: flex;
            flex-direction: column;
            margin: 6px 0;

            label{
                font-size: 1.1em;
                font-weight: 600;
                margin: 4px 0;
            }

            label.required-input:after{
                content: "*";
                color: var(--c-red);
                font-size: 1rem;
                padding-left: 2px;
                position: relative;
            }
        }

        @media screen and (max-width: 800px){
            width: 60%;
        }

        @media screen and (max-width: 600px){
            width: 90%;
        }
    }

`
export const ButtonDefaultStyled = styled(ButtonStyled)`
    background-color: var(--c-green);
    color: var(--c-black);
    margin-top: 20px;

    :hover{
        background: var(--c-black);
        color: var(--c-white);
    }
`

export const ButtonGoogleStyled = styled(ButtonStyled)`
    background: var(--c-white);
    color: var(--c-black);

    img{
        height: 25px;
        margin: 0 10px;
        width: 25px;
    }

    :hover{
        background: var(--c-black);
        color: var(--c-white);
    }
`