import { Button, Container, Grid, TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';

import SendIcon from '@material-ui/icons/Send';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';


const schema = yup.object().shape({
    name: yup.string().required().min(6),
    email: yup.string().required().email(),
    textArea: yup.string().required().min(20),
});

const Contact = () => {

    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema)
    })
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <Header />
            <Container>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>
                            <TextField
                                type="text"
                                name="name"
                                margin="normal"
                                fullWidth inputRef={register}
                                label="Name"
                                variant="filled"
                                autoComplete="off"
                                error={Boolean(errors.name)}
                                helperText={errors.name?.message}
                            />
                            <TextField
                                type="text"
                                name="email"
                                margin="normal"
                                fullWidth
                                inputRef={register}
                                label="Email"
                                variant="filled"
                                autoComplete="off"
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                            />

                            <TextareaAutosize
                                type="text"
                                name="textArea"
                                rowsMin={15}
                                variant="contained"
                                placeholder="Comments"
                                style={{ width: '100%', backgroundColor: '#ddd' }}
                            />
                            <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '01rem 0' }}> <SendIcon /> Sign in</Button>
                        </form>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};
export default Contact;