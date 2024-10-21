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
      <h2 className="menu-item-name">{name}</h2>
      {showDetails && <p className="menu-item-description">{description}</p>}
      <button className={`menu-item-button ${showDetails ? 'active' : ''}`} onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
}

export default MenuItem;
