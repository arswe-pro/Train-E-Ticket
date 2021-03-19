import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
});

const Login = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema)
    })
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={4}>

                        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>

                            <TextField type="text" name="email" margin="normal" fullWidth inputRef={register} label="Email" variant="filled" autoComplete="off" />
                            <p>{errors.email?.message}</p>
                            <TextField type="text" name="password" margin="normal" fullWidth inputRef={register} label="Password" variant="filled" autoComplete="off" />
                            <p>{errors.password?.message}</p>

                            <Button type="submit" fullWidth variant="contained" > Sign in</Button>

                        </form>

                        <Link to="/Register" variant="body2">
                            Already have an account? Sign in
                        </Link>
                        <Button style={{ marginTop: '1rem', }} type="submit" fullWidth variant="contained">Google</Button>
                        <Button style={{ margin: '5px 0', }} type="submit" fullWidth variant="contained">Facebook</Button>
                        <Button type="submit" fullWidth variant="contained">Github</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;