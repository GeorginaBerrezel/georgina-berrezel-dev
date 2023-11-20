// src/App.js

import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Button from './components/Buttons/Button';
import Footer from './components/Footer/Footer';
import kasaLogementImage from './assets/img/kasa-logement.png';
import lesPetitsPlats from './assets/img/les-petits-plats.png';
import './styles/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Card
                    imagePath={kasaLogementImage}
                    description="React project ! Lorem ipsum dolor sit amet."
                    iconPath="ri-reactjs-line"
                />
                <Card
                    imagePath={lesPetitsPlats}
                    description="Alrorithmy project ! Lorem ipsum dolor sit amet."
                    iconPath="ri-javascript-fill"
                />
                {/* Ajoutez autant de Cards que vous voulez ici */}
            </main>
            <Button type="cta-default">Default button</Button>
            <Button type="cta-primary">Primary button</Button>
            <Button type="cta-ghost">Ghost button</Button>

            <Footer />
        </div>
    );
}

export default App;
