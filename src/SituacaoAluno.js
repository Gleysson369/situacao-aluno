import React, { useState } from 'react';
import Card from './Card';
import './SituacaoAluno.css'; 

const SituacaoAluno = () => {
  const [nomeAluno, setNomeAluno] = useState(''); 
  const [nota1, setNota1] = useState(0); 
  const [nota2, setNota2] = useState(0); 
  const [nota3, setNota3] = useState(0); 
  const [media, setMedia] = useState(null);
  const [mostrarCard, setMostrarCard] = useState(false); 

  const handleNomeChange = (event) => {
    setNomeAluno(event.target.value); 
  };

  const handleNotaChange = (index, event) => {
    const value = parseFloat(event.target.value);
    if (index === 1) setNota1(value);
    if (index === 2) setNota2(value);
    if (index === 3) setNota3(value);
  };

  const calcularMedia = () => {
    const mediaCalculada = (nota1 + nota2 + nota3) / 3;
    setMedia(mediaCalculada);
    setMostrarCard(true);
  };

  const situacao = media !== null && media >= 6 ? 'aprovado' : 'reprovado';

  return (
    <div className="situacao-aluno">
      <div className="input-container">
        <label htmlFor="nome">Nome do Aluno:</label>
        <input
          type="text"
          id="nome"
          value={nomeAluno}
          onChange={handleNomeChange}
          placeholder="Digite o nome do aluno"
        />
      </div>
      <div className="notas-container">
        <label htmlFor="nota1">Nota 1:</label>
        <input
          type="number"
          id="nota1"
          value={nota1}
          onChange={(e) => handleNotaChange(1, e)}
          min="0"
          max="10"
        />
        <label htmlFor="nota2">Nota 2:</label>
        <input
          type="number"
          id="nota2"
          value={nota2}
          onChange={(e) => handleNotaChange(2, e)}
          min="0"
          max="10"
        />
        <label htmlFor="nota3">Nota 3:</label>
        <input
          type="number"
          id="nota3"
          value={nota3}
          onChange={(e) => handleNotaChange(3, e)}
          min="0"
          max="10"
        />
        <button onClick={calcularMedia}>Calcular Média</button>
      </div>
      {mostrarCard && (
        <Card titulo={nomeAluno || "Aluno"} situacao={situacao} />
      )}
    </div>
  );
};

export default SituacaoAluno;
