import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/farm-tours">Farm Tours</Link></li>
            <li><Link to="/booking">Book a Service</Link></li>
            <li><Link to="/service-management">Manage Services</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;