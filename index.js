const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '/dist')));

// Define any API routes before this runs
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});