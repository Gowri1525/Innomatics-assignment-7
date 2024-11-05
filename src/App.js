// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ContactSearch from './pages/ContactSearch';
import NotFound from './pages/NotFound';
import Services from './pages/services/Services';
import Design from './pages/services/Videos';
import Development from './pages/services/websites';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact/search" element={<ContactSearch />} />
        <Route path="services" element={<Services />}>
          <Route path="Videos" element={<Design />} />
          <Route path="websites" element={<Development />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
