// src/infrastructure/repositories/LogRepository.js
const db = require('../../infrastructure/db/db');
const Log = require('../../domain/entities/Log');

class LogRepository {
  async findAll() {
    const result = await db.query(
      `SELECT id, user_id, action_id, table_name, record_id, timestamp, details
       FROM logs
       ORDER BY timestamp DESC`
    );
    return result.rows.map(row => new Log({
      id: row.id,
      userId: row.user_id,
      actionId: row.action_id,
      tableName: row.table_name,
      recordId: row.record_id,
      timestamp: row.timestamp,
      details: row.details
    }));
  }

  async save(log) {
    const result = await db.query(
      `INSERT INTO logs (user_id, action_id, table_name, record_id, timestamp, details)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [log.userId, log.actionId, log.tableName, log.recordId, log.timestamp, log.details]
    );
    return new Log({ ...log, id: result.rows[0].id });
  }
}

module.exports = LogRepository;