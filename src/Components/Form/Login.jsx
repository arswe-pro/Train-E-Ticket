import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {
    return (
        <>
            <Header />
            <Container maxWidth="xs">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <form noValidate autoComplete="off">
                            <TextField type="email" fullWidth margin="normal" id="email" label="Email" variant="filled" />
                            <TextField type="password" fullWidth margin="normal" id="password" label="Password" variant="filled" />
                            <Button type="button" fullWidth variant="contained" color="secondary">Login</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Link to="/Register" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button type="submit" fullWidth variant="contained">Google</Button>
                        <Button style={{ margin: '5px 0', }} type="submit" fullWidth variant="contained">Facebook</Button>
                        <Button type="submit" fullWidth variant="contained">Github</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;