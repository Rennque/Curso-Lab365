import { useState } from 'react';
import UserCard from './UserCard';
import '../Styles/Header.css'

function Header() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    nickname: '',
    idade: '',
    email: '',
    senha: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = () => {
    const userInput = prompt('Digite seu nome:');
    setUsername(userInput);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se os campos estão preenchidos
    if (!formData.nickname || !formData.idade || !formData.email || !formData.senha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    // Armazenar o novo usuário na lista de usuários
    const newUser = {
      nickname: formData.nickname,
      idade: formData.idade,
      email: formData.email,
      senha: formData.senha
    };
    setUsers([...users, newUser]);

    // Limpar os campos do formulário
    setFormData({
      nickname: '',
      idade: '',
      email: '',
      senha: ''
    });
    setErrorMessage('');
  };

  return (
    <div>
      <header>
        <h1>Bem-vindo(a) {username ? username : 'Convidado'}</h1>
        <button onClick={handleClick}>Definir Nome</button>
      </header>

      <form onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <div>
          <label htmlFor="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="idade">Idade:</label>
          <input
            type="text"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Lista de Usuários Cadastrados</h2>
      <div className="user-card-list">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Header;