// ```js
const express = require('express');
const cors = require('cors');
const path = require('path');
const logsRoute = require('./routes/logs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Serve your views folder
// app.use('public/views', express.static(path.join(__dirname, 'views')));

// API routes (prefix them under /api)
app.use('/api', logsRoute);


// Fallback to index.html for client-side routing (optional)
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});