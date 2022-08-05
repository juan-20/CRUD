import { Input, InputLabel, TextField } from "@material-ui/core";
import { Container, Footer, List, Registration } from "./styles";
import React from "react";
import TextMaskCustomPhone from "../masks/phone";
import TextMaskCustomBirthday from "../masks/birthday";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Table } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import axios from "axios";

interface MaskType {
  textmask: string;
}

declare module "@material-ui/core/Input" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}
let countUser = -3


export default function Home({userData}: InferGetStaticPropsType<typeof getStaticProps>) {

  console.log(userData)

  const [phone, setPhone] = React.useState<MaskType>({
    textmask: '',
  });
  const [birthday, setBirthday] = React.useState<MaskType>({
    textmask: '',
  });
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')


  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone({
      ...phone,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeBirthday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday({
      ...birthday,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container >
      <div className="background">
      <div className="content">
        <h1>ESTÁGIO</h1>  
        <h1>PROVA DE SELEÇÃO</h1>
        </div>
      </div>

      <Registration>
        <h1>Cadastro</h1>

        <div  className="form-control">
        <InputLabel>Nome</InputLabel>
          <TextField
          id="standard-basic" value={name} placeholder='Fulano Beltrano de Oliveira da Silva' onChange={(e) => setName(e.target.value)} variant="standard"/>
          <InputLabel>E-mail</InputLabel>
          <TextField 
          id="standard-basic" value={email} placeholder="fulanobos@gmail.com" onChange={(e) => setEmail(e.target.value)}  variant="standard" />

          <InputLabel>Data de nascimento</InputLabel>
          <Input
            value={birthday.textmask}
            onChange={handleChangeBirthday}
            name="textmask"
            placeholder="13/10/1995"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustomBirthday as any}
            />
            <InputLabel>Telefone</InputLabel>
          <Input
            value={phone.textmask}
            onChange={handleChangePhone}
            name="textmask"
            placeholder="(31) 9 9999-9999"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustomPhone as any}
          />
          <InputLabel placeholder="teste" />
          <button placeholder="Cadastrar" onClick={()=> {
          console.log([birthday.textmask, phone.textmask, name, email])
          let user = [birthday.textmask, phone.textmask, name, email]

          axios.post('http://localhost:3333/createUser', {
            name: name,
            email: email,
            nascimento: birthday.textmask,
            telefone: phone.textmask
          }).then(res => {
            console.log('send')
          })
          }}
           >
            Cadastrar
          </button>
      </div>

       


      </Registration>

      <List>

          <h1>Lista de cadastro</h1>
      <div className="table">    
        <table>
        <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Nascimento</th>
              <th className="last">Telefone</th>
            </tr>
        </thead>
        <tbody>
            {userData.map((user) => (
            <tr key={user.id}>
              <td>{countUser++}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.nascimento}</td>
              <td className="last">{user.telefone}</td>
            </tr>
            ))}
        </tbody>
        </table>

        <Image className="toTop" width={30} height={30} src='https://raw.githubusercontent.com/juan-20/Teste/d2c34ba91679532518151f84f77e1aa059aa3673/src/assets/icones/topo-pag.svg' />
        </div>
      </List>

      <Footer className="footer">
        <p>Fulano Beltrano de Oliveira da Silva</p>
        <p>fulanos@gmail.com</p>
        <p>(31) 9 9666-1111</p>
        <p>Faculdade de Belo Horizonte</p>
      </Footer>

     
    </Container>

  )
}


export const getStaticProps = async () => {
  let host = process.env.API
  const res = await fetch(host + '/getUser')
  const userData = await res.json()

  return{
    props:{
      userData,
    }
  }
  
}