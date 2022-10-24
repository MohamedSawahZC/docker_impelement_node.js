const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

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
