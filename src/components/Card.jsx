

import React from 'react';
import './Card.css'; // Supondo que você terá um arquivo CSS para estilizar o card

const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;
