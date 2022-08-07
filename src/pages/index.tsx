import { Container } from "./styles";
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
    
     <Signup userData={userData} />

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