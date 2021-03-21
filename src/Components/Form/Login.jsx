import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import ShopIcon from '@material-ui/icons/Shop';
import SendIcon from '@material-ui/icons/Send';

/************* validation **************** */
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useAuth } from '../Auth/useAuth';

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
});

const Login = () => {
    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    const onSubmit = values => {
        handleSignIn(values.email, values.password)
    }
    const handleSignIn = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
                history.replace(from);
            })
    }
    const handleGoogleSignIn = () => {
        auth.signInWithGoogle()
            .then(res => {
                console.log(res);
                history.replace(from);
            })
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
                                name="email"
                                margin="normal"
                                fullWidth inputRef={register}
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
                            <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '01rem 0' }}> <SendIcon /> Sign in</Button>
                        </form>

                        <Link to="/Register" variant="body2">
                            Haven't any account? Register
                        </Link>
                        <Button onClick={handleGoogleSignIn} style={{ marginTop: '1rem', }} fullWidth variant="contained" color="primary"><ShopIcon /> Google</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;