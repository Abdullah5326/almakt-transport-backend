const Client = require("../models/clientModel");
const { getAll, createOne, updateOne, deleteOne } = require("./handleFactory");

exports.getAllClients = getAll(Client);
exports.createClient = createOne(Client);
exports.updateClient = updateOne(Client);
exports.deleteClient = deleteOne(Client);
