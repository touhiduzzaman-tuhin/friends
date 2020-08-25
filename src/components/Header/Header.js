import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div style={{ textAlign: 'center'}}>
                <img style={{height: '50px'}} src={logo} alt=""/>
            </div>
            
            <nav>
                <a href="/home">Home</a>
                <a href="/pages">Pages</a>
                <a href="/message">Message</a>
                <a href="/about">About Me</a>
                <a href="/settings">Settings</a>
            </nav>
        </div>
    );
};

export default Header;