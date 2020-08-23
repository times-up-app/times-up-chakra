import React from 'react';
import {
  Box,
  VStack,
  Grid,
  Image
} from '@chakra-ui/core';
import { PinkButton, H1, H3, gradient } from './utils';
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
                    <H1>Time's Up!</H1>
                    <H3>Get ahead of time.</H3>
                    <Box h="40px" />
<<<<<<< HEAD
                    <PinkButton onClick={() => window.location.assign("create-meeting")}>Create Meeting</PinkButton>
                    <PinkButton to="/">Join Meeting</PinkButton>
=======
                    <PinkButton to="/create">Create Meeting</PinkButton>
                    <PinkButton to="/join">Join Meeting</PinkButton>
>>>>>>> 93663ba79c84ef0ee1b5b4324afad8717eb28e1b
                </VStack>
            </Grid>
        </Box>
    )

}

export default Landing;
