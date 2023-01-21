import styled from "styled-components";

export const HomeStyled = styled.header`
    border: solid var(--c-black) 4px;
    display: grid;
    grid-template-columns: 40% 60%;
    height: auto;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 85vh;
    height: auto;
    padding: 20px 0;
    position: relative;
    width: 95%;
    z-index: 1;

    &:before{
        content: "";
        border: solid var(--c-orange) 4px;
        height: 100%;
        position: absolute;
        right: 10px;
        top: 4px;
        width: 100%;
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

            @media screen and (max-width:680px){font-size: 7em}
            @media screen and (max-width:480px){font-size: 6em}
            @media screen and (max-width:380px){font-size: 5em}
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
            margin-top: 50px;
            padding: 24px 16px;
            z-index: 1;

            &:hover{
                background-color: var(--c-black);
                color: var(--c-white);
            }
        }

        @media screen and (max-width: 1100px){ 
            text-align: center;
            padding: 20px 0;

            & button.btn-navigate-page{
               align-self: center;
            }
        }
    }

    @media screen and (max-width: 1100px){
        display: flex;
        flex-direction: column-reverse;
        min-height: 0;
    }
`

export const GroupImagesStyled = styled.section`
    display: grid;
    grid-template-columns: 25% 30% 25%;
    grid-template-rows: 90%; 
    justify-content: space-around;
    padding: 30px 20px
    width: 100%;

    & .div-image-home{
        position: relative;
        width: 100%;
        
        & img{
            height: 100%;
            object-fit: cover;
            position: absolute;
            width: 100%;
        }
    }

    & .circle{
        align-self: flex-start;
        background: var(--c-orange);
        border-radius: 120px 120px;
        height: 70%;

        & img{
            border-radius: 120px 120px;
            right: 14px;
            top: 10px;
        }
    }

    & .semi-circle{
        align-self: flex-end;
        background-color: var(--c-green);
        border-radius: 120px 120px 0px 0px;
        height: 90%;

        & img{
            border-radius: 120px 120px 0px 0px;
            left: 20px;
            top: 20px;
        }
    }

    & .square{
        align-self: center;
        background: var(--c-purple);
        height: 80%;
      
        & img{
            height: 100%;
            left: 20px;
            top: -20px;
        }
    }

    @media screen and (max-width: 1100px){
        display: flex;
        justify-content: center;
        margin: 20px 0;

        & .div-image-home{
            border-radius: 50%;
            height: 130px;
            width: 130px;
        
            & img{
                align-self: center;
                border-radius: 50%;
                left: 8px;
                top: 12px;
            }
        }
    }

    @media screen and (max-width:480px){
        .div-image-home{
            width: 100px;
            height: 100px;
        }
    }

    @media screen and (max-width:380px){
        .div-image-home{
            width: 80px;
            height: 80px;
        }
    }
`