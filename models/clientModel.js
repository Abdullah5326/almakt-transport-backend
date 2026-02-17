const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name of the client is required"],
  },

  address: String,
  mobileNo: String,
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
