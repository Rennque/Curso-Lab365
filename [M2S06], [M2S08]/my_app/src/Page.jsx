import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ContactForm from './components/ProductList';
import ContactCard from './components/Card';
import Footer from './components/Footer';

const Page = () => {
  return (
    <div>
      <Header />
      <Banner message="Entre em contato conosco" />
      <ContactForm />
      <ContactCard />
      <Footer />
    </div>
  );
};

export default Page;