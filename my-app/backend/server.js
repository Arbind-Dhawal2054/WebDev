const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());

// Define the /api route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the backend server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
