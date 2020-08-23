
import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/core";
import {
    Box,
    Text,
    VStack,
    Grid,
    Image
  } from '@chakra-ui/core';
import { Link } from "@chakra-ui/core";
import { Input } from "@chakra-ui/core";
import { PinkButton, gradient } from './utils';
import NavBar from './NavBar';

function Form(Laprops) {
    return (
        <Box bg={gradient}>
            <NavBar />
            <Grid
                minH="100vh"
                pt={110}
                direction="column"
                align="center"
                justify="center"
            >
                <VStack spacing={3}>
                <Input variant="meeting name" placeholder="Meeting Name" />
                <Input variant="start time" placeholder="Start Time" />
                <Input variant="end time" placeholder="End Time" />
                </VStack>
            </Grid>
        </Box>
        
    )

}

export default Form;
