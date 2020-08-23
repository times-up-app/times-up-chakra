import React from 'react';
import {
  Box,
  Text,
  VStack,
  Grid,
  Image,
  SimpleGrid
} from '@chakra-ui/core';
import { PinkButton, gradient } from './utils';
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
                <Text fontSize="lg" fontWeight="medium" color="brown">
                    Time to get stuff done.
                </Text>
                <Text fontSize="sm" fontWeight="regular" color="brown" whiteSpace="pre-line">
                    Times Up! is a time management tool, designed to make meetings more efficient than ever.
                </Text>
            </SimpleGrid>
        </Box>
    )

}

export default Settings;
