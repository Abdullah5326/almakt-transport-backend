const Trip = require("../models/tripModel");
const catchAsync = require("../utils/catchAsync");
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
  console.log("comes");
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = new Date().getDate();
  const startDate = new Date(`${year}/${month}/${date + 1}`);
  console.log(new Date(`${year}/${month + 1}/${date + 1}`), new Date());
  console.log(startDate);
  const lastMonthTrips = await Trip.aggregate([
    {
      $match: { startDate: { $lte: new Date() } },
    },
    { $match: { startDate: { $gte: new Date(startDate) } } },
    { $sort: { startDate: -1 } },
    {
      $lookup: {
        from: "clients",
        localField: "client",
        foreignField: "_id",
        as: "client",
      },
    },
    { $unwind: "$client" },
    {
      $lookup: {
        from: "drivers",
        localField: "driver",
        foreignField: "_id",
        as: "driver",
      },
    },
    { $unwind: "$driver" },
  ]);
  console.log(lastMonthTrips);
  res.status(200).json({
    status: "success",
    results: lastMonthTrips.length,
    data: { data: lastMonthTrips },
  });
};

exports.getLastYearTrips = async function (req, res, next) {
  const month = new Date().getMonth();
  const year = new Date().getFullYear() - 1;
  const date = new Date().getDate();
  const startDate = new Date(`${year}/${month + 1}/${date + 1}`);

  const lastYearTrips = await Trip.aggregate([
    {
      $match: { startDate: { $lte: new Date() } },
    },
    { $match: { startDate: { $gte: new Date(startDate) } } },
    { $sort: { startDate: -1 } },
    {
      $lookup: {
        from: "clients",
        localField: "client",
        foreignField: "_id",
        as: "client",
      },
    },
    { $unwind: "$client" },
    {
      $lookup: {
        from: "drivers",
        localField: "driver",
        foreignField: "_id",
        as: "driver",
      },
    },
    {
      $unwind: "$driver",
    },
  ]);

  res.status(200).json({
    status: "success",
    results: lastYearTrips.length,
    data: { data: lastYearTrips },
  });
};

exports.getTripsByDuration = catchAsync(async function (req, res, next) {
  let query = Trip.find();
  const todayDate = new Date();
  const { duration } = req.query;

  switch (duration) {
    case "daily": {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);

      const endOfToday = new Date();
      endOfToday.setHours(23, 59, 59, 999);
      query = query.find({
        startDate: { $lte: endOfToday, $gte: startOfToday },
      });
      break;
    }
    case "weekly": {
      const startOfWeek = new Date();
      startOfWeek.setDate(startOfWeek.getDate() - 7);
      console.log(startOfWeek);
      console.log(duration);
      query = query.find({
        startDate: { $lte: todayDate, $gte: startOfWeek },
      });
      break;
    }
    case "monthly": {
      const startOfMonth = new Date();
      startOfMonth.setMonth(todayDate.getMonth() - 1);
      console.log(startOfMonth);
      query = query.find({
        startDate: { $lte: todayDate, $gte: startOfMonth },
      });
      break;
    }
    case "yearly": {
      const startOfYear = new Date();
      startOfYear.setFullYear(todayDate.getFullYear() - 1);
      query = query.find({
        startDate: { $lte: todayDate, $gte: startOfYear },
      });
      break;
    }
    default:
      throw new Error(next("Please provide valid duration"));
  }
  const result = await query;
  res.status(200).json({
    status: "success",
    results: result.length,
    data: { data: result },
  });
});

exports.durationalTrips = async function (req, res, next) {
  const month = new Date().getMonth();
  const year = new Date().getFullYear() - 1;
  const date = new Date().getDate();
  const startDate = new Date(`${year}/${month + 1}/${date + 1}`);

  const trips = await Trip.aggregate([
    {
      $match: { startDate: { $lte: new Date() } },
    },
    { $match: { startDate: { $gte: new Date(startDate) } } },
    {
      $group: {
        _id: { $month: "$startDate" },
        totalTrips: { $sum: 1 },
      },
    },
  ]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const result = months.map((month, index) => {
    const found = trips.find((item) => item._id === index + 1);

    return {
      month,
      totalTrips: found ? found.totalTrips : 0,
    };
  });
  res.status(200).json({
    status: "success",
    data: { data: result },
  });
};

// I want to count each month trips and return it
