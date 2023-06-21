import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Poro from './img/poro.jpg';

import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner message="Bem-vindo ao Meu site!" />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;