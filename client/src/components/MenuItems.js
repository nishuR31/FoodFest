import React, { useState, useEffect } from 'react';
import './MenuItems.css';
import axios from 'axios';

function MenuItem({ name, description, imageUrl }) {
  const [showDetails, setShowDetails] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state for rating fetch
  const [saving, setSaving] = useState(false); // Loading state for rating submission
  const [error, setError] = useState(''); // Error handling state



  useEffect(() => {
    // Fetch average rating and rating count from the server
    const fetchRatings = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`/api/ratings/${encodeURIComponent(name)}`);
        setAverageRating(response.data.averageRating || 0);
        setRatingCount(response.data.ratingCount || 0);
      } catch (error) {
        console.error('Error fetching average rating:', error.response?.data || error);
        alert('Failed to fetch ratings. Please try again later.'); // User-friendly error message
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };
    fetchRatings();
  }, [name]);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleRating = async (rate) => {
    if (rate === userRating) return; // Prevent submitting the same rating again

    setUserRating(rate);
    setSaving(true); // Start saving state

    try {
      // Save rating to the server
      const response = await axios.post(`/api/rate`, { name, rating: rate });
      console.log(response.data.message);

      // Update average rating and count based on response
      setAverageRating(response.data.averageRating);
      setRatingCount(response.data.ratingCount);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error saving rating:', error);
      setError('Failed to save rating. Please try again later.');
    } finally {
      setSaving(false); // End saving state
    }
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`star ${index < userRating ? 'filled' : ''} ${saving ? 'disabled' : ''}`} // Disable interaction while saving
        onClick={() => !saving && handleRating(index + 1)} // Prevent multiple clicks while saving
        style={{ cursor: saving ? 'not-allowed' : 'pointer' }} // Change cursor during saving
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

      {loading ? (
        <p>Loading ratings...</p>
      ) : (
        <>
          <div className="rating">
            {renderStars()}
          </div>
          {averageRating > 0 && (
            <p className="average-rating">
              Average Rating: {averageRating.toFixed(1)} / 5 ({ratingCount} ratings)
            </p>
          )}
        </>
      )}

      {error && <p className="error-message">{error}</p>} {/* Show error message */}
    </div>
  );
}

export default MenuItem;
