const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRoute");
const driverRouter = require("./routes/driverRoute");
const clientRouter = require("./routes/clientRoute");
const tripRouter = require("./routes/tripRoute");
const vehicleRouter = require("./routes/vehicleRoute");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://almakt-transport-frontend.vercel.app",
    ],
  }),
);
app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/drivers", driverRouter);
app.use("/api/v1/clients", clientRouter);
app.use("/api/v1/trips", tripRouter);
app.use("/api/v1/vehicles", vehicleRouter);

app.use(globalErrorHandler);

module.exports = app;
