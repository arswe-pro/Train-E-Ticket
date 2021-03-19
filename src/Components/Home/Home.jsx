import React from 'react';
import AllCard from '../AllCard/AllCard';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useStyles from '../Style/Style';

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.homeBg}>
                <Header />
                <AllCard />
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Home;