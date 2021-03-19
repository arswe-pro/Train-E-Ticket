import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';
import ResultMap from './ResultMap/ResultMap';
import useStyles from '../Style/Style';
import RoadMap from './RoadMap/RoadMap';

const SearchResult = () => {
    const classes = useStyles();
    return (

        <div>
            <Header />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} md={4} lg={3}>
                        <Paper className={classes.paper}>
                            <RoadMap />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={7} md={8} lg={9}>
                        <Paper className={classes.paper}>
                            <ResultMap />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default SearchResult;