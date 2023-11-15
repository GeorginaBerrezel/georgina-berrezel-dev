// src/components/Header/Header.js
import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#georgina-berrezel" className="nav-link">georgina-berrezel</a></li>
                    <li className="nav-item"><a href="#_hello" className="nav-link">_hello</a></li>
                    <li className="nav-item"><a href="#_about-me" className="nav-link">_about Me</a></li>
                    <li className="nav-item"><a href="#_projects" className="nav-link">_projects</a></li>
                    <li id="_contact-me" className="nav-item"><a href="#_contact-me" className="nav-link">_contact-me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
