// src/components/Footer/Footer.js
import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <nav>
                <ul className="footer-list">
                    <li className="footer-item">
                        <p>find me in:</p>
                    </li>
                    <li className="footer-item">
                        <a href="https://www.linkedin.com/in/georgina-berrezel-81b8a192/" className="footer-icon-link" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-box-fill"></i></a>
                    </li>
                    <li className="footer-item">
                        <a href="https://instagram.com/georgi___smith?utm_source=qr" className="footer-icon-link" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill"></i></a>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="https://github.com/GeorginaBerrezel" className="footer-icon-link" target="_blank" rel="noopener noreferrer">@GeorginaBerrezel<i className="ri-github-fill"></i></a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
 export default Footer;