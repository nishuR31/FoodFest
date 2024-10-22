const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api'); // Ensure the correct path to api.js

const app = express();

// Set up MySQL connection pool
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'food',
});

// Test database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');
    connection.release(); // Release the connection
  }
});

// Add a middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Log the request method and URL
  next(); // Call the next middleware
});

// Middleware
app.use(express.json()); // Parses JSON request bodies
// app.use(bodyParser.json()); // You can remove this if using express.json()

// Security and performance middleware
app.use(helmet()); // Helps secure your app by setting various HTTP headers
app.use(compression()); // Compresses response bodies
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(morgan('dev')); // Logs HTTP requests to the console

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// API routes
app.use('/api', apiRoutes);

// Serve static files from the React app (if you're using React)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch-all handler to serve React's index.html file for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
});

// 404 error handler
app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

// Start the server
const port = process.env.PORT || 3000; // Set the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export pool for use in your API routes
module.exports = pool; // Export the pool so that it can be used in the API routes
