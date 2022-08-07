import { Container, List } from "./styles";
import React from "react";
import TextMaskCustomPhone from "../masks/phone";
import TextMaskCustomBirthday from "../masks/birthday";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Table } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import axios from "axios";
import { userType } from "../../types/types";
import Hero from "../components/Hero";
import Signup from "../components/Signup";
import Footer from "../components/Footer";



declare module "@material-ui/core/Input" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}


export default function Home({userData}: InferGetStaticPropsType<typeof getStaticProps>) {

 

  return (
    <Container >
     
     <Hero />

     <Signup />

      

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

        <Image className="toTop" width={30} height={30} src='https://raw.githubusercontent.com/juan-20/Teste/d2c34ba91679532518151f84f77e1aa059aa3673/src/assets/icones/topo-pag.svg' />
        </div>
      </List>

    <Footer/>

     
    </Container>

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