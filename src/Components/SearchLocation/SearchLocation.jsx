import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import useStyles from '../Style/Style'
import Mapping from './Mapping/Mapping';

import Search from './Search/Search';

const SearchLocation = () => {
    const classes = useStyles();
    let { title } = useParams();
    console.log(title);
    return (
        <div className={classes.searchLocationBg}>
            <Header />
            <Container>
                <Grid container spacing={3} className={classes.mt}>
                    <Grid item xs={12} sm={12} md={5} lg={4}>

                        <Paper className={classes.paper}>
                            <Typography variant="h5" component="h2">
                                Your Choice: {title}
                            </Typography>
                            <Search title={title}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={8}>
                        <Paper className={classes.paper}>
                            <Mapping />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SearchLocation;