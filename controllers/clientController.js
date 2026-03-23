const Client = require("../models/clientModel");
const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  getOne,
} = require("./handleFactory");

exports.getAllClients = getAll(Client);
exports.getClient = getOne(Client, { path: "trips" });
exports.createClient = createOne(Client);
exports.updateClient = updateOne(Client);
exports.deleteClient = deleteOne(Client);
