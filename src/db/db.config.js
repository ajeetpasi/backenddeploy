import { Sequelize } from "sequelize";
import userModel from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_HOST:", process.env.DB_HOST);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,

  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);
console.log("dbName", process.env.DB_NAME);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models-table
db.registerSchool = userModel(sequelize, Sequelize);

// module.exports = db;

export { db };
