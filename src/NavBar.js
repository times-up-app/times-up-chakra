import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Button,
  ButtonGroup
} from '@chakra-ui/core';
import { LinkButton } from './utils';

function NavBar(props) {
    return (
        <Flex>
            <Spacer />
            <Box p="5">
                <ButtonGroup variant="link" spacing="5">
                    <LinkButton msg="Home"/>
                    <LinkButton msg="About"/>
                    <LinkButton msg="Settings"/>
                </ButtonGroup>
            </Box>
        </Flex>
    )
}

export default NavBar;
