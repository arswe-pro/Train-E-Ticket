import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../Style/Style';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Item = ({ item }) => {
    const classes = useStyles();
    const { title, price } = item
    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className={classes.paper}>
                    <Typography color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Button className={classes.btn} size="small" variant="contained" >Book Now</Button>
                    <Typography color="textSecondary" gutterBottom>
                        ${price}
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
};

export default Item;