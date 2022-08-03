import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles';
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header';

import '../styles/home.modules.css'
import { Input } from '@material-ui/core';



function MyApp({ Component, pageProps }: AppProps) {

  return(
      <ChakraProvider>
        <GlobalStyles />
        <Header/>
        <Input />
       <Component {...pageProps} />
       </ChakraProvider>
    )
}

export default MyApp
