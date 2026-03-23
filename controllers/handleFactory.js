const catchAsync = require("../utils/catchAsync");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.find();

    res.status(200).json({
      status: "success",
      results: docs.length,
      data: {
        data: docs,
      },
    });
  });

exports.getOne = (Model, populateObj) =>
  catchAsync(async (req, res, next) => {
    console.log(populateObj);
    const id = req.params.id;
    let query = Model.findById(id);

    if (populateObj) query = query.populate(populateObj);

    const doc = await query;

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const id = req.params.id;

    const doc = await Model.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const id = req.params.id;
    await Model.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      message: "You successfully deleted the driver",
    });
  });
