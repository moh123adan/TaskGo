import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = 5000;


connectDB();

app.listen(port, function (req, res) {
  console.log("server is running on port " + port);
});
