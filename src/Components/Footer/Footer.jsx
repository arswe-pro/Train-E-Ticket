import { Card } from '@material-ui/core';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Card style={{ padding: '1rem 0', textAlign: 'center' }}>
                <div>Copyright &copy;2021. Built with <span> &hearts; Abdur rahman</span> by  Create Booking App</div>
            </Card>
        </footer>
    );
};

export default Footer;