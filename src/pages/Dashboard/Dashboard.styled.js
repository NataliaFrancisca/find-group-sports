import styled from "styled-components";

export const DashboardStyled = styled.section`
    
    h1{
        margin-left: 10px;
        font-size: 2em;

        :after{
            background-color: var(--c-purple);
            content: "";
            display: block;
            height: 3px;
            margin-top: 5px;
            width: 80px;
        }
    }
`