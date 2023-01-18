import styled from "styled-components";

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
    }

    form{
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        padding: 20px 30px;
        position: relative;
        width: 40%;
        background: var(--c-background);
        box-shadow: 0px 0px 13px -4px;

        @media screen and (max-width: 800px){
            width: 60%;
        }

        @media screen and (max-width: 600px){
            width: 90%;
        }

        & legend{
            font-size: 1em;
            font-weight: 800;
            padding: 0 10px;
            text-transform: uppercase;
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

        & p#error-message{
            width: fit-content;
            padding: 6px 10px;
            background: var(--c-red);
            display: flex;
            align-self: flex-end;
            color: var(--c-white);
        }

        & p#succeed-message{
            width: fit-content;
            padding: 6px 10px;
            background: var(--c-green-dark);
            display: flex;
            align-self: flex-end;
            color: var(--c-white);
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

export const ButtonFormStyled = styled.button`
        & {
            align-items: center;
            box-shadow: 0px 0px 5px -3px var(--c-black);
            display: flex;
            font-size: 1.1em;
            font-weight: 500;
            justify-content: center;
            margin: 6px 0;
            padding: 10px 8px;
        }

        &#btn-default{
            background-color: var(--c-green-dark);
            color: var(--c-background);
            margin-top: 20px;
        }

        &#btn-google{
            background: var(--c-white);
            color: var(--c-black);

            & img{
                height: 25px;
                margin: 0 10px;
                width: 25px;
            }
        }

        &#btn-default:hover, 
        &#btn-google:hover{
            background: var(--c-black);
            color: var(--c-white);
        }

`