const express = require('express');
const cors = require("cors");
const createError = require("http-errors");
const routes = require('./src/routes');
const db = require("./src/db");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

console.log(routes.stack);

const app = express();
const port = process.env.PORT || 5000; // Choose a port for your API

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

const corsOptions = {
  origin: "http://localhost:"+port,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions)); // Enable CORS (Cross-Origin Resource Sharing)

// Define Swagger options
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "RESTful APIs for Book management system",
        version: "0.1.0",
        description: "This is a simple RESTful APIs for Book management system",
        contact: {
          name: "Ankit Pandey",
          email: "ankit2web@outlook.com",
        },
      },
      servers: [
        {
          url: "http://3.85.132.65", // Use localhost:5000 on local env
        },
      ],
    },
    apis: ["./src/book/swagger/*.js"],
  };

const swaggerSpec = swaggerJsdoc(options);

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});

app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {explorer: true}));

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