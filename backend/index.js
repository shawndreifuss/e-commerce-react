
const app = require("./app");
const connectDb = require("./config/connection");
const PORT = process.env.PORT || 3001;

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

// Config
if (process.env.NODE_ENV === 'PRODUCTION') {
  require('dotenv').config({
    path: '.env'
  })
}

// Connect to MongoDB
connectDb();

// Create Server
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`)
});


