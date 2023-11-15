// src/components/Card/Card.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import './Card.scss';

function Card({ imagePath, description, iconPath }) {
    return (
        <div className="card">
            <div className="card-image">
                <img
                    src={imagePath}
                    alt="Project"
                    className="card-image-background"
                />
                <div className="card-image-icon">
                {iconPath && (
                    <i className={iconPath} aria-hidden="true"></i>
                )}
                </div>
            </div>
            <div className="card-text">
                <p style={{ color: '#607B96' }}>{description}</p>
                <Button type="cta-default">Voir plus</Button>
            </div>
        </div>
    );
}

Card.propTypes = {
    imagePath: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconPath: PropTypes.string, // Propriété optionnelle pour l'icône
};

export default Card;
