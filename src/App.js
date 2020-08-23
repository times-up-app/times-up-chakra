import React from 'react';
import {
  ChakraProvider,
  CSSReset
} from '@chakra-ui/core';
import theme from './theme';
import Landing from './Landing';
import Form from './meeting_form';


function App() {
  return (
    <ChakraProvider theme={theme}>
        <CSSReset />
        <Landing/>
        <Form/>

    </ChakraProvider>
  );
}

export default App;
