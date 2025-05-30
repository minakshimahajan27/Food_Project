// import React from 'react'
// import Navbar from "./Components/Navbar/Navbar"
// import Home from "./Pages/Home/Home"
// import Footer from './Components/Footer/Footer'
// export default function App() {
//   return (
//     <>
//       <Navbar/>
//       <Home/>
//       <Footer/>
//     </>
//   )
// }
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import About from './Components/About/About';
// import Menu from './Components/Menu/Menu';
// import Team from './Components/Team/Team';
// import From from './Components/Form/From';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/reservation" element={<From />} />
        
//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// }
 
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LayoutWrapper from './Components/LayoutWrapper';

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
