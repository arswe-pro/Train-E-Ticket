import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';
import useStyles from '../Style/Style';

const Destination = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <Container >
                <Typography variant="h3" className={classes.textAlign}>
                    Coming Soon
             </Typography>
            </Container>
        </div>
    );
};

export default Destination;