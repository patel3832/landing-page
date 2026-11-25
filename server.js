const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Path to the landing page
const landingPagePath = path.join(__dirname, 'telegram_bangla_landing.html');

// Serve static assets from the public directory if present
app.use(express.static(path.join(__dirname, 'public')));

// Root route serves the Telegram Bangla landing page
app.get('/', (req, res) => {
  res.sendFile(landingPagePath);
});

// Alias route
app.get('/telegram_bangla_landing', (req, res) => {
  res.sendFile(landingPagePath);
});

// Start server
app.listen(PORT, () => {
  console.log('===============================================');
  console.log('🚀 Express server running successfully!');
  console.log(`🔗 Local URL: http://localhost:${PORT}`);
  console.log('📄 Serving: telegram_bangla_landing.html');
  console.log('===============================================');
});

