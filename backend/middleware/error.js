const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongoose Object ID Error
  if(err.name === "CastError"){
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Duplicat key Error     
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
    }

    // Validation Error
    if(err.name === "JsonWebTokenError"){
        const message = "JSON Web Token is invalid. Try Again!!!";
        err = new ErrorHandler(message, 400);
    }


    // JWT Expired
    if(err.name === "TokenExpiredError"){
        const message = "JSON Web Token is expired. Try Again!!!";
        err = new ErrorHandler(message, 400);
    }

    res.statusCode(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

