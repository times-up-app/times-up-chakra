import React from 'react';
import {
  Text,
  Button
} from '@chakra-ui/core';
import theme from './theme';
import { Link } from "react-router-dom";

export function PinkButton(props) {
    return (
        <Button
            //as={Link}
            //to={props.to}
            bg="pink"
            borderRadius={25}
            color="white"
            fontSize="sm"
            fontWeight="regular"
            variant="solid"
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

export function LinkButton(props) {
    return (
        <Button
            as={Link}
            to={props.to}
            fontSize="sm"
            fontWeight="medium"
            color="brown"
        >
            {props.children}
        </Button>
    )
}

// gradient used in all page backgrounds
export const gradient = `linear-gradient(${theme.colors.white},${theme.colors.lightYellow})`;
