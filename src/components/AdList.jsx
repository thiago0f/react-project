import React from 'react';
import AdCard from './AdCard';
import './AdList.css';

const AdList = ({ ads, onAdBuy }) => {
  return (
    <div className="ad-list">
      <h2>Anúncios Disponíveis</h2>
      <div className="ad-grid">
        {ads.map((ad) => (
          <AdCard
            key={ad.id}
            title={ad.title}
            description={ad.description}
            imageUrl={ad.imageUrl}
            price={ad.price}
            onBuy={() => onAdBuy(ad.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdList;