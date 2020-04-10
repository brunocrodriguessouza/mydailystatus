import React from 'react';
import '../styles/styles.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const App = ({ Component, PageProps }) => {
  return (
    <div>
      <Header />
      <div className='min-h-screen container mx-auto'>
        <Component {...PageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;