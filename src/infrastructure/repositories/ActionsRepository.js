// src/infrastructure/repositories/ActionsRepository.js
const db = require('../../infrastructure/db/db'); // adjust path if needed
const Action = require('../../domain/entities/Action');

class ActionsRepository {
  async getByName(name) {
    const res = await db.query('SELECT id, name FROM actions WHERE name = $1', [name]);
    if (!res.rowCount) return null;
    return new Action(res.rows[0]);
  }

  async ensureByName(name) {
    // returns existing id or inserts then returns entity
    const existing = await this.getByName(name);
    if (existing) return existing;
    const insert = await db.query('INSERT INTO actions (name) VALUES ($1) RETURNING id, name', [name]);
    return new Action(insert.rows[0]);
  }
}

module.exports = ActionsRepository;