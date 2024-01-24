const mongoose = require('mongoose');

const connectDb = () => {
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/e-commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then((data) => {
        console.log("Connected to MongoDB successfully");
    })
}

module.exports = connectDb;