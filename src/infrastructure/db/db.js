
// Uses pg Pool and exports query()
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  max: 10,
});

pool.on('connect', () => console.log('✅ Connected to PostgreSQL (pool)'));
pool.on('error', (err) => console.error('Postgres pool error', err));

module.exports = {
  query: (text, params) => pool.query(text, params),
};