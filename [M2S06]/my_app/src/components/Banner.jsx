import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Banner = ({ message }) => {
  return (
    <div className="banner">
      <p className="banner-message">{message}</p>
      <Header />
    </div>
  );
};

Banner.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Banner;