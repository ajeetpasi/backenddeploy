import dotenv from "dotenv";
import { db } from "./db/db.config.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

//to create database
db.sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log("Mysql db connection failed", err);
  });
