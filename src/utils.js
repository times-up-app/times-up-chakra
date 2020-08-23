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
            as={Link}
            to={props.to}
            bg={(props.isDisabled && "dullPink") || "pink"}
            borderRadius={25}
            color="white"
            fontSize="sm"
            fontWeight="regular"
            variant="solid"
            {...props}
        >
            {props.children}
        </Button>
    )
}

export function PinkSubmitButton(props) {
    return (
        <Button
            onClick={props.onClick}
            bg={(props.isDisabled && "dullPink") || "pink"}
            borderRadius={25}
            color="white"
            fontSize="sm"
            fontWeight="regular"
            variant="solid"
            {...props}
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

export const H1 = (props) => (
    <Text fontSize="xl" fontWeight="medium" color="brown">{props.children}</Text>
);

export const H2 = (props) => (
    <Text fontSize="lg" fontWeight="medium" color="brown">{props.children}</Text>
);

export const H3 = (props) => (
    <Text fontSize="md" fontWeight="medium" color="brown">{props.children}</Text>
);

export const P = (props) => (
    <Text fontSize="sm" fontWeight="regular" color="brown">{props.children}</Text>
);

export const Label = (props) => (
    <Text fontSize="sm" color="brown" textAlign="right" fontWeight="medium">
        {props.children}
    </Text>
);

// gradient used in all page backgrounds
export const gradient = `linear-gradient(${theme.colors.white},${theme.colors.lightYellow})`;
