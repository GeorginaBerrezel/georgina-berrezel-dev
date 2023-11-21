// src/components/Card/Card.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import './Card.scss';

function Card({ title, titleExtend, imagePath, description, iconPath }) {
    return (
        <div>
            <div className="card-title">
                {title && (
                    <p>{title}{String.fromCharCode(160)}</p>
                )}
                <p style={{ color: '#607B96', fontWeight:'100' }}> // {titleExtend}</p>
            </div>

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
                    <div className="card-button">
                        <Button type="cta-default">view-project</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string, // Nouvelle propriété pour le titre
    titleExtend: PropTypes.string, // Nouvelle propriété pour le titre
    imagePath: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconPath: PropTypes.string, // Propriété optionnelle pour l'icône
};

export default Card;
