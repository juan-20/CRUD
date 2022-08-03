import Image from 'next/image'
import Logo from '../../assets/imagens/logo-in8-dev.svg'
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
        <div className="hero">
        <Image src={Logo} width='150' height='150' />
        </div>

        <div className="links">
            <p>cadastro</p>
            <p>lista</p>
            <p>sobre mim</p>
        </div>


    </Container>
  )
}
