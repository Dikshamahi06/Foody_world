import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav_logo"><span>🍟</span>OOdy_world</div>
      <ul className="nav_list">
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/gallery"); }}>Choose Your Order</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/gallery1");}}>Best Meals</a>
        <a href="#"onClick={(e)=>{e.preventDefault();navigate("/recipe");}}>Recipes</a>
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/login");}}>Login</a>
   
      </ul>
    </nav>
  );
};

export default Navbar;
