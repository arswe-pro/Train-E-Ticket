import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/useAuth';
import useStyles from '../Style/Style';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
    const auth = useAuth();
    const handleSignOut = () => {
        auth.signOut()
            .then(res => {
                window.location.pathname = '/';
            })
    }
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        <Link to="/" className={classes.link} >
                            Train-E-Ticketing.com
                    </Link>
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



                    {
                        auth.user ?

                            <Button variant="contained" ><PersonIcon />  {auth.user.name} </Button>
                            :
                            <Link to="/Register" href="#" color="primary" variant="outlined" className={classes.link}>
                                <Button variant="contained" > Sign Up </Button>
                            </Link>
                    }

                    {
                        auth.user ?
                            <Link to="/Login" href="#" color="primary" variant="outlined" className={classes.link} onClick={handleSignOut}>
                                <Button variant="contained" color="secondary"> Sign Out </Button>
                            </Link>
                            :
                            <Link to="/Login" href="#" color="primary" variant="outlined" className={classes.link}>
                                <Button variant="contained" color="secondary"> Login </Button>
                            </Link>
                    }


                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;