const { populate } = require("dotenv");
const Client = require("../models/clientModel");
const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  getOne,
} = require("./handleFactory");

exports.getAllClients = getAll(Client, {
  path: "trips",
});
exports.getClient = getOne(Client, {
  path: "trips",
  populate: [
    {
      path: "driver",
      model: "Driver",
    },
    { path: "client" },
  ],
});
exports.createClient = createOne(Client);
exports.updateClient = updateOne(Client);
exports.deleteClient = deleteOne(Client);
