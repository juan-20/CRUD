import styled from "styled-components";
import HeroLG from '../../public/imagens/index-image.jpg'

export const Container = styled.nav`
    position: absolute;
    z-index: 999;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 25rem 0 25rem;
    .links{
        display: flex;
        gap: 1.5rem;
        >p{
            color: #fff;
            :hover{
                border-bottom: 2px solid #808080;
                cursor: pointer;
            }
        }

    }
    .hamburguer{
        display: none;
        :hover{
            fill: #29abe2;
            color: #29abe2;
        }
        @media (max-width: 890px){
            display: flex;
         }
    }
    @media (max-width: 890px){
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 3rem;
        .links{
        display: none;
        }
     }
    @media (max-width: 300px){
        padding: 0;
        .links{
        display: none;
        }
     }
`;