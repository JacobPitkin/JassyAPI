const db = require('./db');
const helper = require('../helper');

async function getMultiple() {
  const rows = await db.query(
    'SELECT first_name, last_name FROM testing', []
  );

  return helper.emptyOrRows(rows);
}

module.exports = {
  getMultiple
};
