import React from 'react';
import { Link } from 'react-router-dom';
import CommentSection from './CommentSection';

const Home = () => {
    return (
        <div>
            <img src='https://i.imgur.com/szNdqtm.png' style={{ width: '150px', height: 'auto',}} alt="Logo da Dinopedia" />
            <h1>Bem-vindo à Dinopedia</h1>
            <p>Explore o mundo dos dinossauros!</p>
            <div><Link to="/dinosaurs">Ver Dinossauros    </Link> </div>
            <div><Link to="/timeline">Ver Linha do Tempo  </Link></div>
            <CommentSection />
        </div>
    );
};

export default Home;