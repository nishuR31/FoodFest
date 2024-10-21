const express = require('express');
const path = require('path');
const helmet = require('helmet'); // Security
const compression = require('compression'); // Gzip compression
const cors = require('cors'); // Cross-Origin Resource Sharing
const morgan = require('morgan'); // HTTP request logging
const rateLimit = require('express-rate-limit'); // Rate limiting

const app = express();

// Set the port manually
const port = process.env.PORT || 3001; // Fallback to 3001 if PORT is not set

// Apply security headers
app.use(helmet());

// Enable gzip compression
app.use(compression());

// Allow CORS (configure as needed)
app.use(cors());

// Enable request logging in 'dev' format
app.use(morgan('dev'));

// Rate limiter to prevent DDoS or brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Serve the static files from the React app build folder
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Fallback for any unknown routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Differentiate between development and production error handling
  if (app.get('env') === 'development') {
    res.status(err.status || 500).json({
      message: err.message,
      error: err, // Full error in dev mode
    });
  } else {
    res.status(err.status || 500).send('Internal Server Error');
  }
});

// Handle 404 errors (route not found)
app.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
