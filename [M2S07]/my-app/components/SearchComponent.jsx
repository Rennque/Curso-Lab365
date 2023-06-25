import React, { useState } from 'react';

function SearchComponent({ users }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // Procurar o usuário na lista de usuários
    const user = users.find((user) => user.nickname === searchTerm);

    // Atualizar o estado com o resultado da pesquisa
    setSearchResult(user);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nickname do usuário"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>

      {searchResult ? (
        <div className="search-result">
          <h2>Resultado da Pesquisa:</h2>
          <p><strong>Nome:</strong> {searchResult.nickname}</p>
          <p><strong>Idade:</strong> {searchResult.idade}</p>
          <p><strong>Email:</strong> {searchResult.email}</p>
        </div>
      ) : (
        <p>Cadastro não encontrado</p>
      )}
    </div>
  );
}

export default SearchComponent;