import styled from "styled-components";
export const Container = styled.main`
     background-repeat: no-repeat;
    background-size: cover; 
    position: absolute !important;
    height: 800px;
    width: 100%;
    top: 0px;
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        z-index: 999;
        margin-top: 20rem;
        margin-right: 20rem;
        font-family: "HelveticaUltralight" !important;
        font-size: 50px;
        font-weight: lighter !important;
        >h1:first-of-type{
            font-size: 100px;
        }
    }
`;