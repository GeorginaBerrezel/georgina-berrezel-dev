// src/pages/Projects.js
import React from 'react';
//import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import kasaLogementImage from '../../assets/img/kasa-logement.png';
import lesPetitsPlats from '../../assets/img/les-petits-plats.png';

function Projects() {
    return (
     <div>
            <h2>My Projects</h2>
            <Card
                imagePath={kasaLogementImage}
                description="React project! Lorem ipsum dolor sit amet."
                iconPath="ri-reactjs-line"
            />
            <Card
                imagePath={lesPetitsPlats}
                description="Algorithm project! Lorem ipsum dolor sit amet."
                iconPath="ri-javascript-fill"
            />
     </div>
    );
}

export default Projects;
