import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../Style/Style';


const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Train-E-Ticketing.com
                    </Typography>
                    <nav>
                        <Link to="/" variant="button" color="textPrimary" href="#" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/Destination" variant="button" color="textPrimary" href="#" className={classes.link}>
                            Destination
                        </Link>
                        <Link to="/Blog" variant="button" color="textPrimary" href="#" className={classes.link}>
                            Blog
                        </Link>
                        <Link to="/Contact" variant="button" color="textPrimary" href="#" className={classes.link}>
                            Contact
                        </Link>
                    </nav>
                    <Link to="/Login" href="#" color="primary" variant="outlined" className={classes.link}>
                        Login
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;