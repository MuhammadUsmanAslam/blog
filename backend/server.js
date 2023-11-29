const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

// env config
dotenv.config();

// Rest Object
const app = express();

// DB Connect
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get('/', (req, res) => {
    res.status(200).json({msg: "you're on home page"})
})

// listen
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.DEV_MODE} mode PORT: ${process.env.PORT}`)
})
