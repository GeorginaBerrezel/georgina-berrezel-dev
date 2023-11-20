// src/components/Bio/Bio.js
import React from 'react';
import './Bio.scss';
import Card from '../../components/Card/Card';
import georgiBmx from "../../assets/img/georgi-bmx.jpg";
import kasaLogement from "../../assets/img/kasa-logement.png";


function Bio() {
    return (
        <div className="bio-content">
            <div className="bio-content-col1">
                <p>
                1 * About me <br />
                2 *<br />
                3 * Hi, I'm Georgina, a student in Master 1 DEV at<br />
                4 * ECV, currently doing a work-study program at<br />
                5 * Parker & Parker. My path in web development<br />
                6 * began 2021 ago with a training course at<br />
                7 * OpenClassrooms.<br />
                8 *<br />
                9 * I've moved between design and development,<br />
                10 * working for Monkey Monk, Betclic and now<br />
                11 * Parker & Parker. My path has enabled me to<br />
                12 * solidify my skills in HTML/CSS, versioning with<br />
                13 * GitLab/GitHub, and working with frameworks like<br />
                14 * Bootstrap and Twig.<br />
                15 *<br />
                16 * In Mastère 1, I'm venturing into exciting<br />
                17 * technologies like React and Svelte for Front-End,<br />
                18 * and Python and PHP for Back-End. My aim is to<br />
                19 * master these languages and frameworks to improve<br />
                20 * my development skills.<br />
                21 *<br />
                22 * If you're curious to see what I've done,<br />
                23 * take a look at my GitHub:<br />
                24 * “https://github.com/GeorginaBerrezel”.<br />
                25 * Join me on this adventure where every line of<br />
                26 * code is an opportunity to learn!<br />
                </p>
            </div>
            <div className="bio-content-col2">
                <p>What I'm doing outside is doing some differents sports like BMX and skate ! But sometimes I took roller quad for enjoying and sharing with more communities</p>
                <Card
                    imagePath={georgiBmx}
                    description="Sport is my passion"
                    iconPath="ri-riding-fill"
                />
                <p>But also</p>
                <Card
                    imagePath={kasaLogement}
                    description="Coding some stuff for project who need helps !"
                    iconPath="ri-reactjs-line"
                />
            </div>

        </div>
    );
}

export default Bio;
