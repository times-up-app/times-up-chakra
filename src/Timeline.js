import React from 'react';
import {
  Box,
  VStack,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/core';
import { PinkButton, H1, H2, H3, P, gradient }  from './utils';
import NavBar from './NavBar';

function ShareMeetingModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <PinkButton onClick={onOpen}>Share Meeting</PinkButton>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader fontSize="lg" fontWeight="medium" color="brown">
                        Share Meeting
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <P>
                            {`Others can join your meeting using its Meeting ID: ${props.id}`}
                        </P>
                    </ModalBody>
                    <ModalFooter>
                        <PinkButton onClick={onClose}>Close</PinkButton>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
            </Modal>
        </>
    )
}


const Test = () => (
    <Popover>
    <PopoverTrigger>
        <PinkButton>Trigger</PinkButton>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
    </PopoverContent>
    </Popover>
)

function Timeline(props) {
    const meetingId = props.match.params.id;

    // meeting parameters, to be fetched from the db
    const start_hour = 12;
    const start_minute = 30;
    const end_hour = 13;
    const end_minute = 30;

    return (
        <Box
            bg={gradient}
            minH="100vh"
        >
            <NavBar />
            <VStack pl={10} align="left">
                    <H2>{`Conan's Meeting`}</H2>
                    <H3>{`${start_hour}:${start_minute} - ${end_hour}:${end_minute}`}</H3>
                    <Box h="5px"/>
                    <ButtonGroup  spacing="5">
                        <PinkButton isDisabled>Export Notes</PinkButton>
                        <ShareMeetingModal id={meetingId}/>
                    </ButtonGroup>
            </VStack>
        </Box>
    )

}

export default Timeline;
