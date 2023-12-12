import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Why from './Why/Why';
import Footer from './Footer/Footer.jsx';
// import Home from '.';

import Menu from './Menu/Menu.jsx';
import Chefs from './Chefs/Chefs.jsx';


const App = () => {
  return (
    
      <div className="App">
        
        <Navbar />
        <Header/>
        <Menu />
        <Routes>
          <Route path="/" element={<Why/>} />
          <Route path="/about" element={<Why/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/chefs" element={<Chefs/>} />
          </Routes> 
          
          
          <Footer />
      </div>
    
  );
}

export default App;
