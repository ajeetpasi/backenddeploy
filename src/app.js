import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));

// app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
