// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <a href="/" className="logo">JET <span>SET GO</span></a>
//       <ul>
//         <li><a href="/" className="nav-link active">Home</a></li>
//         <li><a href="#container" className="nav-link">Restaurants</a></li>
//         <li><a href="/tour" className="nav-link">Tours</a></li>
//         <li><a href="/weather" className="nav-link">Weather</a></li>
//         <li><a href="/about" className="nav-link">About Us</a></li>
//       </ul>
//       <div className="h-right">
//         <a href="/follow" className="header-link">Follow Us</a>
//         <a href="/instagram" className="header-icon"><i className="fab fa-instagram"></i></a>
//         <a href="/twitter" className="header-icon"><i className="fab fa-twitter"></i></a>
//         <a href="/facebook" className="header-icon"><i className="fab fa-facebook"></i></a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">JET <span>SET GO</span></a>
      <ul>
        <li><a href="#home" className="nav-link active">Home</a></li>
        <li><a href="#restaurant" className="nav-link">Restaurants</a></li>
        <li><a href="#tours" className="nav-link">Tours</a></li>
        <li><a href="#weather" className="nav-link">Weather</a></li>
        <li><a href="#about" className="nav-link">About Us</a></li>
      </ul>
      <div className="h-right">
        <a href="/follow" className="header-link">Follow Us</a>
        <a href="/instagram" className="header-icon"><i className="fab fa-instagram"></i></a>
        <a href="/twitter" className="header-icon"><i className="fab fa-twitter"></i></a>
        <a href="/facebook" className="header-icon"><i className="fab fa-facebook"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;