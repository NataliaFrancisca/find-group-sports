import styled from "styled-components";

export const RegisterStyled = styled.section`

    &{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        margin: 10px 0;
    }

    form{
        padding: 10px;
        border-radius: 6px;
        width: 90%;

        display: flex;
        flex-direction: column;

        font-size: 1.1em;

        & fieldset{
            margin: 8px 0;
            padding: 10px;
        }

        & fieldset#form-about-manager{
            border: solid var(--c-orange) 5px;
        }

        & fieldset#form-about-group{
            border: solid var(--c-purple) 5px;
        }

        & legend{
            font-size: 1em;
            font-weight: 800;
            padding: 0 10px;
            text-transform: uppercase;
        }

        & button{
            background-color: #489446;
            color: #e7e8de;
            display: flex;
            font-size: 1em;
            font-weight: 400;
            letter-spacing: 2px;
            margin: 10px 0;
            padding: 20px 16px;
            align-self: flex-end;

            &:hover{
                background-color: var(--c-black);
            }
        }

        & p[role="alert"]{
            color: red;
            font-size: .8em;
        }

        & input{
            padding: 10px 8px;
            margin: 4px 0;
            font-size: 1em;
        }

        & input[type=checkbox], input[type=radio]{
            accent-color: var(--c-purple);
        }


        & input:out-of-range{
            border: solid red 1px;
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
            font-size: 1em;
            font-weight: 400;
        }

        & label.required-input:after{
            content:"*";
            color:red;
            font-size: .8rem;
            padding-left: 4px;
            position:relative;
        }
    }

`
