import React from 'react';
import { Link } from 'react-router-dom';
import CommentSection from './CommentSection';

const Home = () => {
    return (
        <div>
            <img src='https://i.imgur.com/drJWzEN.png' style={{ width: '150px', height: 'auto', }} alt="Logo da Dinopedia" />
            <h1 className="DinoTitle">Dinopedia</h1>
            <h2>Bem-vindo</h2>
            <p>Trabalho Jurassico de Programação Web!</p>
            <div><Link to="/dinosaurs">Ver Dinossauros    </Link> </div>
            <div><Link to="/timeline">Ver Linha do Tempo  </Link></div>
            <CommentSection />
        </div>
    );
};

export default Home;