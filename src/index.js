const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");

const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = "mongo";
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URI)
  .then(() => console.log("connect success"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.send("<h1>Welcome to our docker project </h1>");
});
app.get("/work", (req, res) => {
  res.send(
    '<a href="https://www.google.com/">Welcome to our docker project go to google</a>'
  );
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
