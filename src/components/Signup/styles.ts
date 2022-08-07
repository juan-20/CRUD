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
        @media (max-width: 890px){
            font-size: 2rem;
        }
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
         text-transform: uppercase;
        }
     }

`;

export const List = styled.section`
      background-color: #fff;
     height: 800px;
     width: 100%;
     position: absolute;
     top: 1600px;
     color: #355773;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     >h1{
         text-transform: uppercase;
         font-size: 3rem;
         color: #29aae3;
         padding: 2rem;
     }
     .table{
        display: flex;
        max-height:  700px;
        overflow: auto;
     >table{
         thead{
            text-transform: uppercase;
            tr{
                th{
                    padding: 2rem;
                    border-right: 2px solid #29abe2;
                    border-bottom: 2px solid #29abe2;
                }
                .last{
                    border-right: 0px solid #29abe2;
                }
            }
        }
        tbody{
            text-align: center;
            padding: 2rem;
            tr{
                td{
                    padding: 2rem;
                    border-right: 2px solid #29abe2;
                    border-bottom: 2px solid #29abe2;
                }
                .last{
                    border-right: 0px solid #29abe2;
                }
            }
            >tr:last-child{
                td{
                    border-bottom: 0px solid #29abe2;
                }
            }
        }
     }
     @media (max-width: 890px){
         display: none;
        }
    }
    .accordion{
        display: none;
        @media (max-width: 890px){
            display: flex;
            flex-direction: column;
        }
        width: 400px;
        max-width: 80%;
        overflow: hidden;
        .header{
            overflow-x: auto;
            box-sizing: content-box;
            background: transparent;
            display: flex;
            gap: 0.5rem;
            h1{
                padding: 0.1rem 2rem 0.1rem 2rem;
                font-size: 21px;
                color: #808080;
                border: 2px solid #808080;
                :hover{
                    border: 2px solid #29aae3;
                    color: #29aae3;
                    background: #f5f5f5;
                }
            }
        }
        .content{
            width: 100%;
            font-size: 1rem;
            color: #000;
            margin: 0;
            display: flex;
            border: 1px solid #29aae3;
            p{
                color: #808080;
            }
            .title{
                text-transform: uppercase;
                color: #355773;
                font-weight: bold;
                width: 5rem;
            }
            .box{
                padding: 1rem;
            .row{
                display: flex;
                gap: 1.5rem;
                border-bottom: 1px solid #29aae3;
            }
        }
        }
    }
`;
