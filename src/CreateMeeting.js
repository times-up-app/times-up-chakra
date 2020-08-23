
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

class CreateMeeting extends Component{
    constructor(props) {
        super(props)
        this.state = {
            startHour: 12,
            startMinute: 30,
            endHour: 13,
            endMinute: 30,
        };
        console.log('here', this.state);
    }

    async submitForm(event,state) {
        console.log(event);
        console.log(state);

        // POST request using fetch with async/await
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({meeting_name: event.name, start_hour: this.state.startHour, start_min: this.state.startMinute,
                              end_hour: this.state.endHour, end_min: this.state.endMinute})
        };
      const response = await fetch(' https://sabitatasnim.api.stdlib.com/times-up@dev/meeting-software-airtable/', requestOptions);
      const data = await response.json();
      console.log("IhateReact")
    }

    render() {
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
                    <Formik
                        initialValues={{name: ''}}
                        validate={
                            values => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = 'Required';
                                }
                                return errors;
                        }}
                        onSubmit={(event) => this.submitForm(event, this.state)}
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
                                                    defaultValue={12}
                                                    max={23}
                                                    onChange={(event) => this.setState({startHour: Number(event)})}
                                                >
                                                    <NumberInputField
                                                    size="sm"
                                                    color="brown"/>
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
                                                    defaultValue={30}
                                                    max={55}
                                                    onChange={(event) => this.setState({startMinute: Number(event)})}
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
                                                    defaultValue={13}
                                                    max={23}
                                                    onChange={(event) => this.setState({endHour: Number(event)})}
                                                >
                                                    <NumberInputField
                                                    size="sm"
                                                    color="brown"/>
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
                                                    defaultValue={30}
                                                    max={55}
                                                    onChange={(event) => this.setState({endMinute: Number(event)})}
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
                                <PinkSubmitButton isLoading={this.props.isSubmitting} type="submit">
                                    Submit
                                </PinkSubmitButton>
                            </SimpleGrid>
                        </Form>
                    </Formik>
                </Grid>
            </Box>
        )
    }
}

export default CreateMeeting;
