import { Button, Container, Grid, TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="xs">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <form noValidate autoComplete="off">
                            <TextField type="name" fullWidth margin="normal" id="name" label="Name" variant="filled" />
                            <TextField type="email" fullWidth margin="normal" id="email" label="Email" variant="filled" />
                            <TextareaAutosize aria-label="minimum height" rowsMin={10} variant="contained" placeholder="Comments" style={{ width: '100%' }} />
                            <Button type="button" fullWidth variant="contained" color="secondary">Send</Button>
                        </form>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};
export default Contact;