import React from 'react';
import { ReactComponent as InfoIcon } from '../assets/information-button.svg';

function Header() {
    return (
        <header className="header__block">
            <p className="logo__text">ЛОГОТИП</p>
            <InfoIcon />
        </header>
    )
}

export default Header;
