
module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || "alpha",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "995637",
    options: {
      dialect: process.env.DIALECT || "mysql",
      host: process.env.HOST || "localhost",
      storage: "./database.mysql"
    }
  }
};
