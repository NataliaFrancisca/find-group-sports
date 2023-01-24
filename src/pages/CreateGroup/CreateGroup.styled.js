import styled from "styled-components";

export const CreateGroupStyled = styled.main`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column; 

    form{
        width: 60%;
        margin: 20px 0;
        font-size: 1.2em;

        button{
            width: 100%;
        }

        fieldset{
            margin: 12px 0;
            padding: 24px 40px;
            border-radius: 4px;
            border: solid var(--c-black) 5px;
        }

        legend{
            font-size: 1.4em;
            font-weight: 800;
            padding: 0 10px;
            text-transform: uppercase;
        }

        .label-input-col{
            display: flex;
            flex-direction: column;
            margin: 16px 0;

            label{
                font-size: 1.1em;
            }

            label.label-input{
                margin: 4px 0;
                font-weight: 600;
            }

            label.required-input:after{
                content: "*";
                color: var(--c-red);
                font-size: 1rem;
                padding-left: 2px;
                position: relative;
            }
        }

        input, select{
            border-radius: 4px;
            font-size: 1.1em;
            margin: 4px 0;
            padding: 16px 8px;
        }

        input[type=checkbox], 
        input[type=radio]{
            accent-color: var(--c-green);
            margin-right: 4px;
        }


        p[role="alert"]{
            color: var(--c-red);
            font-size: 1.1rem;
            font-weight: 500;
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

    }
`