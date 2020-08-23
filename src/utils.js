import React from 'react';
import {
  Text,
  Button
} from '@chakra-ui/core';
import theme from './theme';

export function PinkButton(props) {
    return (
        <Button
            bg="pink"
            borderRadius={25}
            color="white"
            fontWeight="regular"
            fontSize="sm"
            variant="solid"
        >
            <Text fontSize="sm" color="white">
                {props.msg}
            </Text>
        </Button>
    )
}

export function LinkButton(props) {
    return (
        <Button fontSize="sm" fontWeight="medium" color="brown">
            {props.msg}
        </Button>
    )
}

// gradient used in all page backgrounds
export const gradient = `linear-gradient(${theme.colors.white},${theme.colors.lightYellow})`;
