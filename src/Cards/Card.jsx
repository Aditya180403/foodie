import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; 

const MenuCard = ({ price, dishName, imageSrc, description }) => {
  return (
    <div className="menu-m">
    <div className="menu-card">
      <div className="image-container">
        <img src={imageSrc} alt={dishName} className="dish-image" />
      </div>
      <div className="card-details">
        <h3 className="dish-name">{dishName}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
    </div>
  );
};

MenuCard.propTypes = {
  price: PropTypes.number.isRequired,
  dishName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MenuCard;
