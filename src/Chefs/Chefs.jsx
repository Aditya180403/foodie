import React from 'react'
import './Chefs.css'
import A from '../images/A.jpg';
import B from '../images/B.jpg';
import C from '../images/C.jpg';
import D from '../images/D.jpg';

const Chefs = () => {
  return (
    <div className='chef'>
      <div className="meet">
      <h1 className='meet-chef'>Meet Our Chefs</h1>
      </div>

      <div className="chefs">
        <div className="pp">
          <img src={A} className='A'></img>
          <h3 className='name'>Hudson Lee</h3>
        </div>
        <div className="pp">
          <img src={B} className='A'></img>
          <h3 className='name'>Saiman Chonk</h3>
        </div>
        <div className="pp">
          <img src={C} className='A'></img>
          <h3 className='name'>Matt Murdock</h3>
        </div>
        <div className="pp">
          <img src={D} className='A'></img>
          <h3 className='name'>Smooth Operator</h3>
        </div>
      </div>
     
      
    </div>
  )
}

export default Chefs
