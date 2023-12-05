// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


function Header() {
    return (
        <header>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/home" className="nav-link">georgina-berrezel</Link></li>
                    <li className="nav-item"><Link to="/home" className="nav-link">_hello</Link></li>
                    <li className="nav-item"><Link to="/about-me" className="nav-link">_about-me</Link></li>
                    <li className="nav-item"><Link to="/projects" className="nav-link">_projects</Link></li>
                    <li id="_contact-me" className="nav-item"><Link to="/contact-me" className="nav-link">_contact-me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
