import logo from './logo.svg';
import React,{ Fragment } from 'react';
import Header from './components/Landing Page/Header';
import Footer from './components/Landing Page/Footer';
import Page from './components/Landing Page/Page';
import Amat from './components/Client/Register';
import Clients from './components/Client/Clients';
import About from './components/Client/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import react from 'react';

function App() {
  console.log(Header)
  return (
    <Router>
      <Fragment>
        <Header />
        <Footer />
        <Routes>
          <Route exact path='/' element={<Page/>} />
        </Routes>
        <section className="container">
          <Routes>
            <Route exact path='/clients/amat' element={<Amat/>} />
            <Route exact path='/clients' element={<Clients/>} />
            <Route exact path='/contactus' element={<About/>} />

          </Routes>
            
        </section>
        
      </Fragment>
    </Router>
    
    
    
  );
}

export default App;
