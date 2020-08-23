import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  ButtonGroup
} from '@chakra-ui/core';
import { LinkButton } from './utils';

function NavBar(props) {
    return (
        <Flex>
            <Spacer />
            <Box p="5">
                <ButtonGroup variant="link" spacing="5">
                    <LinkButton to="/">Home</LinkButton>
                    <LinkButton to="/about">About</LinkButton>
                    <LinkButton to="/settings">Settings</LinkButton>
                </ButtonGroup>
            </Box>
        </Flex>
    )
}

export default NavBar;
