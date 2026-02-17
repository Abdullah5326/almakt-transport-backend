const jwt = require("jsonwebtoken");

const User = require("./../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const createSendToken = function (req, res, data, statusCode) {
  const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.cookie("jwt", token, {
    maxAge: 90 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      data,
    },
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  if (!req.cookies || !req.cookies.jwt)
    return next(
      new AppError("You are not logged in. Please log in again.", 401),
    );

  const token = req.cookies.jwt;
  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const id = decode.id;

  const user = await User.findById(id);

  if (!user)
    return next(
      new AppError("The user belonging to this token no longer exists.", 404),
    );

  req.user = user;
  next();
});

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    profileImg: req.body.profileImg,
  });
  createSendToken(req, res, user, 401);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError("Please provide email or password", 400));
  const user = await User.findOne({ email: req.body.email }).select(
    "+password",
  );

  if (!user || !(await user.correctPasswords(password, user.password)))
    return next(new AppError("The email or password is incorrect", 401));

  createSendToken(req, res, user, 200);
});

exports.getMe = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      user: req.user,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name,
    profileImg: req.body.profileImg,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user._id, fieldsToUpdate, {
    runValidators: true,
    returnDocument: "after",
  });

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { isActive: false },
    { returnDocument: "after" },
  );

  res.status(204).json({
    status: "success",
  });
});
