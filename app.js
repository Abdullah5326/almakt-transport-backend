const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
  console.log("request is received");

  res.status(200).json({
    status: "success",
    message: "The backend is successfully started",
  });
});

module.exports = app;
