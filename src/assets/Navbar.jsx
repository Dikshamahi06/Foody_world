import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav_logo"><span>🍟</span>OOdy_world</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav_list ${menuOpen ? 'open' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/gallery"); }}>Choose Your Order</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/gallery1"); }}>Best Meals</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/recipe"); }}>Recipes</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>Login</a>
      </ul>
    </nav>
  );
};

export default Navbar;
