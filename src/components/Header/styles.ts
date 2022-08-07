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

        .hex {
            height: 10px;
            width: 10px;
            align-self: center;
            background: #fffeff;
            transform: rotate(90deg);
            -webkit-clip-path: polygon(
                50% 0%,
                95% 25%,
                95% 75%,
                50% 100%,
                5% 75%,
                5% 25%
            );
            clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
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