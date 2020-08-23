
import React, { Component } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Text,
    VStack,
    Grid,
    Image,
    Link,
    Input,
    Button
  } from '@chakra-ui/core';
import { PinkButton, gradient } from './utils';
import NavBar from './NavBar';

class Form extends Component{
    async submitForm(event){
      console.log(this.state);

        // POST request using fetch with async/await
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({meeting_name: this.state.meetingName, start_time: this.state.startTime, end_time: this.state.endTime})
        };
      const response = await fetch(' https://sabitatasnim.api.stdlib.com/times-up@dev/meeting-software-airtable/', requestOptions);
      const data = await response.json();
      console.log("IhateReact")
    }

    constructor(props){
        console.log("hi")
        super(props)
        this.state = {
            meetingName: "",
            startTime: "",
            endTime: ""
        };
    }

/*    updateInput(event){
        event.target.id
        this.setState()
    }*/
        render(){
          console.log("hey")
          return (
            <Box bg={gradient}>
              <NavBar />
              <Grid
                minH="100vh"
                pt={110}
                direction="column"
                align="center"
                justify="center"
              >
                      <VStack spacing={3}>
                      <Input onChange={(event) => this.setState({meetingName : event.target.value})} variant="meeting name" placeholder="Meeting Name" />
                      <Input onChange={(event) => this.setState({startTime : event.target.value})} variant="start time" placeholder="Start Time" />
                      <Input onChange={(event) => this.setState({endTime : event.target.value})} variant="end time" placeholder="End Time" />
                      <PinkButton onClick={async(event) => await this.submitForm(event)}>Create Meeting</PinkButton>
                  </VStack>
              </Grid>
            </Box>
          );
        }
}

export default Form;
