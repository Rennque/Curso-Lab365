import React from 'react';
import PropTypes from 'prop-types';
import Poro from './img/poro.jpg';

const ProductList = () => {
  const products = [
    { name: 'Produto 1', image: Poro, description: 'Anime, animê ou animé, se refere é uma animação desenhada à mão ou por computação gráfica do Japão. Fora do Japão e em inglês, anime refere-se à animação japonesa e refere-se especificamente à animação produzida no Japão.', link: 'https://example.com/produto1' },
    { name: 'Produto 2', image: Poro, description: 'Anime, animê ou animé, se refere é uma animação desenhada à mão ou por computação gráfica do Japão. Fora do Japão e em inglês, anime refere-se à animação japonesa e refere-se especificamente à animação produzida no Japão.', link: 'https://example.com/produto2' },
    { name: 'Produto 3', image: Poro, description: 'Anime, animê ou animé, se refere é uma animação desenhada à mão ou por computação gráfica do Japão. Fora do Japão e em inglês, anime refere-se à animação japonesa e refere-se especificamente à animação produzida no Japão.', link: 'https://example.com/produto3' }
  ];

  return (
    <div className="product-list">
      <h2 className="section-title">Nossos Produtos</h2>
      <div className="product-items">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <a href={product.link} className="more-link">Mais sobre</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;