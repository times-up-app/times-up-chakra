
import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Text,
    VStack,
    Grid,
    Image,
    Link,
    Input
  } from '@chakra-ui/core';
import { PinkButton, gradient } from './utils';
import NavBar from './NavBar';

function Form(props) {
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
