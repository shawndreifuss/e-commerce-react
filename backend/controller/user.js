const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const User = require("../models/User");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");


// Register Route
router.post("/register", upload.single("file"), async (req, res, next) => {
  const { name, email, password } = req.body;
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    const fileName = req.file.filename;
    const filePath = `uploads/${fileName}`;
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
        });
      }
    });
    return console.log("Email already exists");
  }
   const fileName = req.file.filename;
  const user = {
    name,
    email,
    password,
   avatar: fileName,
  };

  const activationToken = createActivationToken(user);
    const activationUrl = `http://localhost:3000/activation/${activationToken}`;

    try {
      await sendMail({
        email: user.email,
        subject: "Activate your account",
        message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `please check your email:- ${user.email} to activate your account!`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
  }
});

// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user,"438bvyti84ybr89yq398vybt93y4gw43g4w4", {
    expiresIn: "5m",
  });
};


// Activation for Users Account

router.post("/activation", catchAsyncErrors (async (req, res, next) => {
  try {

    const {activationToken} = req.body
    const newUser = jwt.verify(activationToken, "438bvyti84ybr89yq398vybt93y4gw43g4w4")
    if(!newUser) {
      return next(new ErrorHandler("Invalid Token", 400))
    }
      const {name, email, password, avatar} = newUser 
      

      let user = await User.findOne({email})
      if(user) {
        return next(new ErrorHandler("User already exists", 400))
      }
      
      user = await User.create({
        name,
        email,
        password,
        avatar
      })

      sendToken(user, 201, res)

      console.log(res)
      
    
  }  catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
  }));

// Login Route
router.post(
  "/login",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please provide the all fields!", 400));
      }

      const user = await User.findOne({ email }).select("password");

      if (!user) {
        return next(new ErrorHandler("User doesn't exists!", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);


module.exports = router;
