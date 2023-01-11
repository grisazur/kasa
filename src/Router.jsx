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
          {/* BrowserRouter est recommandé car il utilise le History API inclus dans HTML5 pour surveiller l’historique de navigation */}
          <BrowserRouter>
            <Header />
            <Routes>
              {/* on utilise "exact" afin de dire que ce <Route> ne fonctionnne que si l'URL correspond absolument à la valeur de son attribut path */}
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/logement/:id' element={<Logement />} />
              <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
      </div>
    );
  };
  
export default Routeur;