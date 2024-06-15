// src/components/DinosaurDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import dinosaurData from '../data/dinosaurData';
import Card from './Card';
import './DinosaurDetail.css';

const DinosaurDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [dinosaur, setDinosaur] = useState(null);

    useEffect(() => {
        const dino = dinosaurData.find(d => d.id === parseInt(id));
        setDinosaur(dino);
    }, [id]);

    if (!dinosaur) return <div>Carregando...</div>;

    return (
        <div>
            <Link to="/dinosaurs">
                <button className="back-button">Voltar</button>
            </Link>
            <Card>
                <div>
                    <h1>{dinosaur.name}</h1>
                    <img src={dinosaur.image} alt={dinosaur.name} />
                    <p>{dinosaur.description}</p>
                    <p><strong>Nome cientifico: </strong>{dinosaur.scientificName}</p>
                    <p><strong>Período: </strong>{dinosaur.period}</p>
                    <p><strong>Alimentação: </strong>{dinosaur.diet}</p>
                </div>
            </Card>
        </div>
    );
};

export default DinosaurDetail;
