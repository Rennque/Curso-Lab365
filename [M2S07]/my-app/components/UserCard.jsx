import React, { useState } from 'react';
import { FaEdit, FaThumbsUp } from 'react-icons/fa';

function UserCard({ user }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleEdit = () => {
    // Lógica para edição do usuário
    console.log('Editar usuário:', user);
  };

  return (
    <div className="user-card">
      <div className="user-card-header">
        <h3>{user.nickname}</h3>
        <div className="user-card-icons">
          <FaEdit className="edit-icon" onClick={handleEdit} />
          <span className="likes-count">{likes}</span>
          <FaThumbsUp className="like-icon" onClick={handleLike} />
        </div>
      </div>
      <p><strong>Idade:</strong> {user.idade}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserCard;