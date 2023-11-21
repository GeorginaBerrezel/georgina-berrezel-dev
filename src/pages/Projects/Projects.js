// src/pages/Projects.js
import React from 'react';
//import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import kasaLogementImage from '../../assets/img/kasa-logement.png';
import lesPetitsPlats from '../../assets/img/les-petits-plats.png';
import ohMyFood from '../../assets/img/oh-my-food.png';
import gameOn from '../../assets/img/game-on.png';

import './Projects.scss';

function Projects() {
    return (
     <div className="container-project">
         <div className="content-project">
            <Card
                title="Project 1"
                titleExtend="_react-app"
                imagePath={kasaLogementImage}
                description="React project! Lorem ipsum dolor sit amet."
                iconPath="ri-reactjs-line"
            />
            <Card
                title="Project 2"
                titleExtend="_js-algoritm"
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
             {/*<Card*/}
             {/*    title="Project 4"*/}
             {/*    titleExtend="_js-form"*/}
             {/*    imagePath={gameOn}*/}
             {/*    description="First steps in JS world"*/}
             {/*    iconPath="ri-javascript-fill"*/}
             {/*/>*/}
         </div>
     </div>
    );
}

export default Projects;
