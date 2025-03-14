// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Define a root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

// Define a /test route (based on the question)
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Write your full name' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
