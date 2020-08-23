import React from 'react';
import {
  Box,
  Text,
  VStack,
  Grid,
  Image,
  Button
} from '@chakra-ui/core';
import { PinkButton, gradient } from './utils';
import NavBar from './NavBar';

function Landing(props) {
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
                <VStack spacing={4}>
                    <Image src="logo.png" h="200px" />
                    <Text fontSize="xl" fontWeight="medium" color="brown">Time's Up!</Text>
                    <Text fontSize="md" color="brown">Get ahead of time.</Text>
                    <Box h="40px" />
                    <PinkButton msg="Create Meeting" />
                    <PinkButton msg="Join Meeting" />
                </VStack>
            </Grid>
        </Box>
    )

}

export default Landing;
