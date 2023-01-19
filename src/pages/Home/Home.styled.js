import styled from "styled-components";

export const HomeStyled = styled.header`
    display: grid;
    grid-template-columns: 50% 50%;
    height: auto;
    justify-content: space-between;
    margin: 10px 20px;
    min-height: 85vh;
    height: auto;
    position: relative;
    border: solid var(--c-black) 4px;
    


    /* display: flex;
    height: auto;
    justify-content: space-between;
    min-height: 85vh;
    height: auto;
    position: relative;
    border: solid var(--c-black) 4px;
    margin: 10px 20px; */

    &:before{
        content: "";
        border: solid var(--c-orange) 4px;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 4px;
        right: 10px;
    }

    @media (width:320px) { }
    @media (width:480px) { }

    @media screen and (max-width: 600px) { 
        grid-template-columns: 100%;
        gap: 30px;
        padding: 20px 0;
    }

    @media screen and (max-width: 801px) {

    }

    section.container-text{  
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 20px 0 20px;
        width: 100%;

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

        @media screen and (max-width:600px) {
            & h1.title{
                font-size: 7em;
            }

            & button.btn-navigate-page{
                font-size: 1.6em;
                padding: 36px 20px;
            }
        }
    }

    /* IMAGES */
    section.container-images{
        display: flex;
        position: relative;
        width: 100%;

        & .first-group{
            display: flex;
            flex-direction: column;
            margin-right: 50px;
            margin-top: 80px;
        }

        & .second-group{
            margin-top: 40px;
        }

        
        @media screen and (max-width: 600px) { 
            display: none;
        }
    }

    #img-circle{
        background: var(--c-orange);
        border-radius: 120px 120px;
        height: 360px;
        position: relative;
        width: 220px;

        & img{
            border-radius: 120px 120px;
            height: 360px;
            object-fit: cover;
            position: absolute;
            right: 14px;
            top: 10px;
            width: 220px;
        }
    }

    #img-semi-cirle{
        background-color: var(--c-green);
        border-radius: 120px 120px 0px 0px;
        height: 240px;
        position: relative;
        width: 240px;

        & img{
            border-radius: 120px 120px 0px 0px;
            height: 240px;
            left: 20px;
            object-fit: cover;
            position: absolute;
            top: 20px;
            width: 240px;
        }
    }

    #img-square{
        background: var(--c-purple);
        height: 300px;
        margin-left: 40px;
        margin-top: 60px;
        position: relative;
        width: 340px;

        & img{
            height: 300px;
            left: 20px;
            object-fit: cover;
            position: absolute;
            top: -20px;
            width: 340px; 
        }
    }

`

