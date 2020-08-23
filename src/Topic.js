import React from 'react';
import {
  Box,
  SimpleGrid
} from '@chakra-ui/core';
// import theme from '@chakra-ui/theme';
import { H2, P, gradient } from './utils';

function Topic(props) {
    return (
        <Box bg="blue" borderRadius="3px" boxShadow="0 0 0 1pt darkBlue" {...props}>
                <H2 p="10px" color="darkBlue">{props.name}</H2>
        </Box>
    )
}

export default Topic;
