// src/components/Timeline.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './Timeline.css';

const Timeline = () => {
    const timelineEvents = [
        { year: '250 milhões de anos atrás', event: 'Início do Triássico: Primeiro surgimento dos dinossauros.' },
        { year: '201 milhões de anos atrás', event: 'Final do Triássico: Extinção em massa do Triássico-Jurássico.' },
        { year: '201 milhões de anos atrás', event: 'Início do Jurássico: Diversificação dos dinossauros.' },
        { year: '150 milhões de anos atrás', event: 'Aparecimento do Arqueopterix: Um dos primeiros dinossauros com penas.' },
        { year: '145 milhões de anos atrás', event: 'Início do Cretáceo: Proliferação dos dinossauros e surgimento de novos grupos.' },
        { year: '66 milhões de anos atrás', event: 'Extinção dos Dinossauros: Evento de extinção em massa.' },
        { year: '1677', event: 'Primeira descoberta de um osso de dinossauro documentada pelo Dr. Robert Plot.' },
        { year: '1824', event: 'O termo "dinossauro" é cunhado por Sir Richard Owen.' },
        { year: '1861', event: 'Descoberta do primeiro fóssil de Arqueopterix.' },
        { year: '1902', event: 'Descoberta do Tyrannosaurus rex por Barnum Brown.' },
        { year: '1993', event: 'Lançamento do filme Jurassic Park, trazendo dinossauros à vida na era moderna.' },
        { year: '1997', event: 'Lançamento do filme O Mundo Perdido: Jurassic Park, sequência de Jurassic Park.' },
        { year: '2001', event: 'Lançamento do filme Jurassic Park III, continuando a saga de Jurassic Park.' },
        { year: '2001', event: 'Descoberta do Spinosaurus aegyptiacus, o Espinossauro, no Egito.' },
        { year: '2005', event: 'Lançamento do filme King Kong, com um espetacular confronto entre Kong e dinossauros.' },
        { year: '2015', event: 'Lançamento do filme Jurassic World, revitalizando o parque jurássico.' },
        { year: '2018', event: 'Lançamento do filme Jurassic World: Reino Ameaçado, com novas aventuras e perigos para os dinossauros.' },
        { year: '66 milhões de anos atrás - Presente', event: 'Evolução das aves modernas, descendentes diretos dos dinossauros.' },
    ];

    return (
        <div>
            <Link to="/">
                <button className="back-button">Voltar</button>
            </Link>
            <div className="timeline">
                {timelineEvents.map((event, index) => (
                    <Card>
                        <div>
                            <h2>{event.year}</h2>
                            <p>{event.event}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
