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
            <div className='Homebuttons'>
                <Link to="/dinosaurs">
                    <button>Dinossauros</button>
                </Link>
                <Link to="/timeline">
                    <button>Linha do tempo</button>
                </Link>
            </div>
            <CommentSection />
        </div>
    );
};

export default Home;