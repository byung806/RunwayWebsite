import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={require('@/public/icon.png')} alt="Runway Logo" className="logo" />
                <span className="brand-name">Runway</span>
            </div>
            <div className="header-right">
                <a href="/about-us" className="header-link">About Us</a>
                <a href="/our-mission" className="header-link">Our Mission</a>
                <a href="/contact-us" className="header-link">Contact Us</a>
            </div>
        </header>
    );
}

export default Header;