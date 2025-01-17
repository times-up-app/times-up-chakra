import React from 'react';
import {
  ChakraProvider,
  CSSReset
} from '@chakra-ui/core';
import theme from './theme';
import Routes from './Routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <CSSReset />
        <Routes />
    </ChakraProvider>
  );
}

export default App;
