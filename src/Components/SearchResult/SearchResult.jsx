import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';
import ResultMap from './ResultMap/ResultMap';
import useStyles from '../Style/Style';
import SearchDetails from './RoadMap/SearchDetails';
import { useParams } from 'react-router';


const SearchResult = () => {
    const searchResult = useParams();
    const classes = useStyles();
    return (
        <div className={classes.searchResultBg}>
            <Header />
            <Container>
                <Grid container spacing={3} className={classes.mt}>
                    <Grid item xs={12} sm={12} md={5} lg={4}>
                        <Paper className={classes.paper}>
                            <SearchDetails searchResult={searchResult} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={8}>
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