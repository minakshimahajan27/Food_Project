import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Components/About/About';
import Menu from '../Components/Menu/Menu';
import Team from '../Components/Team/Team';
import From from '../Components/Form/From';
import Not_Found from '../Pages/Not_Found/Not_Found';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function LayoutWrapper() {
  const location = useLocation();

  const layoutPaths = ['/', '/about', '/menu', '/team', '/reservation'];
  const showLayout = layoutPaths.includes(location.pathname);

  return (
    <>
      {showLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reservation" element={<From />} />
        <Route path="*" element={<Not_Found />} />
      </Routes>

      {showLayout && <Footer />}
    </>
  );
}
