import React, { useState } from 'react';
import './App.css';
import Card from './compone/Card';
import InfoBox from './compone/InfoBox';
import Button from './compone/Button';

function App() {
  const [userName] = useState('Henrique');

  return (
    <header>
      <h1>Bem-vindo, {userName}!</h1>
      <div className="app">
        <h1>Minha Página Inicial</h1>
        <Card title="Título do Card" description="Descrição do Card" />
        <InfoBox title="Título da InfoBox" info="Informação da InfoBox" />
        <Button label="Clique Aqui" onClick={() => console.log('Botão clicado!')} />
      </div>
    </header>
  );
}

export default App;