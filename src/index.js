const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const Logger = require("./util");

const routes = require("./route");
const database = require("../src/config");

database.Connection();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Load environment variables from .env file
if (dotenv.error) {
    Logger.error("Error loading .env file:", dotenv.error);
} else {
    Logger.info(".env file loaded successfully");
}

// Allow cross-origin requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Serve static files from 'static' directory
app.use(express.static("static"));

// Log HTTP requests
app.use(morgan("dev"));

// Serve files from 'FILE' directory
// app.use("/file/", express.static(process.env.FILE));
app.use(express.static(path.join(`${process.env.FILE}`)));

// Define routes
app.use("/v1", routes);

module.exports = app;