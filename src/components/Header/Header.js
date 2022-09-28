import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-top'>
                <img src={logo} alt="" className='logo'/>
                <h1 className='header-title'>The Royal Arena</h1>
            </div>
            <h3 className='header-subtitle'>Select sports's that you want to play!</h3>
        </div>
    );
};

export default Header;