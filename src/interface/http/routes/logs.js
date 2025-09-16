
const express = require('express');
const router = express.Router();
const db = require('../../../infrastructure/db/db');
const LogController = require('../controllers/LogController');

// GET /api/logs
router.get('/logs', LogController.getLogs)

module.exports = router;
