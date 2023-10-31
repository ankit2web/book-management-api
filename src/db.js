const mongoose = require('mongoose');

// Establish DB connection for reading and writing data in the MongoDB database
const uri = "mongodb+srv://ankit:fiM4zYM7CQj5hXvX@cluster0.ze9vsf1.mongodb.net/?retryWrites=true&w=majority";
const dbConnection = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

module.exports = dbConnection;