import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const baseInitial = "/"
const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path={`${baseInitial}`} element={<Home />} />
        <Route path={`${baseInitial}/services`} element={<Services />} />
        <Route path={`${baseInitial}/about`} element={<About />} />
        <Route path={`${baseInitial}/contact`} element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
