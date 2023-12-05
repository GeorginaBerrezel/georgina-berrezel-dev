import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
// import Button from './components/Buttons/Button';
import Projects from './pages/Projects/Projects';
import About from './pages/about-me/About-me';
import ContactMe from "./pages/Contact-me/Contact-me";

import './styles/App.scss';

function App() {
    return (
    <Router>
            <div className="App">
                <Layout>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} /> {/* uniquement à la racine */}
                            <Route path="/home" element={<Home />} /> {/* Sur le logo et l'onglet hello */}
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/about-me" element={<About />} />
                            <Route path="/contact-me" element={<ContactMe />} />
                            {/*<Route path="/" element={<Button type="cta-default">Default button</Button>} />*/}
                        </Routes>
                    </main>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
