import { Sequelize } from "sequelize";
import userModel from "../models/user.model.js";
import homeModel from "../models/home.model.js";
import eventAndExamModel from "../models/eventAndExam.model.js";
import latestUpdateModel from "../models/latestUpdate.model.js";
import latestNewsModel from "../models/latestNews.model.js";
import dotenv from "dotenv";
dotenv.config();

const urlDB = `mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_NAME}`;
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
db.homeScreenData = homeModel(sequelize, Sequelize);
db.eventExamData = eventAndExamModel(sequelize, Sequelize);
db.latestUpdateData = latestUpdateModel(sequelize, Sequelize);

db.latestnewsData = latestNewsModel(sequelize, Sequelize);

// module.exports = db;

export { db };
