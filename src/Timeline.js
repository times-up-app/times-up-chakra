import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  HStack,
  VStack,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/core';
import moment from 'moment';
import { PinkButton, H1, H2, H3, P, gradient }  from './utils';
import NavBar from './NavBar';
import Topic from './Topic';

const chunkSize = 100;

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
                        <P>{`Others can join your meeting using the ID: ${props.id}`}</P>
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


function Timeline(props) {
    const meetingId = props.match.params.id;

    // meeting parameters, to be fetched from the db
    const startHour = 12;
    const startMinute = 30;
    const endHour = 13;
    const endMinute = 30;
    var topicData = [];
    topicData.push({
        name: 'Topic 2',
        order: 1,
        length: 10
    });
    topicData.push({
        name: 'Topic 1',
        order: 0,
        length: 15
    });

    const start = moment(`${startHour}:${startMinute}`, "HH:mm");
    const end = moment(`${endHour}:${endMinute}`, "HH:mm");

    const numMinutes = (end.diff(start) / 1000) / 60;
    const timelineLength = numMinutes / 5;

    var timelineMarkers = [];
    var time = moment(`${startHour}:${startMinute}`, "HH:mm");
    for (var i = 0; i < timelineLength + 1; i++) {
        timelineMarkers.push(<H3 key={i}>{time.format('HH:mm')}</H3>);
        time = time.add(5, 'm');
    }

    // sort topics based on desired ordering
    // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    topicData.sort((a,b) => {
        if ( a.order < b.order ) {
            return -1;
        }
        if ( a.order > b.order ) {
            return 1;
        }
        return 0;
    });
    var topicComponents = [];
    for (var i = 0; i < topicData.length; i++) {
        topicComponents.push(<Topic key={i} name={topicData[i].name} h={`${topicData[i].length * chunkSize / 5}px`}  m="5px" />);
    }
    console.log(topicComponents);

    return (
        <Box
            bg={gradient}
            minH="100vh"
        >
            <NavBar />
            <VStack pl={10} align="left">
                    <H2>{`Conan's Meeting`}</H2>
                    <H3>{`${startHour}:${startMinute} - ${endHour}:${endMinute}`}</H3>
                    <Box h="5px"/>
                    <ButtonGroup  spacing="5">
                        <PinkButton isDisabled>Export Notes</PinkButton>
                        <ShareMeetingModal id={meetingId}/>
                    </ButtonGroup>
            </VStack>
            <Box bg="red" zIndex={10} />
            <Box m="50px" h={`${timelineLength * chunkSize}px`}>
                <Flex h="100%">
                    <VStack divider={<Box h={`${chunkSize}px`}/>}>
                        {timelineMarkers}
                    </VStack>
                    <Spacer />
                    <Box bg="white" borderRadius="3px" boxShadow="0 0 0 1pt grey" h="100%" w="90%" >
                    {topicComponents}
                    </Box>
                </Flex>
            </Box>
        </Box>
    )

}

export default Timeline;
