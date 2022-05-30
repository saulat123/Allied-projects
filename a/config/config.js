const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const config = {
  app: { port: process.env.port },
};

module.exports = config;
    