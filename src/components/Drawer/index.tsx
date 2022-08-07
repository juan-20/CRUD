import React from 'react'
import Image from 'next/image'
import { Container, Content } from './styles'
import Hamburguer from '../../assets/icones/hamburguer-aberto0.svg'
import Modal from './Background/modal';
import Link from 'next/link';


interface DrawerProps {
    onClose: () => void;
}

export default function Drawer(props: DrawerProps) {
  return (
    <Modal onClose={props.onClose}>
    <Container onClick={props.onClose}>
        <Content>
        <Image onClick={props.onClose} className='hamburguer' src={Hamburguer} width='50' height='50' />
        <Link href='#list'>
        <p>lista</p>
        </Link>
        <Link href='#registration'>
        <p>cadastro</p>
        </Link>
        <Link href='#aboutme'>
        <p>sobre mim</p>
        </Link>
        </Content>
    </Container>
    </Modal>
  )
}
