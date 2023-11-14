// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Button from './components/Buttons/Button';
import './styles/App.scss'; // Importe le fichier principal SCSS
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Card />
                <Card />
                {/* Ajoute autant de Cards que tu veux ici */}
            </main>
            <Button />
        </div>
    );
}

export default App;
