import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import FakeData from '../../../FakeData/FakeData.json'

const SearchDetails = ({ searchResult }) => {

    const { title, pickFrom, pickTo, date } = searchResult;
    // console.log(pickFrom,pickTo);

    const [seat, setSeat] = useState()

    useEffect(() => {
        setSeat(FakeData.find(item => item.title === title))
    }, [title])
    return (
        <div>

            <Box bgcolor="info.main" color="primary.contrastText">
                <Typography variant="h4">
                    {pickFrom}
                </Typography>

                <Typography variant="h4">
                    ||
                </Typography>

                <Typography variant="h4">
                    {pickTo}
                </Typography>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell> <img src={seat && seat.img} width="50" alt="" /> </TableCell>
                        <TableCell> {title}</TableCell>
                        <TableCell> {seat && seat.price}</TableCell>
                        <TableCell> {date}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default SearchDetails;