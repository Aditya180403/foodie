import React from 'react';
import './Menu.css';
import MenuCard from '../Cards/Card';
import spaghettiImage from '../images/pizza.jpg';

const Menu = () => {
  const menuItems = [
    {
      price: 9.99,
      dishName: 'Spaghetti Carbonara',
      imageSrc: spaghettiImage,
      description: 'Classic Italian pasta with eggs, pancetta, Parmesan cheese, and black pepper.',
    },
    {
      price: 9.99,
      dishName: 'Spaghetti Carbonara',
      imageSrc: spaghettiImage,
      description: 'Classic Italian pasta with eggs, pancetta, Parmesan cheese, and black pepper.',
    },
    {
      price: 9.99,
      dishName: 'Spaghetti Carbonara',
      imageSrc: spaghettiImage,
      description: 'Classic Italian pasta with eggs, pancetta, Parmesan cheese, and black pepper.',
    },
    
  ];

  return (
    <div className="menu-main">
      <div className="menu-title">
       <h1 className='menu-name'> Menu</h1>
      </div>
      <div className="menu-container">
      
      {menuItems.map((item, index) => (
        <MenuCard
          key={index}
          price={item.price}
          dishName={item.dishName}
          imageSrc={item.imageSrc}
          description={item.description}
          
          
        />
      ))}
    </div>
    
    </div>

    
  );
};

export default Menu;
