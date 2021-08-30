const { Pool } = require("pg");

const { PG_HOST, PG_USER, PG_PASSWORD, PG_DBNAME, PG_PORT } = require("../config/config");

const pool = () =>
  new Pool({
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DBNAME,
    port: PG_PORT
  });

module.exports = {
  pool
};
