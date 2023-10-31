const router = require("express").Router();

// import book routes
const getAllBooks = require("./book/getAllBooks");
const createBook = require("./book/createBook");
const deleteBookById = require("./book/deleteBookById");

// Define book routes
router.use("/", getAllBooks);
router.use("/", createBook);
router.use("/", deleteBookById);

module.exports = router;