import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'black', padding: '10px' }}> {/* Dark blue background */}
      <NavLink style={{ marginLeft: '10px', color: 'white' }} to="/" exact activeClassName="active">
        <h3>Home</h3>
      </NavLink>
      <NavLink style={{ marginLeft: '30px', color: 'white' }} to="/about" activeClassName="active">
        <h3>About</h3>
      </NavLink>
      <NavLink style={{ marginLeft: '30px', color: 'white' }} to="/services" activeClassName="active">
        <h3>Services</h3>
      </NavLink>
      <NavLink style={{ marginLeft: '30px', color: 'white' }} to="/contact" activeClassName="active">
        <h3>Feedback</h3>
      </NavLink>
    </nav>
  );
}

export default Navbar;
