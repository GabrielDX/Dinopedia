import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dinosaurData from '../data/dinosaurData';

const DinosaurDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [dinosaur, setDinosaur] = useState(null);

    useEffect(() => {
        const dino = dinosaurData.find(d => d.id === parseInt(id));
        setDinosaur(dino);
    }, [id]);

    if (!dinosaur) return <div>Loading...</div>;

    return (
        <div className="dino-detail">
            <button onClick={() => navigate(-1)}>Voltar</button>
            <h1>{dinosaur.name}</h1>
            <img src={dinosaur.image} alt={dinosaur.name} />
            <p>{dinosaur.description}</p>
            <p>Período: {dinosaur.period}</p>
            <p>Alimentação: {dinosaur.diet}</p>
        </div>
    );
};

export default DinosaurDetail;
