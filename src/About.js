import React from 'react';
import {
  Box,
  Text,
  VStack,
  Grid,
  Image,
  SimpleGrid
} from '@chakra-ui/core';
import { PinkButton, H3, P, gradient } from './utils';
import NavBar from './NavBar';

function About(props) {
    return (
        <Box
            bg={gradient}
            bgImage={`url(sand_3.png),${gradient}`}
            bgSize="1000px, cover"
            bgRepeat="no-repeat"
            bgPosition="170% 30%"
            minH="100vh"
        >
            <NavBar />
            <SimpleGrid p="100px" columns={1} spacing={20}>
                <H3>Time to get stuff done.</H3>
                <P whiteSpace="pre-line">
                    Times Up! is a time management tool, designed to make meetings more efficient than ever.
                </P>
            </SimpleGrid>
        </Box>
    )

}

export default About;
