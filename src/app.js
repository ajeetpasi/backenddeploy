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
import crouselRoter from "./routes/home.route.js";
import newsRouter from "./routes/home.route.js";
import updateRouter from "./routes/home.route.js";
import eventAndExamRouter from "./routes/home.route.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", crouselRoter);
app.use("/api/v1/users", newsRouter);
app.use("/api/v1/users", updateRouter);
app.use("/api/v1/users", eventAndExamRouter);

export { app };
