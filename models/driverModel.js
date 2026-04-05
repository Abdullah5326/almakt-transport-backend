const mongoose = require("mongoose");
const validator = require("validator");

const driverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This field is required"],
    },

    vehicleName: {
      type: String,
      required: [true, "The vehicle name field is required."],
    },

    vehicleRenewalDate: {
      type: Date,
      required: [true, "The vehicle renewal date is required"],
    },

    idCardExpiryDate: {
      type: Date,
      required: [true, "The expiry date of UAE card is required"],
    },

    mobileNo: {
      type: String,
      required: [true, "The mobile no is required"],
    },

    email: {
      type: String,
      validate: [validator.isEmail, "Please provide correct format of email."],
    },
    basicSalary: {
      type: String,
      required: [true, "The basic salary is required"],
    },
    vehicleFlatNo: {
      type: String,
      required: [true, "The vehicle flat no is required"],
    },
    status: {
      type: String,
      enum: ["onLeave", "active", "inactive"],
      default: "active",
      trim: true,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
);

driverSchema.virtual("trips", {
  ref: "Trip",
  localField: "_id",
  foreignField: "driver",
});

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
