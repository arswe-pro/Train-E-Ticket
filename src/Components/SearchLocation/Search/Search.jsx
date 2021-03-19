import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div>
            <form style={{ marginTop: '2rem' }}>
                <TextField
                    type="text"
                    name="email"
                    margin="normal"
                    fullWidth
                    label="Pink From"
                    variant="filled"
                    autoComplete="off"
                />
                <TextField
                    type="text"
                    name="password"
                    margin="normal"
                    fullWidth
                    label="Pink To"
                    variant="filled"
                    autoComplete="off"
                />
                <Link to={"/SearchResult"}> <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '01rem 0' }}> Search</Button></Link>

            </form>
        </div>
    );
};

export default Search;