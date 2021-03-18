import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Register = () => {
    return (
        <>
            <Header />
            <Container maxWidth="xs">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <form noValidate autoComplete="off">
                            <TextField type="name" fullWidth margin="normal" id="name" label="Name" variant="filled" />
                            <TextField type="email" fullWidth margin="normal" id="email" label="Email" variant="filled" />
                            <TextField type="password" fullWidth margin="normal" id="password" label="Password" variant="filled" />
                            <TextField type="password" fullWidth margin="normal" id="confirmPassword" label="confirm Password" variant="filled" />
                            <Button type="button" fullWidth variant="contained" color="secondary">Registration</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
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