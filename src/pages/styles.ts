import styled from "styled-components";
export const Container = styled.main`
    height: 100vh;
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
            @media (max-width: 400px){
                padding: 0;
                margin-top: 0rem;
                margin-right: 0rem;
                >h1:first-of-type{
                    font-size: 2rem;
                   }
        .links{
        display: none;
        }
     }
        }
        `;


