import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Poro from './img/poro.jpg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Products} />
          <Route path="/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;