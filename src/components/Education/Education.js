import React, { useState } from 'react';
import './Education.scss';

const educationData = [
    {
        date: "2023 to 2025",
        title: "Mastère 1",
        field: "Développement Web",
        school: "ECV Bordeaux",
        experiences: [
            {
                during: "since 09/2022",
                company: "Parker & Parker",
                city: "Bordeaux",
                contract: "Contrat d’apprentissage",
                function: "Intégration Front-End :",
                task: "CMS Drupal, php symphony",
                techno: "scss"
            },
        ],
    },
    {
        date: "2023",
        title: "Bac+ 3/4 (niveau 6)",
        field: "Développement Front-End",
        school: "OpenClassrooms Bordeaux",
        experiences: [
            {
                during: "since 01/2023",
                company: "Parker & Parker",
                city: "Bordeaux",
                contract: "Contrat d’apprentissage",
                function: "Intégration Front-End :",
                task: "CMS Drupal, php symphony",
                techno: "scss"
            },
            {
                during: "06/22 to 12/23",
                company: "Betclic",
                city: "Bordeaux",
                contract: "Contrat d’apprentissage",
                function: "Intégration Front-End :",
                task: "Intégration de maquette Figma en Twig et Scss sur VSCode. Versionning avec GitHub et déploiement avec Jenkins & Octopus.",
                techno: ""
            },
            {
                during: "06/21 to 04/22",
                company: "Monkey Monk",
                city: "Bordeaux",
                contract: "Contrat d’apprentissage",
                function: "Intégration Front-End :",
                task: "Intégration HTML5/CSS3 sur VSCode, Versionning avec GitLab, Docker, Maquettes Xd et intégration WordPress.",
                techno: ""
            },
        ],
    },
    {
        date: "2019",
        title: "BTS DG",
        field: "Design Graphique option Communication des Médias Numériques",
        school: "St Vincent de Paul Bordeaux",
        experiences: [
            {
                during: "06/20 to 11/20",
                company: "KN Design",
                city: "Bordeaux",
                contract: "CDD",
                function: "Web designeuse et intégratrice :",
                task: "Maquettes Xd, intégration HTML5, CSS3, intégration WordPress et Prestashop, prise de besoins & suivi clients.",
                techno: ""
            },
            {
                during: "11/19 to 05/20",
                company: "Studio Raunio",
                city: "Turku (FINLAND)",
                contract: "Intership ERASMUS+",
                function: "Studio d’architecture et de design graphique, animations et projets artistiques.",
                task: "",
                techno: ""
            },
        ],
    },
    {
        date: "2016",
        title: "BTS DCEV",
        field: "Design de Communication Espace & Volume",
        school: "Imm@ Concept Bordeaux",
        experiences: [], // Peut être un tableau vide si pas d'expérience à afficher
    },
    {
        date: "2014",
        title: "Bac Pro CVP",
        field: "Communication Visuelle & Pluri-médias",
        school: "St Vincent de Paul Bordeaux",
        experiences: [], // Peut être un tableau vide si pas d'expérience à afficher
    },
];

function Education() {
    const [experiences, setExperiences] = useState([]);

    const handleItemClick = (texts) => {
        setExperiences(texts);
    };

    return (
        <div>
            <ul className="education-list">
                {educationData.map((item, index) => (
                    <li
                        key={index}
                        className="education-item"
                        onClick={() => handleItemClick(item.experiences)}
                    >
                        <span className="education-date">{item.date}</span>
                        <span className="purple">{item.title}</span>
                        <span className="green">{item.field}</span>
                        <span className="pink">{item.school}</span>
                    </li>
                ))}
            </ul>

            {experiences.length > 0 && (
                <div className="experience-split">
                    {experiences.map((experience, index) => (
                        <div className="experience-item" key={index}>
                            <p><span className="pink">{experience.company}</span><span className="green">{experience.contract}</span><span>{experience.date}</span><span className="snippets">{experience.during}</span></p>
                            <p className="purple">{experience.function}<span className="regular">{experience.task}</span></p>
                            {/* Ajoute d'autres éléments de l'expérience si nécessaire */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Education;
