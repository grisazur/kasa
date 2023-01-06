import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

const Routeur = () => {
    return (
      <div>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/logement/:id' element={<Logement />} />
              <Route exact path='*' element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
      </div>
    );
  };
  
export default Routeur;