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
                        <a href="lienLinkedIn" className="footer-icon-link"><i className="ri-linkedin-box-fill"></i></a>
                    </li>
                    <li className="footer-item">
                        <a href="lienInstagram" className="footer-icon-link"><i className="ri-instagram-fill"></i></a>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-item">
                        <p>@GeorginaBerrezel</p>
                        <a href="lienGitHub" className="footer-icon-link"><i className="ri-github-fill"></i></a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
 export default Footer;