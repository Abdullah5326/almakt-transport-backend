const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoute");
const driverRouter = require("./routes/driverRoute");
const clientRouter = require("./routes/clientRoute");
const tripRouter = require("./routes/tripRoute");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.get("/", async (req, res, next) => {
  console.log("request is received");

  res.status(200).json({
    status: "success",
    message: "The backend is successfully started",
  });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/drivers", driverRouter);
app.use("/api/v1/clients", clientRouter);
app.use("/api/v1/trips", tripRouter);

app.use(globalErrorHandler);

module.exports = app;
