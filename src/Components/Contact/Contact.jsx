import { Button, Container, Grid, TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';

const Contact = () => {
    return (
        <div>
            <Header />
            <Container>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <form style={{marginTop:'2rem'}}>
                            <TextField type="name" fullWidth margin="normal" id="name" label="Name" variant="filled" />
                            <TextField type="email" fullWidth margin="normal" id="email" label="Email" variant="filled" />
                            <TextareaAutosize rowsMin={15} variant="contained" placeholder="Comments" style={{ width: '100%', backgroundColor: '#ddd' }} />
                            <Button type="button" fullWidth variant="contained" color="secondary">Send</Button>
                        </form>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};
export default Contact;