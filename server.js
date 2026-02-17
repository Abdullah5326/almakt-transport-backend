require("dotenv").config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect(process.env.LOCAL_DB_URL).then(() => {
  console.log("Local database is successfully connected.");
});

app.listen(process.env.PORT || 3000, "localhost", (req, res, next) => {
  console.log("The server is listening on port 3000");
});
