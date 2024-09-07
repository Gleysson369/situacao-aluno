import React from 'react';
import './Card.css';

const Card = ({ titulo, situacao }) => {
  return (
    <div className={`card ${situacao}`}>
      <h2>{titulo}</h2>
      <p>{situacao === 'aprovado' ? 'Aprovado' : 'Reprovado'}</p>
    </div>
  );
};

export default Card;