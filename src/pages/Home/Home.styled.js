import styled from "styled-components";

export const HomeStyled = styled.header`
    display: grid;
    grid-template-columns: 40% 60%;
    height: auto;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 85vh;
    height: auto;
    position: relative;
    border: solid var(--c-black) 4px;
    z-index: 1;
    width: 95%;

    &:before{
        content: "";
        border: solid var(--c-orange) 4px;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 4px;
        right: 10px;
    }

    section.container-text{  
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px;
        width: 100%;
        z-index: 1;

        & h1.title{
            font-size: 8em;
            font-weight: 600;
            line-height: 6rem;
            letter-spacing: -8px;
            text-transform: uppercase;
        }

        & p.subtitle{
            font-size: 1.8em;
            margin-top: 22px;
        }

        & button.btn-navigate-page{
            align-self: flex-start;
            background-color: var(--c-green);
            color: var(--c-black);
            display: flex;
            font-size: 1.2em;
            font-weight: 600;
            letter-spacing: 2px;
            margin-top: 60px;
            padding: 24px 16px;
            z-index: 1;

            &:hover{
                background-color: var(--c-black);
                color: var(--c-white);
            }
        }
    }

    /* IMAGES */
    section.container-images{
        display: grid;
        grid-template-columns: 25% 30% 25%;
        grid-template-rows: 90%; 
        justify-content: space-around;
        width: 100%;
        padding: 30px 20px;
    }

    #img-circle{
        background: var(--c-orange);
        border-radius: 120px 120px;
        height: 70%;
        position: relative;
        width: 100%;
        align-self: flex-start;

        & img{
            border-radius: 120px 120px;
            height: 100%;
            object-fit: cover;
            position: absolute;
            right: 14px;
            top: 10px;
            width: 100%;
        }
    }

    #img-semi-cirle{
        background-color: var(--c-green);
        border-radius: 120px 120px 0px 0px;
        height: 90%;
        position: relative;
        width: 100%;
        align-self: flex-end;

        & img{
            border-radius: 120px 120px 0px 0px;
            height: 100%;
            left: 20px;
            object-fit: cover;
            position: absolute;
            top: 20px;
            width: 100%;
        }
    }

    #img-square{
        background: var(--c-purple);
        height: 80%;
        position: relative;
        width: 100%;
        align-self: center;

        & img{
            height: 100%;
            left: 20px;
            object-fit: cover;
            position: absolute;
            top: -20px;
            width: 100%;
        }
    }

    @media screen and (max-width:1100px) { 
        &{
            display: flex;
            flex-direction: column-reverse;
            width: 90%;
            padding: 20px 0;
        }

        section.container-text{
            width: 100%;
            text-align: center;
            height: 60%;

            & button.btn-navigate-page{
               align-self: center;
            }
        }

        section.container-images{
            display: flex;
            justify-content: center;
            height: 50%;

            & #img-circle, #img-semi-cirle, #img-square{
                width: 130px;
                height: 130px;
                border-radius: 50%;

                & img{
                    border-radius: 50%;
                    align-self: center;
                    object-fit: cover;
                    top: 10px;
                    left: 10px;
                }
            }
        }
    }

    @media screen and (max-width:600px) {
        section.container-text{
            & h1.title{
                font-size: 7em;
            }
        }
    }

    @media screen and (max-width:480px) {
        section.container-text{
            & h1.title{
                font-size: 6em;
            }
        }

        section.container-images{
            & #img-circle, #img-semi-cirle, #img-square{
                width: 100px;
                height: 100px;
            }
        }
    }

    @media (width:320px) { }
  


`

