const SQL = require("@nearform/sql");
const { log } = require("../../plugins/logger");


exports.refreshMaterializedView = async (client, reply) => {
  try {
    const sql = SQL`REFRESH MATERIALIZED VIEW YOUR_MATERIALIZED_VIEW_NAME`;
    await client.query(sql);
    log.info(`Schedular ran successfully`);
    await client.end();
    return reply.status(200).send("success");
  } catch (err) {
    throw err;
  }
};
