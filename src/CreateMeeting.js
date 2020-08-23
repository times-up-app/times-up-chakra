
import React, { Component } from 'react';
import {
    FormControl,
    FormErrorMessage,
    Box,
    Grid,
    Input,
    HStack,
    SimpleGrid,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/core';
import { PinkSubmitButton, Label, H2, P, gradient } from './utils';
import NavBar from './NavBar';
import { Formik, Field, Form } from 'formik';

<<<<<<< HEAD
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
=======
const onSubmit = (values, actions) => {
    setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
    }, 1000)
};

function CreateMeeting(props) {
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
>>>>>>> 93663ba79c84ef0ee1b5b4324afad8717eb28e1b
                minH="100vh"
                pt={110}
                direction="column"
                align="center"
                justify="center"
<<<<<<< HEAD
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
=======
            >
                <Formik
                    initialValues={{
                        name: '',
                        start_hour: 12,
                        start_minute: 30,
                        end_hour: 13,
                        end_minute: 30
                    }}
                    validate={
                        values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            return errors;
                    }}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <H2>Creating New Meeting</H2>
                        <Box h="20px"/>
                        <SimpleGrid columns={2} spacing={10} w="400px">
                            <Label>Meeting Name</Label>
                            <Field
                                name="name"
                                render={({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <Input
                                            {...field}
                                            id="name"
                                            size="sm"
                                            color="brown"
                                            isInvalid={form.errors.name && form.touched.name}
                                            errorBorderColor="red"
                                        />
                                        <FormErrorMessage fontWeight="medium" color="red">
                                            {form.errors.name}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            />
                            <Label>Start Time</Label>
                            <HStack>
                                <Field
                                    name="start_hour"
                                    render={({ field, form }) => (
                                        <FormControl>
                                            <NumberInput
                                                {...field}
                                                id="start_hour"
                                                size="sm"
                                                color="brown"
                                                step={1}
                                                min={0}
                                                max={23}
                                            >
                                                <NumberInputField id="start_hour"
                                                size="sm"
                                                color="brown"
                                                step={1}
                                                min={0}
                                                max={23}/>
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>
                                    )}
                                />
                                <P>h</P>
                                <Field
                                    name="start_minute"
                                    render={({ field, form }) => (
                                        <FormControl>
                                            <NumberInput
                                                {...field}
                                                id="start_minute"
                                                size="sm"
                                                color="brown"
                                                step={5}
                                                min={0}
                                                max={55}
                                            >
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>
                                    )}
                                />
                                <P>m</P>
                            </HStack>
                            <Label>End Time</Label>
                            <HStack>
                                <Field
                                    name="end_hour"
                                    render={({ field, form }) => (
                                        <FormControl>
                                            <NumberInput
                                                {...field}
                                                id="end_hour"
                                                size="sm"
                                                color="brown"
                                                step={1}
                                                min={0}
                                                max={23}
                                            >
                                                <NumberInputField id="end_hour"
                                                size="sm"
                                                color="brown"
                                                step={1}
                                                min={0}
                                                max={23}/>
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>
                                    )}
                                />
                                <P>h</P>
                                <Field
                                    name="end_minute"
                                    render={({ field, form }) => (
                                        <FormControl>
                                            <NumberInput
                                                {...field}
                                                id="end_minute"
                                                size="sm"
                                                color="brown"
                                                step={5}
                                                min={0}
                                                max={55}
                                            >
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>
                                    )}
                                />
                                <P>m</P>
                            </HStack>
                            <Box/>
                            <PinkSubmitButton isLoading={props.isSubmitting} type="submit">
                                Submit
                            </PinkSubmitButton>
                        </SimpleGrid>
                    </Form>
                </Formik>
            </Grid>
        </Box>
    )
>>>>>>> 93663ba79c84ef0ee1b5b4324afad8717eb28e1b
}

export default CreateMeeting;
