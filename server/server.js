const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Serve the static files from the React app build folder
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Fallback for any unknown routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
