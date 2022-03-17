import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='text-success mt-5'>
            <h1>Welcome to my Rest Countries</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header; 