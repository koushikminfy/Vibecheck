const express = require('express');
const app = express();
const PORT = 5000;

const vibes = require('./data/sampleVibes');

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.status(200).send(' Welcome to VibeCheck API – Check your vibe, share your tribe!');
});

// All vibes
app.get('/api/v1/vibes', (req, res) => {
  res.status(200).json(vibes);
});


app.get('/api/v1/vibes/:id', (req, res) => {
  const vibeId = parseInt(req.params.id);
  const vibe = vibes.find(v => v.id === vibeId);

  if (!vibe) {
    return res.status(404).json({
      success: false,
      message: 'That vibe is off the grid, not found.'
    });
  }

  res.status(200).json(vibe);
});

// Start server
app.listen(PORT, () => {
  console.log(` Server is blasting off on port ${PORT}`);
});
