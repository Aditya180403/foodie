import React from 'react'
import './Why.css';
import pastry from '../images/pastry.jpg'
import delivery from '../images/delivery.png'
import sheild from '../images/sheild.png'
import list from '../images/list.png'
import Card from '../Cards/Card';

const Why = () => {
  return (
    <div className='y-que'> 
      <div className="ques">
        <h1>
        Why <span className='que'>Foodie's</span>
        </h1>
      </div>
      <div className="card">
        <div className="s-card">
          <img src={list} className='icon ' style={{ fill: 'green' }} />
          
          <h3 className='q'>Easy To Order</h3></div>
        <div className="s-card">
        <img src={delivery} className='icon ' />
          
        <h3 className='q'>Fastest Delivery</h3></div>
        <div className="s-card">
        <img src={sheild} className='icon ' />
        <h3 className='q'>Best Quality</h3></div>
      </div>

      <div className="overview">
      <div className="o-right">
     <img className='pastry' src={pastry}></img>
    </div>
    
    <div className="o-left">
      <div className="o-title">
        OVERVIEW
      </div>
     <div className="o-bold">
       <h3>
       A Little Information For Our Guests
       </h3>
     </div>
     <div className="o-light">
      Here we attach brief data about our
       wistara coffee space that will make it easier <br /> for our guests at our cage to get to know us better.
     </div>
     <div className="no">
      <div className="num">
        <h1 className='o-no'>15K+ </h1>
      <br/>
      Happy Customers</div>
      <div className="num">
      <h1 className='o-no'>10+ </h1>
      <br />Award Win</div>
      <div className="num">
      <h1 className='o-no'>30+ </h1>
      <br />Food Menu</div>
     </div>

     
    </div>
    
   </div>


      
    </div>
  )
}

export default Why
