import React from 'react';
import '../styles/styles.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div className='min-h-screen container mx-auto'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;