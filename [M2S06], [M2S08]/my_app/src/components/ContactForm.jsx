import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: '',
  });

  const [formErrors, setFormErrors] = useState({
    nomeError: '',
    telefoneError: '',
    emailError: '',
    mensagemError: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      nomeError: '',
      telefoneError: '',
      emailError: '',
      mensagemError: '',
    };

    if (!formData.nome) {
      isValid = false;
      errors.nomeError = 'O campo Nome é obrigatório.';
    }

    if (!formData.telefone) {
      isValid = false;
      errors.telefoneError = 'O campo Telefone é obrigatório.';
    }

    if (!formData.email) {
      isValid = false;
      errors.emailError = 'O campo Email é obrigatório.';
    } else if (!formData.email.includes('@') || !formData.email.includes('.com')) {
      isValid = false;
      errors.emailError = 'O campo Email deve ser um email válido.';
    }

    if (!formData.mensagem) {
      isValid = false;
      errors.mensagemError = 'O campo Mensagem é obrigatório.';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Envie os dados para o backend aqui
      console.log(formData);
    }
  };

  return (
    <div>
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {formErrors.nomeError && <span className="error">{formErrors.nomeError}</span>}
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          {formErrors.telefoneError && <span className="error">{formErrors.telefoneError}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.emailError && <span className="error">{formErrors.emailError}</span>}
        </div>

        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
          ></textarea>
          {formErrors.mensagemError && <span className="error">{formErrors.mensagemError}</span>}
        </div>

        <button type="submit" disabled={!validateForm()}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;