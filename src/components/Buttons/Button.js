// src/components/Button/Button.js
import React from 'react';
import './Button.scss';

function Button({ type, children }) {
    // Utilisez la classe spécifique passée en tant que "type" pour déterminer le style du bouton
    const buttonClass = `custom-button ${type}`;

    return <button className={buttonClass}>{children}</button>;
}

export default Button;
