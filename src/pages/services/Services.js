// src/pages/services/Services.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Services.css'; // Ensure you create this CSS file for specific styling

function Services() {
  return (
    <div className="services-container">
      <h1>To gain more information use the below tabs</h1>
      <nav>
        <NavLink style={{ marginLeft: '30px', color: 'white' }}  to="Videos" className={({ isActive }) => (isActive ? 'active' : '')}>
          <h3>Videos</h3>
        </NavLink>
        <NavLink style={{ marginLeft: '30px', color: 'white' }}  to="websites" className={({ isActive }) => (isActive ? 'active' : '')}>
          <h3>Websites</h3>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Services;
