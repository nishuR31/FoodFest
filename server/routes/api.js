const express = require('express');
const router = express.Router();
const pool = require('../db/db'); // Import MySQL connection

// GET: Fetch average rating and count
router.get('/ratings/:name', async (req, res) => { // Remove /api prefix
  const { name } = req.params;

  try {
    const [results] = await pool.promise().query(
      'SELECT AVG(rating) AS averageRating, COUNT(rating) AS ratingCount FROM ratings WHERE name = ?',
      [name]
    );
    if (results.length === 0) {
      return res.status(200).json({ averageRating: 0, ratingCount: 0 });
    }
    
    res.status(200).json({
      averageRating: results[0]?.averageRating ?? 0, // Use nullish coalescing to return 0 if no ratings
      ratingCount: results[0]?.ratingCount ?? 0, // Use nullish coalescing to return 0 if no ratings
    });
  } catch (err) {
    console.error('Error fetching ratings:', err);
    res.status(500).json({ error: 'Error fetching ratings' });
  }
});

// POST: Save rating
router.post('/rate', async (req, res) => { // Remove /api prefix
  console.log('Rate endpoint hit');
  const { name, rating } = req.body;

  console.log("Received request body:", req.body); // Log incoming request body

  // Validate rating
  if (!name || typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Name and rating must be provided. Rating must be a number between 1 and 5.' });
  }

  console.log("Submitting rating:", { name, rating });

  try {
    const [insertResult] = await pool.promise().query('INSERT INTO ratings (name, rating) VALUES (?, ?)', [name, rating]);
    console.log('Insert result:', insertResult);

    // Fetch the updated average rating and count
    const [results] = await pool.promise().query(
      'SELECT AVG(rating) AS averageRating, COUNT(rating) AS ratingCount FROM ratings WHERE name = ?',
      [name]
    );

    // Ensure averageRating is a number and handle default case
    const averageRating = results[0]?.averageRating ?? 0; // Default to 0 if no ratings
    const ratingCount = results[0]?.ratingCount ?? 0; // Default to 0 if no ratings

    // Respond with a success message and the new average rating
    res.status(200).json({
      message: 'Rating saved successfully',
      averageRating: Number(averageRating).toFixed(1), // Convert to number and limit to 1 decimal place
      ratingCount, // Include the count of ratings
    });
  } catch (err) {
    console.error('Error saving rating:', err);
    res.status(500).json({ error: 'Error saving rating' });
  }
});

module.exports = router;
