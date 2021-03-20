import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import DistrictDate from '../../../FakeData/DistrictData.json'

const Search = ({ title }) => {

    const [districts, setDistricts] = useState(DistrictDate)
    console.log(districts);

    useEffect(() => {
        setDistricts(districts)
    }, [districts])

    const [pickFrom, setPickFrom] = useState('');
    const [pickTo, setPickTo] = useState('');
    const [date, setDate] = useState('');

    return (
        <div>
            <form style={{ marginTop: '2rem' }}>

                <TextField
                    id="district"
                    select
                    label="Select"
                    fullWidth
                    margin="normal"
                    value={pickFrom}
                    onChange={(event) => setPickFrom(event.target.value)}
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
                    value={pickTo}
                    fullWidth
                    onChange={(event) => setPickTo(event.target.value)}
                >
                    {districts.map((district) => (
                        <MenuItem key={district.id} value={district.district}>
                            {district.district}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    type="date"
                    name="date"
                    margin="normal"
                    fullWidth
                    variant="filled"
                    autoComplete="off"
                    onChange={(event) => setDate(event.target.value)}
                />
                <Link to={`/SearchResult/${title}/${pickFrom}/${pickTo}/${date}`}>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '01rem 0' }}><SearchIcon /> Search</Button>
                </Link>

            </form>
        </div>
    );
};

export default Search;