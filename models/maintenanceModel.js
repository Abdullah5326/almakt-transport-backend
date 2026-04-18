const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "The maintenance amount is required."],
  },
  vehicle: {
    type: mongoose.Types.ObjectId,
    ref: "Vehicle",
    required: [true, "The vehicle is required on which spent money."],
  },
  description: String,
  maintenanceDate: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: [true, "The maintenance category is required"],
    enum: {
      values: ["spare-parts", "oil-change", "labour-charge", "diesel"],
      message: "Please select one of the available maintenance categories",
    },
    lowercase: true,
    trim: true,
  },
});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);

module.exports = Maintenance;
