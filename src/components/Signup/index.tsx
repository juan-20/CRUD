import React, { FormEvent, useState } from 'react'
import { List, Registration } from './styles'
import { Input, InputLabel, TextField } from "@material-ui/core";
import TextMaskCustomPhone from '../../masks/phone';
import TextMaskCustomBirthday from '../../masks/birthday';
import axios from 'axios';
import { MaskType, userType } from '../../../types/types';
import validator from 'validator'
import { InferGetStaticPropsType } from 'next';
import Image from "next/image";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
const { isMobilePhone } = require('validator')

export default function Signup({userData}: InferGetStaticPropsType<typeof getStaticProps>) {
    // variaveis
    const [phone, setPhone] = React.useState<MaskType>({
      textmask: '',
    });
    const [birthday, setBirthday] = React.useState<MaskType>({
      textmask: '',
    });
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
  
    // mascaras
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

    // validadores
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)

    // post:
    async function handleCreateNewUser(event: FormEvent){
      event.preventDefault();
      console.log([birthday.textmask, phone.textmask, name, email])

      // if (name) {
      //   console.log(name)
      //   setNameError(false)
      //  console.log('maneiro')
      // } else {
      //   setNameError(true)
      //   return
      // }
      // if (validator.isEmail(email)) {
      //   setEmailError(false)
      //  console.log('maneiro')
      // } else {
      //   setEmailError(true)
      //   return
      // }
      phone.textmask = '3195287182'
      if (isMobilePhone('+55 '+ phone.textmask, 'pt-BR')) {
        // setEmailError(false)
       console.log('maneiro')
       console.log('+55 '+ phone.textmask);
      } else {
        // setEmailError(true)
        console.log('huh')
        console.log('+55 '+ phone.textmask);
        console.log(validator.isMobilePhone)
        return
      }

      axios.post('http://localhost:3333/createUser', {
        name: name,
        email: email,
        nascimento: birthday.textmask,
        telefone: phone.textmask
      }).then(res => {
        console.log('send')
      })
      setName('')
      setEmail('')
      setBirthday({
        textmask: '',
      });
      setPhone({
        textmask: '',
      });
      userData.push({ 
        name: name,
        email: email,
        nascimento: birthday.textmask,
        telefone: phone.textmask,
        userNumber: userData.length++
      })
      console.log(userData)

    }

    const [id, setId] = useState(1)
  return (
    <>
    <Registration>
        <h1>Cadastro</h1>

        <form onSubmit={handleCreateNewUser}  className="form-control">
        <InputLabel>Nome</InputLabel>
          <TextField
          id="standard-basic" 
          value={name} 
          placeholder='Fulano Beltrano de Oliveira da Silva' 
          onChange={(e) => setName(e.target.value)} 
          error={nameError === true}
          helperText={nameError === true ? 'Digite um nome' : ' '}
          />
          
          <InputLabel>E-mail</InputLabel>
          <TextField 
          id="standard-basic"
          value={email} 
          placeholder="fulanobos@gmail.com" 
          onChange={(e) => setEmail(e.target.value)}
          error={emailError === true}
          helperText={emailError === true ? 'Email invalido' : ' '}
          />

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
            error={phone.textmask !== "" && !phone.textmask.match(TextMaskCustomPhone as any)}
          />
          <InputLabel placeholder="teste" />
          <button placeholder="Cadastrar"  type="submit">
            Cadastrar
          </button>
      </form>
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
        </tbody>
      
          <tbody>
          {userData?.map((user) => (
          <tr key={user.id}>
            <td>{user.userNumber}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.nascimento}</td>
            <td className="last">{user.telefone}</td>
          </tr>
          ))}
      </tbody>
      </table>
      </div>

      <div className="accordion">
            
        <div className="header w-4 scrollbar-hide">
          {userData?.map((user) => (
            <>
              <>
                <h1 onClick={() => setId(user.userNumber)}>{user.userNumber}</h1>
              </>
              </>
          ))}
          </div>



          {userData?.map((user) => (
            <div className="content">
              <>
              {user.userNumber === id ? (
                <div className="box">
              <div className="row">
              <p className='title'>Nome </p> <p>{user.name}</p>
              </div>
              <div className="row">
              <p className='title'>Email</p> <p> {user.email}</p>
              </div>
              <div className="row">
              <p className='title'>Nasc.</p> <p> {user.nascimento}</p>
              </div>
              <div className="row">
              <p className='title'>Tel. </p> <p> {user.telefone}</p>
              </div>
              </div>
              ) : ''}
              </>
            </div>
          ))}

          </div>
      {/* <Image className="toTop" width={30} height={30} src='https://raw.githubusercontent.com/juan-20/Teste/d2c34ba91679532518151f84f77e1aa059aa3673/src/assets/icones/topo-pag.svg' /> */}
      </List>

      </>
  )
}

export const getStaticProps = async () => {
  let host = process.env.API
  const res = await fetch(host + '/getUser')
  const userData: userType[] = await res.json()

  return{
    props:{
      userData,
    }
  }
  
}