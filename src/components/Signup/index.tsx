import React, { FormEvent, useState } from 'react'
import { Registration } from './styles'
import { Input, InputLabel, TextField } from "@material-ui/core";
import TextMaskCustomPhone from '../../masks/phone';
import TextMaskCustomBirthday from '../../masks/birthday';
import axios from 'axios';
import { MaskType } from '../../../types/types';
import validator from 'validator'
const { isMobilePhone } = require('validator')

export default function Signup() {
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

    }
  return (
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
  )
}
