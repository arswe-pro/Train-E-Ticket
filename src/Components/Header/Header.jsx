import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import useStyles from '../Style/Style';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

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
                        <Link to="/" href="#" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/Destination" href="#" className={classes.link}>
                            Destination
                        </Link>
                        <Link to="/Blog" href="#" className={classes.link}>
                            Blog
                        </Link>
                        <Link to="/Contact" href="#" className={classes.link}>
                            Contact
                        </Link>
                    </nav>
                    {
                        loggedInUser.name ?
                            <Link to="/Login" href="#" className={classes.link}>
                                <Button color="Secondary" variant="contained" > Sign Out </Button>
                            </Link>
                            :
                            <Link to="/Login" href="#" color="Secondary" variant="outlined" className={classes.link}>
                                <Button color="Secondary" variant="contained" > Login </Button>
                            </Link>
                    }

                    {
                        loggedInUser.name ?
                            <Link to="/Login" href="#" className={classes.link}>
                                <Button color="Secondary" variant="contained" > <PersonIcon /> {loggedInUser.name} </Button>
                            </Link>
                            :
                            <Link to="/Register" href="#" color="Secondary" variant="outlined" className={classes.link}>
                                <Button color="Secondary" variant="contained" > Sign Up </Button>
                            </Link>
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;