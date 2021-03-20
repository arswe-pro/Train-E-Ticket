// import firebase from "firebase/app";

import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';


const schema = yup.object().shape({
    name: yup.string().required().min(6),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], ''),
});

const Register = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const onSubmit = values => {
        // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        //     .then((userCredential) => {
        //     })
        //     .catch((error) => {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         console.log(errorCode, errorMessage);
        //     });
    }

    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>
                            <TextField
                                type="text"
                                name="name"
                                fullWidth
                                margin="normal"
                                id="name"
                                label="Name"
                                variant="filled"
                                inputRef={register}
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
                            <TextField
                                type="text"
                                name="password"
                                margin="normal"
                                fullWidth inputRef={register}
                                label="Password"
                                variant="filled"
                                autoComplete="off"
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                            />

                            <TextField
                                type="text"
                                name="confirmPassword"
                                margin="normal"
                                fullWidth inputRef={register}
                                label="Confirm Password"
                                variant="filled"
                                autoComplete="off"
                                error={Boolean(errors.confirmPassword)}
                                helperText={errors.confirmPassword?.message}
                            />
                            <Button type="submit" fullWidth variant="contained" color="secondary">Sign UP</Button>
                        </form>
                        <Link to="/Login" variant="body2">
                            You have a account? Login
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;