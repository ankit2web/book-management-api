const express = require('express');
const createError = require("http-errors");
const routes = require('./src/routes');
const db = require("./src/db");

console.log(routes.stack);

const app = express();
const port = process.env.PORT || 5000; // Choose a port for your API

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});

app.use('/', routes);

// catch 404 and forward to error handler
    app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    console.log("---------> Here Error handler");
    console.error("Error:", err);
    res.status(err.status || 500);
    res.send({message: "error"});
});

module.exports = app;