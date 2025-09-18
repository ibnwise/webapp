// ```js
const express = require('express');
const cors = require('cors');
const path = require('path');
const logsRoute = require('./interface/http/routes/logs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, './interface/views')));


// API routes (prefix them under /api)
app.use('/api', logsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});