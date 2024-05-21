const express = require("express");
const app = express();
const cors = require("cors");
// import { db } from "./src/db/db.config.js";
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json());
const db = require("./src/db/db.config.js");
//to create database
db.sequelize.sync();

const controller = require("./src/controller/user.contoller");
// app.get("/", function (req, res) {
//   const sql = "SELECT * FROM users";
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

app.post("/postUser", (req, res) => {
  controller.createUser(req, res);
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
