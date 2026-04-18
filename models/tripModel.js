const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name of the tour is required."],
  },

  origin: {
    type: String,
    required: [true, "The origin of  the goods is required."],
  },

  destination: {
    type: String,
    required: [true, "The destination of the trip is required."],
  },

  startDate: {
    type: Date,
    default: Date.now,
  },

  deadlineDate: {
    type: Date,
    required: [true, "The deadline date is required"],
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

  paymentMethod: {
    type: String,
    enum: ["cash", "online", "credit"],
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  tripPrice: {
    type: Number,
    required: [true, "The price of the trip is required"],
  },

  receivedAmount: {
    type: Number,
    default: 0,
  },
  paidTo: {
    type: String,
    enum: ["owner", "driver"],
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
