import React from 'react';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';

const ContactPage = () => {
  return (
    <div>
      <h1>Entre em Contato</h1>

      <ContactForm />

      <h2>Informações de Contato</h2>
      <ContactCard
        nome="Nome do Contato"
        telefone="(00) 1234-5678"
        email="contato@example.com"
      />
    </div>
  );
};

export default ContactPage;