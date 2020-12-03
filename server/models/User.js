const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) =>
  sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });
