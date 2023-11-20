import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Button from './components/Buttons/Button';
import Projects from './pages/Projects/Projects';
import About from './pages/about-me/About-me';

import './styles/App.scss';

function App() {
    return (
    <Router>
            <div className="App">
                <Layout>
                    <main>
                        <Home />
                        <Routes>
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/about-me" element={<About />} />
                            {/*<Route path="/" element={<Button type="cta-default">Default button</Button>} />*/}
                        </Routes>
                    </main>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
