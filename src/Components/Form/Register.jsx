import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Register = () => {
    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <form style={{marginTop:'2rem'}}>
                            <TextField type="name" fullWidth margin="normal" id="name" label="Name" variant="filled" />
                            <TextField type="email" fullWidth margin="normal" id="email" label="Email" variant="filled" />
                            <TextField type="password" fullWidth margin="normal" id="password" label="Password" variant="filled" />
                            <TextField type="password" fullWidth margin="normal" id="confirmPassword" label="confirm Password" variant="filled" />
                            <Button type="button" fullWidth variant="contained" color="secondary">Sign UP</Button>
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