import styled from "styled-components";

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
        text-transform: uppercase;
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
         font-size: 3rem;
         background: #011e48 ;
         color: #29abe2;
        }
     }

`;