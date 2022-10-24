const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const redis = require("redis");
const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = "mongo";
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

//Connect to redis
const REDIS_PORT = 6380;
const REDIS_HOST = "redis";
const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));
redisClient.on("connect", () => console.log("Redis Client connect"));
redisClient.connect();
mongoose
  .connect(URI)
  .then(() => console.log("connect success"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  redisClient.set("products", "products...");

  res.send("<h1>Welcome to our docker project </h1>");
});
app.get("/data", async (req, res) => {
  const data = await redisClient.get("products");
  res.send(`<h1>${data}</h1>`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
