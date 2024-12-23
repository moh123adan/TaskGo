import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.use("/api/users", userRoute);

connectDB();

app.listen(port, function (req, res) {
  console.log("server is running on port " + port);
});
