import React, { useState } from 'react';
import './MenuItem.css';

function MenuItem({ name, price, discount, description }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="menu-item">
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
