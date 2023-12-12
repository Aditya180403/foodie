import React from 'react'
import "./Header.css";
import pizza from "../images/pizza.jpg"
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
   <div className='header'>
    <div className="info">
    
     <div className="left">
      <div className="bold">
        <h1>
        The taste of tradition,
        <br/>
        with a modern twist.
        </h1>
      </div>
      <div className="light">
        This website is for people who love to eat and who appreciate good food.
        <br />
        With recipes that are both delicious and visually appealing , you're sure to find
        <br />
        something to wow your taste buds.
      </div>
      
     </div>
     <div className="right">
      <img className='pizza' src={pizza}></img>
     </div>
    </div>
    </div>
  )
}

export default Header
