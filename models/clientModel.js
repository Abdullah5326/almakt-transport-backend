const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name of the client is required"],
    },

    address: String,
    mobileNo: String,
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
);

clientSchema.virtual("trips", {
  ref: "Trip",
  localField: "_id",
  foreignField: "client",
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
