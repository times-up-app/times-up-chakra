import React from 'react';
import {
  ChakraProvider,
  CSSReset
} from '@chakra-ui/core';
import theme from './theme';
import Landing from './Landing';


function App() {
  return (
    <ChakraProvider theme={theme}>
        <CSSReset />
        <Landing/>
    </ChakraProvider>
  );
}

export default App;
