const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  connection.config.namedPlaceholders = true;
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
};
