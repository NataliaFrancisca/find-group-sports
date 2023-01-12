import styled from "styled-components";

export const RegisterStyled = styled.section`

    &{
        align-items: center;
        display: flex;
        flex-direction: column; 
    }

    h1{
        margin: 10px 0;
    }

    form{
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        padding: 10px;
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

        & input{
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
