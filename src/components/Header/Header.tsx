import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className = {s.header}>
            <img src="https://heilpraktiker-erftstadt.de/wp-content/uploads/2013/03/logo-1446293_1920-300x236.png" />
        </header>
    );
}

export default Header;