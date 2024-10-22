import React, { useState, useEffect } from 'react';
import './MenuItems.css';

function MenuItem({ name, description, imageUrl }) {
  const [showDetails, setShowDetails] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const localStorageKey = `rating_${name}`; // Unique key for local storage

  useEffect(() => {
    const storedRating = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    if (storedRating.length > 0) {
      const total = storedRating.reduce((acc, curr) => acc + curr, 0);
      setAverageRating(total / storedRating.length);
    }
  }, [localStorageKey]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleRating = (rate) => {
    setUserRating(rate);
    updateLocalStorage(rate);
  };

  const updateLocalStorage = (rate) => {
    const storedRating = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    storedRating.push(rate);
    localStorage.setItem(localStorageKey, JSON.stringify(storedRating));
    
    // Recalculate average rating
    const total = storedRating.reduce((acc, curr) => acc + curr, 0);
    setAverageRating(total / storedRating.length);
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`star ${index < userRating ? 'filled' : ''}`}
        onClick={() => handleRating(index + 1)}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="menu-item">
      {imageUrl && <img src={imageUrl} alt={name} className="menu-item-image" />}
      <h2 className="menu-item-name">{name}</h2>
      <p className={`menu-item-description ${showDetails ? 'show' : ''}`}>{description}</p>
      <button className="menu-item-button" onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <div className="rating">
        {renderStars()}
      </div>
      {averageRating > 0 && (
        <p className="average-rating">Average Rating: {averageRating.toFixed(1)} / 5</p>
      )}
    </div>
  );
}

export default MenuItem;
