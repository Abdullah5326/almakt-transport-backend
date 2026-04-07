require("dotenv").config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");
if (process.env.DB_TYPE === "local")
  mongoose.connect(process.env.LOCAL_DB_URL).then(() => {
    console.log("Local database is successfully connected.");
  });
else {
  mongoose.connect(process.env.CLOUD_DB_URL).then(() => {
    console.log("The cloud database is connected successfully");
  });
}

app.listen(process.env.PORT || 3000, (req, res, next) => {
  console.log("The server is listening on port 3000");
});
