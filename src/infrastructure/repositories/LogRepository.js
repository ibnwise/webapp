const db = require('../db/db');

class LogRepository {
  async findAll() {
    const result = await db.query(
      'SELECT id, details, timestamp FROM logs ORDER BY timestamp DESC'
    );
    return result.rows;
  }
}

module.exports = LogRepository;
