const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

// Config dot env file
dotenv.config();

// Database Call
connectDb();

// Rest object
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/users', require('./routes/userRoute'));


app.get('/', (req, res) => {
    res.send('Welcome to Wealth Wise API'); // You can customize this message
});

// Error Handling in Middleware

// Port
const PORT = 8081 || process.env.PORT 

// Listen Server
app.listen( PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});