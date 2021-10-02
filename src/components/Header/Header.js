import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo}/>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Review">Order Review</a>
                <a href="/inventory">Manage Invertory</a>
            </nav>
        </div>
    );
};

export default Header;