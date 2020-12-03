const express = require("express");
const bodyParcer = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config");

const app = express();
app.use(morgan("combined"));
app.use(bodyParcer.json());
app.use(cors());

require('./routes')(app)

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`server started on port ${config.port}`);
});
