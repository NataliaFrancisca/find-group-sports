import styled from "styled-components";

export const HomeStyled = styled.header`
    display: flex;
    height: auto;
    justify-content: space-between;
    min-height: 90vh;

    section.container-text{  
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 40px;
        width: 50%;

        & h1.title{
            font-size: 5em;
            font-weight: 600;
            line-height: 8rem;
            letter-spacing: 6px;
            text-transform: capitalize;
        }

        & p.subtitle{
            font-size: 1.8em;
            margin-top: 22px;
        }
    }

    /* IMAGES */
    section.container-images{
        display: flex;
        position: relative;
        width: 50%;

        & .first-group{
            display: flex;
            flex-direction: column;
            margin-right: 50px;
            margin-top: 80px;
        }

        & .second-group{
            margin-top: 40px;
        }
    }

    #img-circle{
        border: solid var(--c-orange) 2px;
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
        border: solid var(--c-purple) 4px;
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

    /* BUTTON  */
    .btn-navigate-page{
        align-self: flex-end;
        background-color: #489446;
        color: #e7e8de;
        display: flex;
        font-size: 1.2em;
        font-weight: 400;
        justify-self: flex-end;
        letter-spacing: 2px;
        margin-top: 60px;
        padding: 24px 16px;
        text-shadow: 1px 1px var(--c-black);

        &:hover{
            background-color: var(--c-black);
        }
    }

`

