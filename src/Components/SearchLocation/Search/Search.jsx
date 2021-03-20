import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import DistrictDate from '../../../FakeData/DistrictData.json'

const Search = () => {

    const [districts, setDistricts] = useState(DistrictDate)
    console.log(districts);

    useEffect(() => {
        setDistricts(districts)
    }, [districts])

    const [pinkFrom, setPinkFrom] = React.useState('');
    const [pinkTo, setPinkTo] = React.useState('');

    const handlePickFrom = (event) => {
        setPinkFrom(event.target.value);
    };

    const handlePinkTo = (event) => {
        setPinkTo(event.target.value);
    };

    console.log(pinkFrom);
    console.log(pinkTo);


    return (
        <div>
            <form style={{ marginTop: '2rem' }}>

                <TextField
                    id="district"
                    select
                    label="Select"
                    fullWidth
                    margin="normal"
                    value={pinkFrom}
                    onChange={handlePickFrom}
                >
                    {districts.map((district) => (
                        <MenuItem key={district.id} value={district.district}>
                            {district.district}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="district"
                    select
                    label="Select"
                    margin="normal"
                    value={pinkTo}
                    fullWidth
                    onChange={handlePinkTo}
                >
                    {districts.map((district) => (
                        <MenuItem key={district.id} value={district.district}>
                            {district.district}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    type="date"
                    name="password"
                    margin="normal"
                    fullWidth
                    variant="filled"
                    autoComplete="off"
                />
                <Link to={"/SearchResult/"}>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '01rem 0' }}><SearchIcon /> Search</Button>
                </Link>

            </form>
        </div>
    );
};

export default Search;