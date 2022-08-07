import Image from 'next/image'
import Logo from '../../assets/imagens/logo-in8-dev.svg'
import Hamburguer from '../../assets/icones/hamburguer-aberto0.svg'
import { Container } from "./styles";
import { useState } from 'react';
import Drawer from '../Drawer';
import Link from 'next/link';


export default function Header(props: any) {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Container>
      <div  className="hamburguer" onClick={()=> setShowDrawer(true)}>
        {showDrawer === true ? (
          <Drawer onClose={() => setShowDrawer(false)}></Drawer>
        ) : ''}
        <Image src={Hamburguer} width='50' height='50' />
      </div>
        <div className="hero">

        <Image src={Logo} width='150' height='150' />
        </div>

        <div className="links">

        <Link href='#list'>
        <p>lista</p>
        </Link>
        <Link href='#registration'>
        <p>cadastro</p>
        </Link>
        <Link href='#aboutme'>
        <p>sobre mim</p>
        </Link>
        </div>


    </Container>
  )
}
