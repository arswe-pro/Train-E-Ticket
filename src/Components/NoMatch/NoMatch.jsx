import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../Style/Style'


const NoMatch = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="xs" className={classes.NoMatch}>
            <Typography variant="h3" component="h3">
                404 - No Match
            </Typography>
            <br />
            <Link to="/" variant="button" color="secondary" href="#" style={{ backgroundColor: 'gray', color: '#fff', padding: '1rem 2rem ' }}>
                Home
            </Link>
        </Container>
    );
};

export default NoMatch;