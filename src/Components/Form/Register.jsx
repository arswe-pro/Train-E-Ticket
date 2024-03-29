// import firebase from "firebase/app";

import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import account from '../../images/account.svg'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useAuth } from '../Auth/useAuth';


const schema = yup.object().shape({
    name: yup.string().required().min(6),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], ''),
});

const Register = () => {
    const auth = useAuth();
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const onSubmit = values => {
        if (values.name && values.email && values.password && values.confirmPassword) {
            const registerStatus = auth.register(values.name, values.email, values.password);
            if(registerStatus===true){
                console.log("success");
            }
        }
    }

    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <img src={account} width="100%" height="150px" alt="" />
                        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>
                            <TextField
                                type="text"
                                name="name"
                                fullWidth
                                margin="dense"
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
                                margin="dense"
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
                                margin="dense"
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
                                margin="dense"
                                fullWidth inputRef={register}
                                label="Confirm Password"
                                variant="filled"
                                autoComplete="off"
                                error={Boolean(errors.confirmPassword)}
                                helperText={errors.confirmPassword?.message}
                            />
                            <Button type="submit" fullWidth variant="contained" color="secondary" style={{ marginTop: '1rem' }}>Sign UP</Button>
                        </form>
                        <Link to="/Login" variant="body2">
                            You have a account? Sign In
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;