import styled from "styled-components";

export const RegisterStyled = styled.section`

    &{
        display: flex;
        flex-direction: column;
        align-items:center;
    }


    h1{
        text-align: center;
        margin: 10px 0;
    }

    form{
        padding: 10px;
        border-radius: 6px;
        width: 90%;

        display: flex;
        flex-direction: column;

        font-size: 1.1em;


        & legend{
            font-size: 1em;
            font-weight: 800;
            text-transform: uppercase;
            margin: 6px 0;
     
            &::after{
                background-color: var(--c-orange);
                content: "";
                display: block;
                height: 3px;
                margin-top: 5px;
                width: 80px;
            }
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
    }


    & .group-input{
        display: flex;
        flex-direction: column;
        margin: 6px 0;

        & label{
            font-size: 1em;
            font-weight: 600;
        }

        & input{
            padding: 10px 8px;
            margin: 4px 0;
            font-size: 1em;
        }

        & p[role="alert"]{
            color: red;
            font-size: .8em;
        }
    }

`
