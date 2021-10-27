const express = require("express");
var bodyParser = require('body-parser');

var rootRouter = require("./routes/root");
var taskRouter = require("./routes/taskSystem");
var authRouter = require("./routes/auth");

require("dotenv").config();

const app = express();

// Application middleware
app.use(express.json());
app.use(bodyParser.json());

// app.set('views', 'src/views');
// app.set('view engine', 'ejs');

// Route endpoints
app.use("/", rootRouter);
app.use("/", taskRouter);
app.use("/auth/", authRouter);

module.exports = app;