import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../Style/Style';

const Item = ({ item }) => {
    const classes = useStyles();
    const { id, title, price } = item
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>
                    <Typography color="textSecondary" gutterBottom>
                        {title}
                    </Typography>

                    <Link to={"/Detail/" + id} className={classes.link}>  <Button className={classes.btn} size="small" variant="contained" >Book Now</Button> </Link>

                    <Typography color="textSecondary" gutterBottom>
                        ${price}
                    </Typography>
                    
                </Paper>
            </Grid>
        </>
    );
};

export default Item;