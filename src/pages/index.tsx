import { Input, InputLabel, TextField } from "@material-ui/core";
import { Container, Registration } from "./styles";
import React from "react";
import TextMaskCustomPhone from "../masks/phone";
import TextMaskCustomBirthday from "../masks/birthday";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Table } from "@chakra-ui/react";

interface MaskType {
  textmask: string;
}

declare module "@material-ui/core/Input" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const theme = createTheme({
  components: {
    MuiInput: {
       styleOverrides: {
        root:{
          fontSize: '4rem',
          width: '300px'
        }
       }
    }
  }
});



export default function Home() {

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
      <ThemeProvider theme={theme}>
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
          }} >
            Cadastrar
          </button>
      </div>
      </Registration>

     
      </ThemeProvider>
    </Container>

  )
}
