
import React from 'react';
import {
    FormControl,
    FormErrorMessage,
    Box,
    Grid,
    Input,
    SimpleGrid
  } from '@chakra-ui/core';
import { PinkSubmitButton, Label, H2, gradient } from './utils';
import NavBar from './NavBar';
import { Formik, Field, Form } from 'formik';
import { withRouter } from 'react-router-dom';

function JoinMeeting(props) {
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
                    initialValues={{ id: ''}}
                    validate={
                        values => {
                            const errors = {};
                            if (!values.id) {
                                errors.id = 'Required';
                            } else if (isNaN(Number(values.id))) {
                                errors.id = 'Must be an integer';
                            }
                            return errors;
                    }}
                    onSubmit={(values, actions) => {
                        // TODO: replace with Redirect?
                        props.history.push(`/meeting-${Number(values.id)}`);
                    }}
                >
                    <Form>
                        <H2>Joint Existing Meeting</H2>
                        <Box h="20px"/>
                        <SimpleGrid columns={2} spacing={10} w="400px">
                            <Label>Meeting ID</Label>
                            <Field
                                name="id"
                                render={({ field, form }) => (
                                    <FormControl isInvalid={form.errors.id && form.touched.id}>
                                        <Input
                                            {...field}
                                            id="id"
                                            size="sm"
                                            color="brown"
                                            isInvalid={form.errors.id && form.touched.id}
                                            errorBorderColor="red"
                                        />
                                        <FormErrorMessage fontWeight="medium" color="red">
                                            {form.errors.id}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            />
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

export default withRouter(JoinMeeting);
