import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ product }) => {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>Valor: R$ {product.value}</p>
      <p>{product.description}</p>
      <ul>
        {product.characteristics.map((characteristic, index) => (
          <li key={index}>{characteristic}</li>
        ))}
      </ul>
      <p>ID: {product.id}</p>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    characteristics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;