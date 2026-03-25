const Trip = require("../models/tripModel");
const {
  createOne,
  getAll,
  updateOne,
  deleteOne,
  getOne,
} = require("./handleFactory");

exports.createTrip = createOne(Trip);
exports.getAllTrips = getAll(Trip);
exports.getTrip = getOne(Trip, { path: "driver client" });
exports.updateTrip = updateOne(Trip);
exports.deleteTrip = deleteOne(Trip);

exports.getLastMonthTrips = async function (req, res, next) {
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = new Date().getDate();
  const startDate = new Date(`${year}/${month}/${date + 1}`);
  console.log(new Date(`${year}/${month + 1}/${date + 1}`), new Date());
  const lastMonthTrips = await Trip.aggregate([
    {
      $match: { date: { $lte: new Date() } },
    },
    { $match: { date: { $gte: new Date(startDate) } } },
  ]);

  res.status(200).json({
    status: "success",
    results: lastMonthTrips.length,
    data: { lastDurationTrips: lastMonthTrips },
  });
};

exports.getLastYearTrips = async function (req, res, next) {
  const month = new Date().getMonth();
  const year = new Date().getFullYear() - 1;
  const date = new Date().getDate();
  const startDate = new Date(`${year}/${month + 1}/${date + 1}`);

  const lastYearTrips = await Trip.aggregate([
    {
      $match: { date: { $lte: new Date() } },
    },
    { $match: { date: { $gte: new Date(startDate) } } },
  ]);

  res.status(200).json({
    status: "success",
    results: lastYearTrips.length,
    data: { lastDurationTrips: lastYearTrips },
  });
};
