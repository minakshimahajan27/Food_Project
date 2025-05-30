
// import { useState } from 'react';
// import './Navbar.css';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <div className='Navbar'>
//         <div className='logo'>
//           <p>ZEESH</p>
//         </div>

//         <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <div className={`list ${menuOpen ? 'active' : ''}`}>
//           <ul>
//             <li>HOME</li>
//             <li>ABOUT US</li>
//             <li>SERVICES</li>
//             <li>TEAM</li>
//             <li>RESERVATION</li>
//           </ul>
//         </div>

//         <div className='menu-button'>
//           <button>OUR MENU</button>
//         </div>
//       </div>

//       <div className='div'></div>
//     </>
//   );
// }
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='Navbar'>
      <div className='logo'>
        <p>ZEESH</p>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`list ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>ABOUT US</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}>SERVICES</Link></li>
          <li><Link to="/team" onClick={toggleMenu}>TEAM</Link></li>
          <li><Link to="/reservation" onClick={toggleMenu}>RESERVATION</Link></li>
        </ul>
      </div>

      <div className='menu-button'>
        <Link to="/menu"><button>OUR MENU</button></Link>
      </div>
    </div>
  );
}
