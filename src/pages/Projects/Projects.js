// src/pages/Projects.js
import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import kasaLogementImage from '../../assets/img/kasa-logement.png';
import lesPetitsPlats from '../../assets/img/les-petits-plats.png';
import ohMyFood from '../../assets/img/oh-my-food.png';
import gameOn from '../../assets/img/game-on.png';
import Tabs from "../../components/Tabs/Tabs";
import './Projects.scss';

function Projects() {
    const [activeTab, setActiveTab] = useState('all');
    const [tags, setTags] = useState([]);

    const tabs = [
        { id: 'all', title: 'All' },
        { id: 'react', title: 'React' },
        { id: 'js', title: 'Js' },
        { id: 'css', title: 'Css' },
        { id: 'html', title: 'Html' },
    ];

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setTags((prevTags) => [...prevTags, tabId]);
    };

    const generateContent = () => {
        switch (activeTab) {
            case 'all':
                return (
                    <div className="card-global-style">
                        <Card
                            title="Project 1"
                            titleExtend="_react-app"
                            imagePath={kasaLogementImage}
                            description="React project! Lorem ipsum dolor sit amet."
                            iconPath="ri-reactjs-line"
                        />
                        <Card
                            title="Project 2"
                            titleExtend="_js-algorithm"
                            imagePath={lesPetitsPlats}
                            description="Algorithm project! Lorem ipsum dolor sit amet."
                            iconPath="ri-javascript-fill"
                        />
                        <Card
                            title="Project 3"
                            titleExtend="_scss-animation"
                            imagePath={ohMyFood}
                            description="Css project with some animation"
                            iconPath="ri-css3-fill"
                        />
                        <Card
                            title="Project 4"
                            titleExtend="_scss-animation"
                            imagePath={gameOn}
                            description="Css project with some animation"
                            iconPath="ri-css3-fill"
                        />                    </div>
                );
            case 'react':
                return (
                    <div className="card-global-style">
                        <Card
                            title="Project 1"
                            titleExtend="_react-app"
                            imagePath={kasaLogementImage}
                            description="React project! Lorem ipsum dolor sit amet."
                            iconPath="ri-reactjs-line"
                        />
                        {/* Ajoutez d'autres cartes pour l'onglet React si nécessaire */}
                    </div>
                );
            case 'js':
                return (
                    <div className="card-global-style">
                        <Card
                            title="Project 2"
                            titleExtend="_js-algorithm"
                            imagePath={lesPetitsPlats}
                            description="Algorithm project! Lorem ipsum dolor sit amet."
                            iconPath="ri-javascript-fill"
                        />
                        {/* Ajoutez d'autres cartes pour l'onglet JS si nécessaire */}
                    </div>
                );
            case 'css':
                return (
                    <div className="card-global-style">
                        <Card
                            title="Project 3"
                            titleExtend="_js-basic"
                            imagePath={ohMyFood}
                            description="First steps in Javascript"
                            iconPath="ri-javascript-fill"
                        />
                    </div>
                );
            case 'html':
                return (
                    <div className="card-global-style">
                        <Card
                            title="Project 4"
                            titleExtend="_scss-animation"
                            imagePath={gameOn}
                            description="Css project with some animation"
                            iconPath="ri-css3-fill"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="about-container">
            <div className="sidebar">
                <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
            <div className="content-tag">
                <div className="tags">
                    {tags.map((tag) => (
                        <div key={tag} className="tag">
                            {tag}
                        </div>
                    ))}
                </div>
                {generateContent()}
            </div>
        </div>
    );
}

export default Projects;
