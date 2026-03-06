import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="app-header">
            <Link to="/" className="app-header__logo">TimCooking</Link>
            <nav className="app-header__nav">
                <Link to="/">Accueil</Link>
                <Link to="/recipes">Recettes</Link>
            </nav>
        </header>
    );
}

export default Header;