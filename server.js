const app = require("./app");

app.listen(3000, "localhost", (req, res, next) => {
  console.log("The server is listening on port 3000");
});
