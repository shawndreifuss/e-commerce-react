const express = require('express');
const path = require('path');
const router = express.Router();
const {upload} = require('../multer');
const User = require('../models/User');
const ErrorHandler = require('../utils/ErrorHandler');

router.post('/register', upload.single('file'), async (req, res, next) => {
    const { name, email, password} = req.body;
    const userEmail = await User.findOne({email});

    if(userEmail) {
        return console.log('Email already exists');
    }

    const fileName = req.file.filename;
    const fileUrl = path.join(fileName)
    console.log(filename)
    const user = {   
        name,
        email,
        password,
        avatar: fileUrl
    };
const newUser = await User.create(user);
res.status(201).json({
    success: true,
    user: newUser

    });
});   
    


module.exports = router;


   
   
   


