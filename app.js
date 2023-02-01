require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const connectDB = require("./database/connect");
const teamRoutes = require("./routes/Team");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors({ origin: "https://teamsepl.onrender.com" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(`Connected To Database...`);
  } catch (error) {
    console.log(error);
  }
};
start();

app.use("/api/v1/teams", teamRoutes);

module.exports = app;
