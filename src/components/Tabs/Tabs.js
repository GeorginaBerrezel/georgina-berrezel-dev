// src/components/Tabs/Tabs.js
import React from 'react';
import './Tabs.scss';
function Tabs({ tabs, activeTab, onTabChange, onTagClose }) {
    return (
        <div className="tabs">
            {tabs.map(tab => (
                <div key={tab.id} className={`tab ${activeTab === tab.id ? 'active' : ''}`}>
                    <span onClick={() => onTabChange(tab.id)}><i className="ri-folder-3-fill"></i>{tab.title}</span>
                </div>
            ))}
        </div>
    );
}

export default Tabs;
