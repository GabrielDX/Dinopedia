import React from 'react';
import { Link } from 'react-router-dom';

const timelineEvents = [
  { date: '250 milhões de anos atrás', event: 'Início do Triássico: Primeiro surgimento dos dinossauros.' },
  { date: '201 milhões de anos atrás', event: 'Final do Triássico: Extinção em massa do Triássico-Jurássico.' },
  { date: '201 milhões de anos atrás', event: 'Início do Jurássico: Diversificação dos dinossauros.' },
  { date: '150 milhões de anos atrás', event: 'Aparecimento do Arqueopterix: Um dos primeiros dinossauros com penas.' },
  { date: '145 milhões de anos atrás', event: 'Início do Cretáceo: Proliferação dos dinossauros e surgimento de novos grupos.' },
  { date: '66 milhões de anos atrás', event: 'Extinção dos Dinossauros: Evento de extinção em massa.' },
  { date: '1677', event: 'Primeira descoberta de um osso de dinossauro documentada pelo Dr. Robert Plot.' },
  { date: '1824', event: 'O termo "dinossauro" é cunhado por Sir Richard Owen.' },
  { date: '1861', event: 'Descoberta do primeiro fóssil de Arqueopterix.' },
  { date: '1902', event: 'Descoberta do Tyrannosaurus rex por Barnum Brown.' },
  { date: '1970s', event: 'Teoria do impacto de asteroide como causa da extinção dos dinossauros é proposta.' },
  { date: '66 milhões de anos atrás - Presente', event: 'Evolução das aves modernas, descendentes diretos dos dinossauros.' },
];

function Timeline() {
  return (
    <div className="timeline">
        <button className="back-button">
        <Link to="/">Voltar</Link>
      </button>
      <h1>Linha do Tempo dos Dinossauros</h1>
      <ul>
        {timelineEvents.map((event, index) => (
          <li key={index} className="timeline-event">
            <span className="timeline-date">{event.date}</span>
            <span className="timeline-description">{event.event}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Timeline;
