const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The vehicle name is required"],
  },
  flatNo: {
    type: String,
    required: [true, "The vehicle flat no is required"],
  },
  vehicleRenewalDate: {
    type: Date,
    required: [true, "The vehicle renewal date."],
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
