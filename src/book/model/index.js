const mongoose = require('mongoose');

// Define a Mongoose schema for detailed book records
const bookSchema = new mongoose.Schema({
    id: Number,
    title: String,
    author: String,
    summary: String,
});
  
const BookModel = mongoose.model('BookModel', bookSchema);
module.exports = BookModel;