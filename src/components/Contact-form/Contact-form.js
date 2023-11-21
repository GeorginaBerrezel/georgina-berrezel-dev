// src/components/ContactForm-form/ContactForm-form.js
import React, { useState } from 'react';
import Button from "../Buttons/Button";
import './Contact-form.scss';
import Card from "../Card/Card";
import georgiBmx from "../../assets/img/georgi-bmx.jpg";
import kasaLogement from "../../assets/img/kasa-logement.png";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Importe le style CSS de la bibliothèque

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        message: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoute ici la logique pour traiter les données du formulaire, par exemple, l'envoi à un serveur
        console.log('Formulaire soumis avec les données :', formData);
    };

    return (
        <div className="container-form">
            <div className="form-content-col1">
                <form className="content-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">_name :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phoneNumber">_phone-number:</label>
                    <PhoneInput
                        international
                        defaultCountry="FR"
                        value={formData.phoneNumber}
                        onChange={(value) => setFormData((prevData) => ({ ...prevData, phoneNumber: value }))}
                    />

                    <label htmlFor="email">_email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">-message :</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>


                    <Button type="cta-default">submit-message</Button>
                </form>
            </div>
            <div className="form-content-col2">
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

export default ContactForm;
