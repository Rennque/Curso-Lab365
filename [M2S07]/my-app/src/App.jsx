import React from 'react';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
import SearchComponent from '../components/SearchComponent';
import './App.css';

function App() {
  // Exemplo de lista de usuários
  const users = [
    { nickname: 'henrique', idade: 26, email: 'henrique@gmail.com' },
    { nickname: 'cintia', idade: 26, email: 'cintia@gmail.com' },
    { nickname: 'nicolas', idade: 6, email: 'nicolas@gmail.com' },
  ];

  return (
    <div className="App">
      <Header />

      <h1>Meu App</h1>

      <SearchComponent users={users} />

      <div className="user-cards">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;