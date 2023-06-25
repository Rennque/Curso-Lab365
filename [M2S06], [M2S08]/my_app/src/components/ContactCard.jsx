import React from 'react';

const ContactCard = ({ nome, telefone, email }) => {
  return (
    <div className="contact-card">
      <h3>{nome}</h3>
      <p>Telefone: {telefone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default ContactCard;