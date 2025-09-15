
const express = require('express');
const router = express.Router();
const db = require('../js/db');

// GET /api/logs
router.get('/logs', async (req, res) => {
  try {
    const result = await db.query('SELECT id, details, timestamp FROM logs ORDER BY timestamp DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching logs:', err);
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
});

module.exports = router;
