import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bannerData, setBannerData] = useState({
    title: 'Bem-vindo ao Meu site!',
    subtitle: 'Descrição do banner...',
  });

  return (
    <AppContext.Provider value={{ bannerData, setBannerData }}>
      {children}
    </AppContext.Provider>
  );
};