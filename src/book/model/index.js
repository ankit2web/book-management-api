const mongoose = require('mongoose');

// Define a Mongoose schema for detailed book records
const bookSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    summary: String,
    createdAt: Number,
    updatedAt: Number,
});
  
const BookModel = mongoose.model('BookModel', bookSchema);
module.exports = BookModel;