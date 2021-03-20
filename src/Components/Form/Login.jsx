import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
/*************** Auth End **************** */
import { Button, Container, Grid, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShopIcon from '@material-ui/icons/Shop';
import SendIcon from '@material-ui/icons/Send';
import GitHubIcon from '@material-ui/icons/GitHub';
/************* validation **************** */
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
});
/************* validation End**************** */

const Login = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    /**** Validation **** */
    const { register, handleSubmit, errors } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;
                const token = credential.accessToken;
                const { displayName, email } = result.user;
                const loggedInUser = { name: displayName, email }
                setLoggedInUser(loggedInUser)
                history.replace(from);
                console.log(token);
            }).catch((error) => {
                const errorCode = error.code;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, email, credential);
            });
    }

    var githubProvider = new firebase.auth.GithubAuthProvider();
    const githubSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(githubProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email } = result.user;
                const loggedInUser = { name: displayName, email }
                setLoggedInUser(loggedInUser)
                history.replace(from);
                console.log(token);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, email, errorMessage, credential);
            });
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
                            Already have an account? Sign in
                        </Link>
                        <Button onClick={googleSignIn} style={{ margin: '0.5rem 0', }} type="submit" fullWidth variant="contained" color="primary"><ShopIcon /> Google</Button>
                        <Button onClick={githubSignIn} type="submit" fullWidth variant="contained" color="primary"> <GitHubIcon /> Github</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;