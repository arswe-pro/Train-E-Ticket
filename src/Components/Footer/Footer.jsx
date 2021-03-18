import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={['container', classes.container].join(' ')}>
                <div>Copyright &copy;2020. Built with <span className="red">&hearts;</span> by  Create React App</div>
            </div>
        </footer>
    );
};

export default Footer;