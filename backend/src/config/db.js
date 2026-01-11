const { Sequelize } = require('sequelize');

const db = new Sequelize(
    process.env.DB_NAME || "plantcare",
    process.env.DB_USER || "postgres",
    process.env.DB_PASSWORD === "" ? null : process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
        dialect: "postgres",
        logging: false
    }
);

module.exports = db;
