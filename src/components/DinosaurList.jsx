import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import dinosaurData from '../data/dinosaurData';
import Home from './Home';

const DinosaurList = () => {
    const [dinosaurs, setDinosaurs] = useState([]);
    const [filteredDinosaurs, setFilteredDinosaurs] = useState([]);

    useEffect(() => {
        // Simulando uma chamada de API
        setDinosaurs(dinosaurData);
        setFilteredDinosaurs(dinosaurData);
        // console.log ("UseEffect pass")
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = dinosaurs.filter(dino => dino.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredDinosaurs(filtered);
    };

    return (
        <div>
            <div className='div-back-button'>
                <Link to="/">
                    <button className="back-button">Voltar</button>
                </Link>
            </div>

            {/* <Link to="/" button className="back-button">Voltar</Link> */}

            <h1>Dinossauros</h1>
            <SearchBar onSearch={handleSearch}>
                <p>Digite o nome de um dinossauro para buscar:</p>
            </SearchBar>
            <br />
            <div className="dino-list">
                {filteredDinosaurs.map(dino => (
                    <Link to={`/dinosaurs/${dino.id}`}>
                        <div key={dino.id} className="dino-item">
                            <img src={dino.avatar} alt={dino.image} />
                            <p>{dino.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DinosaurList;
