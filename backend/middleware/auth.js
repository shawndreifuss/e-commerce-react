const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Check if user is authenticated or not
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;


  if(!token){
    return next(new ErrorHandler("Login first to access this resource.", 401));
  }
//  Insert JWT secret key
  const decoded = jwt.verify(token, "secret");
  req.user = await User.findById(decoded.id);
  

  next();
});
