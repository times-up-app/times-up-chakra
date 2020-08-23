import React from 'react';
import {
  Box,
  Text,
  VStack,
  Grid,
  Image
} from '@chakra-ui/core';
import { Link } from "@chakra-ui/core";
import { PinkButton, gradient } from './utils';
import NavBar from './NavBar';

function Landing(props) {
    return (
        <Box
            bg={gradient}
            bgImage={`url(sand_1.png), url(sand_2.png),${gradient}`}
            bgSize="700px, 1000px, cover"
            bgRepeat="no-repeat, no-repeat"
            bgPosition="-20% 0px, 170% 170%"
        >
            <NavBar />
            <Grid
                minH="100vh"
                pt={110}
                direction="column"
                align="center"
                justify="center"
            >
                <VStack>
                    <Image src="logo.png" h="200px" />
                    <Text fontSize="xl" fontWeight="medium" color="brown">Time's Up!</Text>
                    <Text fontSize="md" color="brown">Get ahead of time.</Text>
                    <Box h="40px" />
                    <PinkButton to="/create-meeting">Create Meeting</PinkButton>
                    <PinkButton to="/">Join Meeting</PinkButton>
                </VStack>
            </Grid>
        </Box>
    )

}

export default Landing;
