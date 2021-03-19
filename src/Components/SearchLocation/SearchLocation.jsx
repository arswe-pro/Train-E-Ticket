import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import useStyles from '../Style/Style'
import Map from './Map/Map';
import Search from './Search/Search';

const SearchLocation = () => {
    const classes = useStyles();
    let { id } = useParams();
    console.log(id);
    return (
        <div className={classes.searchLocationBg}>
            <Header />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} md={4} lg={3}>
                        <Paper className={classes.paper}>
                            <Search />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={7} md={8} lg={9}>
                        <Paper className={classes.paper}>
                            <Map />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SearchLocation;