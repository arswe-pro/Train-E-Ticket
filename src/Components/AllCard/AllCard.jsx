import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import FakeDate from '../../FakeData/FakeData.json'
import useStyles from '../Style/Style';
import loader from '../../images/loader.gif'

const AllCard = () => {
    const classes = useStyles();
    const [items, setItems] = useState(FakeDate)
    useEffect(() => {
        setItems(items)
    }, [items])

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} className={classes.mt}>
                {items.length === 0 && <img src={loader.gif} alt="" />}
                {items && items.map(item => <Item item={item} key={item.id} />)}
            </Grid>
        </Container>
    );
};

export default AllCard;