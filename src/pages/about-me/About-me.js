// src/pages/About.js
import React, { useState } from 'react';

import Bio from '../../components/Bio/Bio';
import Interests from '../../components/Interests/Interests';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';
import Tabs from "../../components/Tabs/Tabs";
import './About-me.scss';

function About() {
    const [activeTab, setActiveTab] = useState('bio');
    const [tags, setTags] = useState([]); // Ajoute un état pour stocker les tags

    const tabs = [
        { id: 'bio', title: 'Bio' },
        { id: 'interests', title: 'Interests' },
        { id: 'education', title: 'Education' },
        { id: 'contact', title: 'Contact' },
    ];

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        // Ajoute le tag à la liste des tags
        setTags((prevTags) => [...prevTags, tabId]);
    };

    return (
        <div className="about-container">

            <div className="sidebar">
                <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
            <div className="content">
                <div className="tags">
                    {tags.map((tag) => (
                        <div key={tag} className="tag">
                            {tag}
                            {/* Ajoute ici le code pour le bouton de suppression du tag */}
                        </div>
                    ))}
                </div>
                {activeTab === 'bio' && <Bio />}
                {activeTab === 'interests' && <Interests />}
                {activeTab === 'education' && <Education />}
                {activeTab === 'contact' && <Contact />}
            </div>
        </div>
    );
}

export default About;
