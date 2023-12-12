
import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="title">
        Foodie's
      </div>
      <div>
       <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/chefs">Chefs</Link></li>
      </ul>
      </div> 
      <div className="cart">
        <button>Login</button>
        <button>Logout</button>
        </div>    
    </div>
  );
}

export default Navbar;
