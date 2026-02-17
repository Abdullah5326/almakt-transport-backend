const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name of the tour is required."],
  },

  location: {
    type: String,
    required: [true, "The location of  the goods is required."],
  },

  destination: {
    type: String,
    required: [true, "The destination of the trip is required."],
  },

  date: {
    type: Date,
    default: Date.now(),
  },

  driver: {
    type: mongoose.Types.ObjectId,
    ref: "Driver",
    required: [true, "The driver of the trip  is required"],
  },

  client: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
    required: [true, "The client of the trip is required."],
  },

  amountReceivingMethod: {
    type: String,
    enum: ["cash", "online"],
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  priceOfTrip: {
    type: Number,
    required: [true, "The price of the trip is required"],
  },

  receivedAmount: {
    type: Number,
    default: 0,
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
