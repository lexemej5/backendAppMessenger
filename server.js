// server.js (or app.js)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const router = require("./routes/route");

const app = express();
app.use(cors());
app.use(express.json());

connectDb();
app.use("/api", router);

module.exports = app;  // Export the app
