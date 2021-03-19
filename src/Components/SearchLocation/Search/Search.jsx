import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {

    return (
        <div>
            <form style={{ marginTop: '2rem' }}>

                <TextField
                    type="date"
                    name="password"
                    margin="normal"
                    fullWidth
                    variant="filled"
                    autoComplete="off"
                />
                <Link to={"/SearchResult"}>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '01rem 0' }}><SearchIcon /> Search</Button>
                </Link>

            </form>
        </div>
    );
};

export default Search;