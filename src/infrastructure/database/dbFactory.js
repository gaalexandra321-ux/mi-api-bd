const { Pool } = require('pg');
const config = require('../../config/environment');

let pool = new Pool({
  host: config.localDb.host,
  port: config.localDb.port,
  user: config.localDb.user,
  password: config.localDb.password,
  database: config.localDb.database,
});

module.exports = pool;