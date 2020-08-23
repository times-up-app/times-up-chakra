
import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Box,
    Grid,
    Input,
    HStack,
    SimpleGrid,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/core';
import { PinkSubmitButton, Label, H2, P, gradient } from './utils';
import NavBar from './NavBar';
import { Formik, Field, Form } from 'formik';

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
                minH="100vh"
                pt={110}
                direction="column"
                align="center"
                justify="center"
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
}

export default CreateMeeting;
