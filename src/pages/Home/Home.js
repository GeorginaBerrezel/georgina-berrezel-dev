import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Home.scss';

function Home() {
    return (
            <div className="container-home">
                <div className="content-home">
                    <div className="content-home--up">
                        <p className="text-home">Hi all. I am</p>
                        <h1 className="title-home">Georgina Berrezel</h1>
                        <h2 className="subtitle-home">> Front-end developer</h2>
                    </div>
                    <div className="content-home--down">
                        <p className="ghost-home">"//"Enjoy visiting my projects pages</p>
                        <p className="ghost-home">"//"you can also see it on my Github page</p>
                        <p className="link-home">
                            <span className="purple">const</span> <span className="green">githubLink</span> = <a href="https://github.com/GeorginaBerrezel" className="pink" target="_blank" rel="noopener noreferrer">“https://github.com/GeorginaBerrezel”</a>;
                        </p>
                    </div>

                </div>
            </div>
    );
}

export default Home;
