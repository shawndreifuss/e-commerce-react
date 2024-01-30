const express = require('express');
const ErrorHandler = require('./utils/ErrorHandler');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');





// Middlewares
app.use(express.json());
app.use(cookieParser());  
app.use("/" , express.static("uploads"));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
})); 
app.use(bodyParser.urlencoded({ extended: true }));

// Routes 
const user = require('./controller/user');
app.use("/api/user", user);


// Config 
if(process.env.Node_ENV !== 'PRODUCTION'){
    require('dotenv').config({
    path:"backend/config/.env"
    })
}

//  Error Handling
app.use(ErrorHandler);

module.exports = app;
