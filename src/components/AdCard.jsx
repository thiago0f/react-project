import React from 'react';
import './AdCard.css';

const AdCard = ({ title, description, imageUrl, price, onBuy }) => {
  return (
    <div className="ad-card">
      {imageUrl && <img src={imageUrl} alt={title} className="ad-image" />}
      <div className="ad-content">
        <h3>{title}</h3>
        <p className="ad-description">{description}</p>
        {price && <p className="ad-price">${price}</p>}
        <button className="buy-button" onClick={onBuy}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default AdCard;