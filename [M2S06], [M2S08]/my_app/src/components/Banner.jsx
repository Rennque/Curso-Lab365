import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Banner = () => {
  const { bannerData } = useContext(AppContext);

  return (
    <div className="banner">
      <h1>{bannerData.title}</h1>
      <p>{bannerData.subtitle}</p>
    </div>
  );
};

export default Banner;