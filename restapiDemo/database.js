const express = require("express");
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const { connectMongoDB } = require("./connection.js");
const userRouter = require('./routes/user'); // Updated import path

connectMongoDB("mongodb://127.0.0.1:27017/database_demo");

app.use("/user", userRouter);

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("You are now listening on port 8000");
});
