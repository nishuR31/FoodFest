import React, { useState } from 'react';
import './MenuItems.css';

function MenuItem({ name, price, discount, description, imageUrl }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="menu-item">
      {imageUrl && <img src={imageUrl} alt={name} className="menu-item-image" />}
      <h2>{name}</h2>
      <p>
        Price: ₹{price}{' '}
        {discount && <span className="discount">{discount}% Off</span>}
      </p>
      {showDetails && <p>{description}</p>}
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
}

export default MenuItem;
