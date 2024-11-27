const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const express = require("express");
const app = express();
const connectToDb = require("./src/db/db.js");

app.use(cors());
connectToDb();

app.get("/", (req, res) => {
  res.send("Hello World !");
});

module.export = app;
