import React from 'react';
import {
  Box,
  SimpleGrid
} from '@chakra-ui/core';
import { H2, P, gradient } from './utils';
import NavBar from './NavBar';

function Settings(props) {
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
                <H2>Settings</H2>
                <P whiteSpace="pre-line">
                    Stay tuned for chances to customize your Times Up! experience!
                </P>
            </SimpleGrid>
        </Box>
    )

}

export default Settings;
