const db = require('../db/db');

class LogRepository {
  async findAll() {
    const result = await db.query(
      'SELECT id, details, timestamp FROM logs ORDER BY timestamp DESC'
    );
    return result.rows;
  }

  /*async save(log) {
    const result = await db.query(
      'INSERT INTO logs (details, timestamp) VALUES ($1, $2) RETURNING id',
      [log.details, log.timestamp]
    );
    // return a new Log entity with the inserted ID
    return new Log(result.rows[0].id, log.details, log.timestamp);
  }*/
}

module.exports = LogRepository;