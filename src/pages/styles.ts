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
        }
        `;

export const Registration = styled.section`
     background-color: #29abe2;
     height: 800px;
     width: 100%;
     position: absolute;
     top: 800px;
     color: #fff;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 5rem;
     >h1{
        font-size: 5rem;
    }
    .form-control{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.6rem;
        width: 20rem;
        >label{
            color: #fff;
        }
        >div{
            height: 48px;
            >div{
                color: #fff;
            }
            >input{
                color: #fff;
            }
        }
        >button{
            font-size: 5rem;
         background: #011e48 ;
         color: #29abe2;
        }
     }

`;