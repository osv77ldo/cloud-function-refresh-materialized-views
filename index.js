require("dotenv").config();
const { log } = require("./plugins/logger");
const { pool } = require("./plugins/pg");

const { refreshMaterializedView } = require("./services/dbServices/db");

exports.function = async (req, res) => {

  const client = await pool().connect();

  try {
    log.info('succesfully connected to DB');
    return await refreshMaterializedView(client, res);
  } catch (error) {
    log.error(`Error Occurred!${error}`);
    await client.end();
    return res.status(500).send("Some Error Occurred!");
  }

};

